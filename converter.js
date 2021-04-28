const fs = require("fs"),
  Converter = require("openapi-to-postmanv2"),
  request = require("request");
const token = require("./tokenSave.json");
require("dotenv").config();

const from = "spec/v1/v1.spec.yml",
  to = "spec/v1/postman-collection.json",
  id = process.env.POSTMAN_COLLECTION_ID,
  uid = process.env.POSTMAN_COLLECTION_UID,
  key = process.env.POSTMAN_API_KEY;

function handleConversion(originalFileName, newFileName) {
  const openapiData = fs.readFileSync(originalFileName, "utf8");

  Converter.convert(
    { type: "string", data: openapiData },
    {},
    (err, conversionResult) => {
      if (!conversionResult.result) {
        console.log("Could not convert", conversionResult.reason);
      } else {
        fs.writeFileSync(
          newFileName,
          JSON.stringify(conversionResult.output[0].data, null, 2)
        );
        console.log("Converted " + originalFileName + " to " + newFileName);
      }
    }
  );
}

function updateLocalCollection(newFileName, newFile) {
  fs.writeFileSync("./" + newFileName, JSON.stringify(newFile, null, 2));
  console.log("Writing to " + newFileName);
}

function updatePostman(newFile, collectionUid) {
  // const data = fs.readFileSync("./" + newFileName, "utf8");
  // compile PUT request to update the Postman collection
  const putOptions = {
    method: "PUT",
    url: "https://api.getpostman.com/collections/" + collectionUid,
    qs: {
      format: "2.1.0",
    },
    headers: {
      "Cache-Control": "no-cache",
      "x-api-key": key,
      "Content-Type": "application/json",
    },
    body: newFile,
    json: true,
  };

  // submit PUT request to update the Postman collection
  request(putOptions, function (error, response, body) {
    if (error) throw new Error(error);
    console.log("Collection update successful...");
  });
}

// update the Postman collection locally and in the cloud
function updateCollection(newFileName) {
  const data = fs.readFileSync("./" + newFileName, "utf8");

  const file = JSON.parse(data);

  file.info._postman_id = file.info.id = id; // add new property that is identical to id

  const newFile = {};
  newFile.collection = file; // wrap JSON object in new "collection" property

  // let newArr = newFile.collection.item[0].item;
  // for (let i = 0; i < newArr.length; i++) {
  //   const req = newArr[i];
  //   if (req.name === "User Login") {
  //     console.log(`Token script added to request - ${req.name}`);
  //     newFile.collection.item[0].item[i].event = token;
  //   }
  // }
  // call function to update the local collection file
  updateLocalCollection(newFileName, newFile);

  // call function to update the cloud version of the Postman collection using Postman API
  updatePostman(newFile, uid);
}

handleConversion(from, to);
updateCollection(to);

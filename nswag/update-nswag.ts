const fs = require("fs");

const specFileName = "./spec/v1/v1.spec.yml";

const nswagFileName = "./nswag/KAApiClient.nswag";

const fileArray = [{ nswagFileName, specFileName }];

fileArray.forEach((file) =>
  writeApiSpec(file.nswagFileName, file.specFileName)
);

function writeApiSpec(nswagFileName, specFileName) {
  let specFile = fs.readFileSync(specFileName).toString();

  let nswagFileContent = fs.readFileSync(nswagFileName);
  var nswagFile = JSON.parse(nswagFileContent);

  nswagFile.documentGenerator.fromDocument.json = specFile;
  console.log(nswagFileName, specFileName);

  fs.writeFile(
    nswagFileName,
    JSON.stringify(nswagFile, null, 2),
    function writeJSON(err) {
      if (err) return console.log(err);
      console.log("writing to " + nswagFileName);
    }
  );
}

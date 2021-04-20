const fs = require("fs");

const nswagFileName = "./nswag/KAApiClient.nswag";

const fileArray = [nswagFileName];

fileArray.forEach((file) => cleanNswag(file));

function cleanNswag(nswagFileName) {
  let nswagFileContent = fs.readFileSync(nswagFileName);
  const nswagFile = JSON.parse(nswagFileContent);

  nswagFile.documentGenerator.fromDocument.json = "";

  fs.writeFile(
    nswagFileName,
    JSON.stringify(nswagFile, null, 2),
    function writeJSON(err) {
      if (err) return console.log(err);
      console.log("writing to " + nswagFileName);
    }
  );
}

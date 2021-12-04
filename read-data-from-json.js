const fs = require("fs");

let json = {
  name: "abdul",
  age: 23,
  gander: "male",
};

const FILE_NAME = "jsonFile.json";
const jsonString = JSON.stringify(json);
fs.writeFileSync(FILE_NAME, jsonString);

console.log(`read`, fs.readFileSync(FILE_NAME, "utf8"));
// console.log(`read`, fs.readFileSync(FILE_NAME).toString());

// update the data
let fileString = fs.readFileSync(FILE_NAME, "utf8");
fileString = JSON.parse(fileString);

fileString.name = "abdul rehman";
fileString.salary = 23000;
fs.writeFileSync(FILE_NAME, JSON.stringify(fileString));

console.log(`read`, fs.readFileSync(FILE_NAME, "utf8"));

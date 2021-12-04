const fs = require("fs");
const chalk = require("chalk");

const FILE_NAME = "notes.json";
addNote = (title, body) => {
  let notes = readNotes();

  const deblicate = notes.filter((value) => value.title === title);
  if (deblicate.length === 0) {
    notes.push({
      title,
      body,
    });
    writeNotes(notes);
    console.log(chalk.green.inverse(`Successfully Added`));
  } else {
    console.log(chalk.red.inverse(`dublicate title`));
  }
};

removeNote = (title) => {
  let notes = readNotes();

  const doesExist = notes.find((value) => value.title === title);
  if (doesExist) {
    notes = notes.filter((value) => value.title !== title);
    writeNotes(notes);
    console.log(chalk.green.inverse(`Successfully Remove`));
  } else {
    console.log(chalk.red.inverse(`title does not exist`));
  }
};

let notes = [];

const readNotes = () => {
  try {
    return JSON.parse(fs.readFileSync(FILE_NAME, "utf8"));
  } catch (error) {
    return [];
  }
};

const writeNotes = (jsonObject) => {
  try {
    return fs.writeFileSync(FILE_NAME, JSON.stringify(jsonObject));
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
};

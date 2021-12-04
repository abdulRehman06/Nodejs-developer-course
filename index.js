const yargs = require("yargs");

// console.log(`process.argv:::`, process.argv);
// console.log(`yargs:::`, yargs.argv);

yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "abdul rehman",
  handler: function (argv) {
    console.log(`hello adding`, argv);
  },
});

yargs.command({
  command: "subtract",
  describe: "subtracting the value",
  builder: {
    title: {
      describe: "subtractict ...",
      demandOption: true, // making this field required
      type: "string", // must be string
    },
    body: {
      describe: "subtractict ...",
      demandOption: true, // making this field required
      type: "string", // must be string
    },
  },
  handler: function (args) {
    console.log(`removing time ` + args.title);
  },
});

yargs.parse(); // print the value

// command to run
// nodemon index.js subtract --title="subtract by 2" --body="hello body"

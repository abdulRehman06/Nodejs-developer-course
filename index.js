const yargs = require("yargs");

// console.log(`process.argv:::`, process.argv);
// console.log(`yargs:::`, yargs.argv);

yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "abdul rehman",
  handler: function () {
    console.log(`hello adding`);
  },
});

yargs.parse();

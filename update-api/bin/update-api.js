#!/usr/bin/env node
var fs = require('fs'),
    path = require('path'),
    program = require('commander'),
    pkg = require(path.join(__dirname, '../', 'package.json')),
    JSON5 = require('json5')
    Newman = require('newman');

program
  .version(pkg.version)
  .usage('[options] <file ...>')
  .option('-p, --path <path>', 'Path to REST doc ')
  .parse(process.argv);

// fs.readFile(program.args[0], 'utf8', function(err, data){
//   if(err) throw err;
//   console.log(data)
// });

// define Newman options
newmanOptions = {
  //envJson: JSON5.parse(fs.readFileSync("envjson.json", "utf-8")), // environment file (in parsed json format)
  //dataFile: data.csv,                    // data file if required
  //iterationCount: 10,                    // define the number of times the runner should run
  outputFile: 'outfile.json',            // the file to export to
  //responseHandler: "TestResponseHandler", // the response handler to use
  asLibrary: true,                        // this makes sure the exit code is returned as an argument to the callback function
  stopOnError: true
};

var collectionJson = JSON5.parse(fs.readFileSync(program.args[0], 'utf8'));
// console.log(collectionJson)

var callback = function(){
  console.log('newman done callback fired')
}

// Optional Callback function which will be executed once Newman is done executing all its tasks.
Newman.execute(collectionJson, newmanOptions, callback);

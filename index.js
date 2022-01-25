const core = require('@actions/core');
const fs = require('fs');

// most @actions toolkit packages have async methods
async function run() {
  const jsonFile = core.getInput('file', { "required": true });
  let rawdata = fs.readFileSync(jsonFile);
  let data = JSON.parse(rawdata);
  core.setOutput('marco', "polo");
  core.setOutput('json', data);
}

run().catch(err => {
  console.error(err);
  core.setFailed("Unexpected error");
});

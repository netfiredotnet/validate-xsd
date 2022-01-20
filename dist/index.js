const core = require("@actions/core");
const xmllint = require("xmllint");
const fs = require("fs");
const performance = require('perf_hooks').performance;

try {
  const xml = core.getInput("xmlpath");
  const xsd = core.getInput("xsdpath");

  var startTime = performance.now();
  const val = new xmllint.validateXML({
    xml: fs.readFileSync(xml, "utf8"),
    schema: fs.readFileSync(xsd, "utf8"),
  });
  var endTime = performance.now();
  console.log(`Call to validateXML took ${endTime - startTime} milliseconds`);

  if (val.errors) {
    core.setFailed(`Errors were encountered during XML validation!\n${val.errors.join("\n")}`);
  }
} catch (error) {
  core.setFailed(error.message);
}

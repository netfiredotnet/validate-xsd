# XML validation via XSD Workflow Action

This action validates an XML file during a GitHub workflow action. It uses a webassembly (via emscripten) port of libxml to allow the code to run natively within the runner nodejs runtime, without requiring a docker pull.

## Inputs

| Variable or Argument | Location | Description                            | Required | Default |
|----------------------|----------|----------------------------------------|----------|---------|
| xmlpath              | with     | Path to XML file to validate           | yes      |         |
| xsdpath              | with     | Path to XSD file to use for validation | yes      |         |

## Outputs

No outputs will be generated, except for a failure event if validation fails.

## Example usage
```
uses: netfiredotnet/validate-xsd@v1
with:
  xmlpath: test.xml
  xsdpath: val.xsd
```
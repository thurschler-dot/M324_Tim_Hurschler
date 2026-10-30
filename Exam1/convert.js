import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

const inputFile = join(import.meta.dirname, "07_clean_code.md");
const outputFile = join(import.meta.dirname, "07_clean_code.html");

const markdown = readFileSync(inputFile, "utf-8");
const body = marked.parse(markdown);

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>07 - Clean Code</title>
  </head>
  <body>
${body}
  </body>
</html>
`;

writeFileSync(outputFile, html);
console.log("07_clean_code.html created");

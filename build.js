const fs = require("fs");
const files = fs.readdirSync(".").filter(f => f.endsWith(".html") && f !== "index.html");
const links = files.map(f => `<li><a href="${f}">${f}</a></li>`).join("\n");
fs.writeFileSync("index.html", `<ul>${links}</ul>`);

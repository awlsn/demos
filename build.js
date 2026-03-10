const fs = require("fs");

fs.mkdirSync("public", { recursive: true });

// Copy all html files into public/
const files = fs.readdirSync(".").filter(f => f.endsWith(".html"));
files.forEach(f => fs.copyFileSync(f, `public/${f}`));

// Generate index
const links = files.map(f => `<li><a href="${f}">${f}</a></li>`).join("\n");
fs.writeFileSync("public/index.html", `<ul>${links}</ul>`);

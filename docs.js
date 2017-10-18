const ghpages = require("gh-pages");
const rebase = require("rebase");
const fs = require("fs-extra");

let subdir = "stencil-qrcode-component";

fs.removeSync(subdir);
fs.mkdirSync(subdir);
fs.copySync("www", subdir);

let files = ["index.html"];
files.forEach(filename => {
  let path = subdir + "/" + filename;
  let file = fs.readFileSync(path, "utf8");
  let replacements = {
    "^/(?!/)": "/" + subdir + "/",
    "^(?!/|http|https)": "/" + subdir + "/"
  };
  let rebased = rebase(file, {
    url: replacements,
    a: replacements,
    img: replacements,
    link: replacements,
    script: replacements
  });
  fs.writeFileSync(path, rebased);
});

ghpages.publish(subdir, function(err) {
  if (err) {
    console.log(err);
  }
});

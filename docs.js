// from https://gist.github.com/mortenson/044f30bea778f4e98e4e14c661aa7d9a
const ghpages = require('gh-pages');
const rebase = require('rebase');
const fs = require('fs-extra');
const path = require('path');

// github page URL context = repository name
let subdir = 'stencil-qrcode-component';

fs.removeSync(subdir);
fs.mkdirSync(subdir);
fs.copySync('www', subdir);

let files = ['index.html'];
files.forEach(filename => {
  let filepath = path.join(__dirname,subdir,filename);
  let file = fs.readFileSync(filepath, 'utf8');
  let replacements = {
    '^/(?!/)': `/${subdir}/`,
    '^(?!/|http|https)': `/${subdir}/`
  };
  let rebased = rebase(file, {
    url: replacements,
    a: replacements,
    img: replacements,
    link: replacements,
  });
  fs.writeFileSync(filepath, rebased);
  console.log(`rebased all URLs, A, IMG, LINK, SCRIPT in ${filepath} to ${subdir}`);
});

let manifestPath = path.join(__dirname, subdir, 'manifest.json');
let manifest = fs.readFileSync(manifestPath, 'utf8');
// replace start_url in manifest.json
let rebasedManifest = manifest.replace(/"\/"/, `"/${subdir}/"`);
fs.writeFileSync(manifestPath, rebasedManifest);
console.log(`rebased start_url in ${manifestPath} to ${subdir}`);

ghpages.publish(subdir, function(err) {
  if (err) {
    console.log(err);
  }
});

const ghpages = require('gh-pages');

// github page URL context = repository name
const subdir = 'stencil-qrcode-component';
const outputWwwDir = 'stencil-qrcode-component';
const publishedDir = outputWwwDir + '/' + subdir;

ghpages.publish(publishedDir, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('GREAT SUCCESS! Open https://doppelganger9.github.io/stencil-qrcode-component/');
  }
});

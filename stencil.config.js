exports.config = {
  namespace: 'stqrcmp',
  generateDistribution: true,
  bundles: [
    { components: ['qr-code'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

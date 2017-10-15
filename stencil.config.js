exports.config = {
  namespace: 'qrcode',
  generateDistribution: true,
  bundles: [
    { components: ['qr-code'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

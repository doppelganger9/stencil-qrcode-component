import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stqrcmp',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      baseUrl: '/stencil-qrcode-component'
    }
  ],
  plugins: [
    sass()
  ]
};

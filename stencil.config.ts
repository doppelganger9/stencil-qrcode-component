import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// when you specify a base URL it messes up dev-server and jest E2E tests.
// I did not find how to clearly configure it so I made a dynamic configuration
// based on the npm lifecycle event (start, test, build, etc.).
const npmLifecycleEvent = process.env['npm_lifecycle_event'];
const ifTest = ( npmLifecycleEvent === 'start' || npmLifecycleEvent === 'test' || npmLifecycleEvent === 'test.watch');
const baseUrlExceptIfTesting = ifTest ? {} : {baseUrl: 'https://doppelganger9.github.io/stencil-qrcode-component'};
console.log(`${JSON.stringify(baseUrlExceptIfTesting)}`);

export const config: Config = {
  namespace: 'stqrcmp',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      ...baseUrlExceptIfTesting
    }
  ],
  plugins: [
    sass()
  ]
};

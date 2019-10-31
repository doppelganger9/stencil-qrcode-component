import { newE2EPage } from '@stencil/core/testing';

describe('qr-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<qr-code></qr-code>');
    const element = await page.find('qr-code');

    expect(element).toMatchSnapshot();
  });
});

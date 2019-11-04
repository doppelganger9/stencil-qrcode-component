import { newE2EPage, E2EElement } from '@stencil/core/testing';

describe('qr-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<qr-code></qr-code>');

    const element: E2EElement = await page.find('qr-code');
    expect(element).toMatchSnapshot();
  });

  it('renders as an image with an alt attribute', async () => {
    const page = await newE2EPage();

    await page.setContent('<qr-code></qr-code>');

    const imgChildInShadowDOMOfQRCodeElement: E2EElement = await page.find('qr-code >>> img');
    expect(imgChildInShadowDOMOfQRCodeElement).toBeTruthy();
    expect(imgChildInShadowDOMOfQRCodeElement.getAttribute('alt')).toEqual(`QR Code Image for Hello World`);
  });

  it('renders a text as a QR Code image', async () => {
    const page = await newE2EPage();

    await page.setContent('<qr-code contents="TEST"></qr-code>');

    const imgChildInShadowDOMOfQRCodeElement: E2EElement = await page.find('qr-code >>> img');
    expect(imgChildInShadowDOMOfQRCodeElement).toBeTruthy();
    expect(imgChildInShadowDOMOfQRCodeElement.getAttribute('alt')).toEqual(`QR Code Image for TEST`);
    expect(imgChildInShadowDOMOfQRCodeElement.getAttribute('src')).toMatchSnapshot();
  });

  it('renders a text as a DATA-URI', async () => {
    const page = await newE2EPage();

    await page.setContent('<qr-code contents="TEST" output-mode="DataURI" style="width: 100px;height: 100px;"></qr-code>');

    const imgChildInShadowDOMOfQRCodeElement: E2EElement = await page.find('qr-code >>> img');
    expect(imgChildInShadowDOMOfQRCodeElement).toBeTruthy();
    expect(imgChildInShadowDOMOfQRCodeElement.getAttribute('alt')).toEqual(`QR Code Image for TEST`);
    expect(imgChildInShadowDOMOfQRCodeElement.getAttribute('src')).toMatchSnapshot();
  });

  it('renders a text as an SVG', async () => {
    const page = await newE2EPage();

    await page.setContent('<qr-code contents="TEST" output-mode="SVG" style="width: 100px;height: 100px;"></qr-code>');

    const svgChildInShadowDOMOfQRCodeElement: E2EElement = await page.find('qr-code >>> svg');
    expect(svgChildInShadowDOMOfQRCodeElement).toBeTruthy();
    expect(svgChildInShadowDOMOfQRCodeElement).toMatchSnapshot();
  });

  it('renders a text as a TABLE', async () => {
    const page = await newE2EPage();

    await page.setContent('<qr-code contents="TEST" output-mode="Table" style="width: 100px;height: 100px;"></qr-code>');

    const svgChildInShadowDOMOfQRCodeElement: E2EElement = await page.find('qr-code >>> table');
    expect(svgChildInShadowDOMOfQRCodeElement).toMatchSnapshot();
  });
});

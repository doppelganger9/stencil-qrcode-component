import {
  Component,
  Prop,
  State,
  Watch,
  h
} from '@stencil/core';

// NOTE: qrcode is a node NPM JavaScript library.
// It has a browserified version for front-end usage
import qrcode from "qrcode-generator";
import { ErrorCorrectionLevel, OutputMode } from './enums';

function appendAttribute(attributeName: string, attributeValue: string, nodeAsString: string): string {
  const mutatedNodeAsString = nodeAsString.replace('>', ` ${attributeName}="${attributeValue.replace('"','\'')}" >`);
  return mutatedNodeAsString;
}

@Component({
  tag: 'qr-code',
  styleUrl: 'qr-code.scss',
  shadow: true,
})
export class QRCodeWebComponent {
  @Prop() contents: string = 'Hello World';
  @Prop() errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.High;
  @Prop() margin: number = 4;
  @Prop() scale: number = 4;
  @Prop() colorDark: string = '#000000ff';
  @Prop() colorLight: string = '#ffffffff';
  //@Prop() qrVersion: number;
  @Prop() outputMode: OutputMode = OutputMode.DataURI;

  @State() data: string;

  componentWillLoad() {
    this.computeAndSetData(this.contents, this.outputMode);
  }

  computeAndSetData(text: string, outputMode: OutputMode) {
    const qr: QRCode = qrcode(0, this.errorCorrectionLevel);
    qr.addData(text);
    qr.make();

    if (outputMode === 'DataURI') {
      this.data = qr.createImgTag();
      this.data = appendAttribute('alt', 'QR Code Image for ' + text, this.data);
    } else if (outputMode === 'SVG') {
      this.data = qr.createSvgTag();
    } else if (outputMode === 'Table') {
      this.data = qr.createTableTag();
    } else {
      this.data = null;
    }
  }

  @Watch('outputMode')
  changeOutputModeHandler(newValue: OutputMode) {
    this.computeAndSetData(this.contents, newValue);
  }

  @Watch('contents')
  changeContentsHandler(newValue: string) {
    console.log('contents changed', newValue);
    this.computeAndSetData(newValue, this.outputMode);
  }
  @Watch('errorCorrectionLevel')
  changeErrorCorrectionLevelHandler() {
    this.computeAndSetData(this.contents, this.outputMode);
  }

  render() {
    // see https://github.com/ionic-team/stencil/issues/148
    return <div innerHTML={this.data} />;
  }
}

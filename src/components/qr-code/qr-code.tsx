import {
  Component,
  Prop,
  State,
  Watch
} from '@stencil/core';

// NOTE: qrcode is a node NPM JavaScript library.
// It has a browserified version for front-end usage
import qrcode from "qrcode-generator";

// exported enums are not copied in components.d.ts by stencil build :-( since 0.0.8 (worked in 0.0.6)

// export enum OutputMode {
//   DataURI = "DataURI",
//   SVG = "SVG",
//   Table = "Table"
// }

// export enum ErrorCorrectionLevel {
//   Low = "L",
//   Medium = "M",
//   Quality = "Q",
//   High = "H"
// }

@Component({
  tag: 'qr-code',
  styleUrl: 'qr-code.scss',
  shadow: true,
})
export class QRCodeWebComponent {
  @Prop() contents: string = 'Hello World';
  @Prop() errorCorrectionLevel: string /*ErrorCorrectionLevel*/ = 'H'; //ErrorCorrectionLevel.High;
  @Prop() margin: number = 4;
  @Prop() scale: number = 4;
  @Prop() colorDark: string = '#000000ff';
  @Prop() colorLight: string = '#ffffffff';
  //@Prop() qrVersion: number;
  @Prop() outputMode: string /* OutputMode */ = 'DataURI'; //OutputMode.DataURI;

  @State() data: string;

  componentWillLoad() {
    this.computeAndSetData(this.contents, this.outputMode);
  }

  computeAndSetData(text: string, outputMode: string /*OutputMode*/) {
    const qr: QRCode = qrcode(0, this.errorCorrectionLevel);
    qr.addData(text);
    qr.make();

    if (outputMode === 'DataURI') {
      this.data = qr.createImgTag();
    } else if (outputMode === 'SVG') {
      this.data = qr.createSvgTag();
    } else if (outputMode === 'Table') {
      this.data = qr.createTableTag();
    } else {
      this.data = null;
    }
  }

  @Watch('outputMode')
  changeOutputModeHandler(newValue: string /* OutputMode*/) {
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

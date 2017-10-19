import { Component, Prop, State, PropDidChange } from "@stencil/core";

// NOTE: qrcode is a node NPM JavaScript library.
// It has a browserified version for front-end usage
// TODO: find a way to link the dependency from the component itself, not index.html
import * as qrcode from "qrcode-generator";

enum OutputMode {
  DataURI = "DataURI",
  SVG = "SVG",
  Table = "Table"
}

enum ErrorCorrectionLevel {
  Low = "L",
  Medium = "M",
  Quality = "Q",
  High = "H"
}

@Component({
  tag: "qr-code",
  styleUrl: "qr-code.scss"
})
export class QRCodeWebComponent {
  @Prop() contents: string = "Hello World";
  @Prop()
  errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.High;
  @Prop() margin: number = 4;
  @Prop() scale: number = 4;
  @Prop() colorDark: string = "#000000ff";
  @Prop() colorLight: string = "#ffffffff";
  //@Prop() qrVersion: number;
  @Prop() outputMode: OutputMode = OutputMode.DataURI;

  @State() data: string;

  componentWillLoad() {
    this.computeAndSetData(this.contents, this.outputMode);
  }

  computeAndSetData(text: string, outputMode: OutputMode) {
    const qr : QRCode = qrcode(0, this.errorCorrectionLevel);
    qr.addData(text);
    qr.make();

    if (outputMode === "DataURI") {
      this.data = qr.createImgTag();
    } else if (outputMode === "SVG") {
      this.data = qr.createSvgTag();
    } else if (outputMode === "Table") {
      this.data = qr.createTableTag();
    } else {
      this.data = null;
    }
  }

  @PropDidChange("outputMode")
  changeOutputModeHandler(newValue: OutputMode) {
    this.computeAndSetData(this.contents, newValue);
  }
  @PropDidChange("contents")
  changeContentsHandler(newValue: string) {
    this.computeAndSetData(newValue, this.outputMode);
  }
  @PropDidChange("errorCorrectionLevel")
  changeErrorCorrectionLevelHandler() {
    this.computeAndSetData(this.contents, this.outputMode);
  }

  render() {
      // see https://github.com/ionic-team/stencil/issues/148
    return (
      <div innerHTML={this.data} />
    );
  }
}

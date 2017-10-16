import { Component, Prop, State, PropDidChange } from "@stencil/core";

// NOTE: qrcode is a node NPM JavaScript library.
// It has a browserified version for front-end usage
// TODO: find a way to link the dependency from the component itself, not index.html
import * as qrcodelib from "qrcode";

enum OutputMode {
  DataURI = "DataURI",
  SVG = "SVG"
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
    const options = {
      errorCorrectionLevel: this.errorCorrectionLevel,
      scale: this.scale,
      margin: this.margin,
      color: {
        dark: this.colorDark,
        light: this.colorLight
      }
    };
    const callback = (err, qrcodeImageContent) => {
      if (err) throw err;
      this.data = qrcodeImageContent;
    };

    if (outputMode === "DataURI") {
      qrcodelib.toDataURL(text, options, callback);
    } else if (outputMode === "SVG") {
      qrcodelib.toString(text, options, callback);
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
  @PropDidChange("colorLight")
  changeColorLightHandler() {
    this.computeAndSetData(this.contents, this.outputMode);
  }
  @PropDidChange("colorDark")
  changeColorDarkHandler() {
    this.computeAndSetData(this.contents, this.outputMode);
  }
  @PropDidChange("margin")
  changeMarginHandler() {
    this.computeAndSetData(this.contents, this.outputMode);
  }
  @PropDidChange("errorCorrectionLevel")
  changeErrorCorrectionLevelHandler() {
    this.computeAndSetData(this.contents, this.outputMode);
  }
  @PropDidChange("scale")
  changeScaleHandler() {
    this.computeAndSetData(this.contents, this.outputMode);
  }

  render() {
    if (this.outputMode === "DataURI") {
      return <img src={this.data} />;
    } else if (this.outputMode === "SVG") {
      // see https://github.com/ionic-team/stencil/issues/148
      return <div innerHTML={this.data} />;
    }
    return <p>???</p>;
  }
}

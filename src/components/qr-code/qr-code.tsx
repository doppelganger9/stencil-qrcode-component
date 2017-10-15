import {
  Component,
  Prop,
  State,
  PropDidChange,
} from "@stencil/core";

import * as qrcodelib from "qrcode";

@Component({
  tag: "qr-code",
  styleUrl: "qr-code.scss"
})
export class QRCodeWebComponent {
  @Prop() contents: string;
  @State() dataURI: string;

  componentWillLoad() {
    console.log("QRCodeWebComponent is about to be rendered");
    this.computeDataURI(this.contents);
  }

  computeDataURI(text: string) {
    console.log("==> entering computeDataURI");
    qrcodelib.toDataURL(text, (err, url) => {
      console.log("inside computeDataURI qrcode.toDataURL.callback");
      if (err) throw err;

      this.dataURI = url;

      console.log(`received new data URI value from QRCode lib callback, which should
        trigger re-render as it changes the component state`, url);
    });
    console.log("<== exiting computeDataURI");
  }

  @PropDidChange("contents")
  changeHandler(newValue: string) {
    console.log("==> entering changeHandler");
    this.computeDataURI(newValue);
    console.log("<== exiting changeHandler");
  }

  render() {
    console.log("==> entering render");

    return (
      <img src={this.dataURI} />
    );
  }
}

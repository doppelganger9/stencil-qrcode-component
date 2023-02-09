import { OutputMode } from "../../components/qr-code/enums";

export default {
  // this creates a ‘Components’ folder and a ‘QR-Code subfolder
  title: 'Components/QR-Code',
  argTypes: {
    contents: { control: 'text' },
    outputMode: {
      options: [ OutputMode.DataURI, OutputMode.SVG, OutputMode.Table ],
      type: 'radio'
    },
    style: { control: 'text' }
  },
};

interface QrCodeProps {
  contents: string;
  outputMode: OutputMode;
  style: string;
}

const DefaultArgs = {
  contents: 'Hello World',
  outputMode: OutputMode.DataURI,
  style: 'width: 100px;height: 100px;'
};

const Template = (args: QrCodeProps) => `<qr-code
  contents="${args.contents}"
  output-mode="${args.outputMode}"
  style="${args.style}">
  </qr-code>
`;

export const WithDataURI = Template.bind({});
WithDataURI.args = {
  ...DefaultArgs,
  outputMode: OutputMode.DataURI,
};

export const WithSVG = Template.bind({});
WithSVG.args = {
  ...DefaultArgs,
  outputMode: OutputMode.SVG,
};

export const WithTable = Template.bind({});
WithTable.args = {
  ...DefaultArgs,
  outputMode: OutputMode.Table,
};

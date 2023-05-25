
import { useTheme } from 'styled-components';
import ColorRow from '../ColorRow/ColorRow';
import StyleTable, { StyleGroupBody, StyleGroupHeader } from '../StyleTable/StyleTable';
import usePaletteBoard from '../../../hooks/usePaletteBoard';

const PalettePreview = () => {
  const { mode, brand: brandOption } = useTheme();
  const {
    brand,
    aquamarine,
    blue,
    green,
    grey,
    magenta,
    neutral,
    ochre,
    orange,
    purple,
    red,
    teal,
    violet,
  } = usePaletteBoard(mode, brandOption);

  return (
    <StyleTable>
      <StyleGroupHeader
        title="Brand"
        description="The account's brand palette / Toggle with the paintbrush above"
      />
      <StyleGroupBody>
        <ColorRow hex={brand["00"]} text="brand-00" />
        <ColorRow hex={brand["05"]} text="brand-05" />
        <ColorRow hex={brand[10]} text="brand-10" />
        <ColorRow hex={brand[15]} text="brand-15" />
        <ColorRow hex={brand[20]} text="brand-20" />
        <ColorRow hex={brand[30]} text="brand-30" />
        <ColorRow hex={brand[40]} text="brand-40" />
        <ColorRow hex={brand[50]} text="brand-50" />
        <ColorRow hex={brand[60]} text="brand-60" />
        <ColorRow hex={brand[70]} text="brand-70" />
        <ColorRow hex={brand[80]} text="brand-80" />
        <ColorRow hex={brand[90]} text="brand-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Violet" description="Trainual brand palette" />
      <StyleGroupBody>
        <ColorRow hex={violet["00"]} text="violet-00" />
        <ColorRow hex={violet["05"]} text="violet-05" />
        <ColorRow hex={violet[10]} text="violet-10" />
        <ColorRow hex={violet[15]} text="violet-15" />
        <ColorRow hex={violet[20]} text="violet-20" />
        <ColorRow hex={violet[30]} text="violet-30" />
        <ColorRow hex={violet[40]} text="violet-40" />
        <ColorRow hex={violet[50]} text="violet-50" />
        <ColorRow hex={violet[60]} text="violet-60" />
        <ColorRow hex={violet[70]} text="violet-70" />
        <ColorRow hex={violet[80]} text="violet-80" />
        <ColorRow hex={violet[90]} text="violet-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Neutral" />
      <StyleGroupBody>
        <ColorRow hex={neutral["00"]} text="neutral-00" />
        <ColorRow hex={neutral["05"]} text="neutral-05" />
        <ColorRow hex={neutral[10]} text="neutral-10" />
        <ColorRow hex={neutral[15]} text="neutral-15" />
        <ColorRow hex={neutral[20]} text="neutral-20" />
        <ColorRow hex={neutral[25]} text="neutral-25" />
        <ColorRow hex={neutral[30]} text="neutral-30" />
        <ColorRow hex={neutral[40]} text="neutral-40" />
        <ColorRow hex={neutral[50]} text="neutral-50" />
        <ColorRow hex={neutral[60]} text="neutral-60" />
        <ColorRow hex={neutral[70]} text="neutral-70" />
        <ColorRow hex={neutral[80]} text="neutral-80" />
        <ColorRow hex={neutral[90]} text="neutral-90" />
        <ColorRow hex={neutral.transparent1} text="neutral-transparent-1" />
        <ColorRow hex={neutral.transparent2} text="neutral-transparent-2" />
        <ColorRow hex={neutral.transparent3} text="neutral-transparent-3" />
      </StyleGroupBody>

      <StyleGroupHeader title="Aquamarine" />
      <StyleGroupBody>
        <ColorRow hex={aquamarine["00"]} text="aquamarine-00" />
        <ColorRow hex={aquamarine["05"]} text="aquamarine-05" />
        <ColorRow hex={aquamarine[10]} text="aquamarine-10" />
        <ColorRow hex={aquamarine[15]} text="aquamarine-15" />
        <ColorRow hex={aquamarine[20]} text="aquamarine-20" />
        <ColorRow hex={aquamarine[30]} text="aquamarine-30" />
        <ColorRow hex={aquamarine[40]} text="aquamarine-40" />
        <ColorRow hex={aquamarine[50]} text="aquamarine-50" />
        <ColorRow hex={aquamarine[60]} text="aquamarine-60" />
        <ColorRow hex={aquamarine[70]} text="aquamarine-70" />
        <ColorRow hex={aquamarine[80]} text="aquamarine-80" />
        <ColorRow hex={aquamarine[90]} text="aquamarine-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Blue" />
      <StyleGroupBody>
        <ColorRow hex={blue["00"]} text="blue-00" />
        <ColorRow hex={blue["05"]} text="blue-05" />
        <ColorRow hex={blue[10]} text="blue-10" />
        <ColorRow hex={blue[15]} text="blue-15" />
        <ColorRow hex={blue[20]} text="blue-20" />
        <ColorRow hex={blue[30]} text="blue-30" />
        <ColorRow hex={blue[40]} text="blue-40" />
        <ColorRow hex={blue[50]} text="blue-50" />
        <ColorRow hex={blue[60]} text="blue-60" />
        <ColorRow hex={blue[70]} text="blue-70" />
        <ColorRow hex={blue[80]} text="blue-80" />
        <ColorRow hex={blue[90]} text="blue-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Green" />
      <StyleGroupBody>
        <ColorRow hex={green["00"]} text="green-00" />
        <ColorRow hex={green["05"]} text="green-05" />
        <ColorRow hex={green[10]} text="green-10" />
        <ColorRow hex={green[15]} text="green-15" />
        <ColorRow hex={green[20]} text="green-20" />
        <ColorRow hex={green[30]} text="green-30" />
        <ColorRow hex={green[40]} text="green-40" />
        <ColorRow hex={green[50]} text="green-50" />
        <ColorRow hex={green[60]} text="green-60" />
        <ColorRow hex={green[70]} text="green-70" />
        <ColorRow hex={green[80]} text="green-80" />
        <ColorRow hex={green[90]} text="green-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Grey" />
      <StyleGroupBody>
        <ColorRow hex={grey["00"]} text="grey-00" />
        <ColorRow hex={grey["05"]} text="grey-05" />
        <ColorRow hex={grey[10]} text="grey-10" />
        <ColorRow hex={grey[15]} text="grey-15" />
        <ColorRow hex={grey[20]} text="grey-20" />
        <ColorRow hex={grey[30]} text="grey-30" />
        <ColorRow hex={grey[40]} text="grey-40" />
        <ColorRow hex={grey[50]} text="grey-50" />
        <ColorRow hex={grey[60]} text="grey-60" />
        <ColorRow hex={grey[70]} text="grey-70" />
        <ColorRow hex={grey[80]} text="grey-80" />
        <ColorRow hex={grey[90]} text="grey-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Magenta" />
      <StyleGroupBody>
        <ColorRow hex={magenta["00"]} text="magenta-00" />
        <ColorRow hex={magenta["05"]} text="magenta-05" />
        <ColorRow hex={magenta[10]} text="magenta-10" />
        <ColorRow hex={magenta[15]} text="magenta-15" />
        <ColorRow hex={magenta[20]} text="magenta-20" />
        <ColorRow hex={magenta[30]} text="magenta-30" />
        <ColorRow hex={magenta[40]} text="magenta-40" />
        <ColorRow hex={magenta[50]} text="magenta-50" />
        <ColorRow hex={magenta[60]} text="magenta-60" />
        <ColorRow hex={magenta[70]} text="magenta-70" />
        <ColorRow hex={magenta[80]} text="magenta-80" />
        <ColorRow hex={magenta[90]} text="magenta-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Ochre" />
      <StyleGroupBody>
        <ColorRow hex={ochre["00"]} text="ochre-00" />
        <ColorRow hex={ochre["05"]} text="ochre-05" />
        <ColorRow hex={ochre[10]} text="ochre-10" />
        <ColorRow hex={ochre[15]} text="ochre-15" />
        <ColorRow hex={ochre[20]} text="ochre-20" />
        <ColorRow hex={ochre[30]} text="ochre-30" />
        <ColorRow hex={ochre[40]} text="ochre-40" />
        <ColorRow hex={ochre[50]} text="ochre-50" />
        <ColorRow hex={ochre[60]} text="ochre-60" />
        <ColorRow hex={ochre[70]} text="ochre-70" />
        <ColorRow hex={ochre[80]} text="ochre-80" />
        <ColorRow hex={ochre[90]} text="ochre-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Orange" />
      <StyleGroupBody>
        <ColorRow hex={orange["00"]} text="orange-00" />
        <ColorRow hex={orange["05"]} text="orange-05" />
        <ColorRow hex={orange[10]} text="orange-10" />
        <ColorRow hex={orange[15]} text="orange-15" />
        <ColorRow hex={orange[20]} text="orange-20" />
        <ColorRow hex={orange[30]} text="orange-30" />
        <ColorRow hex={orange[40]} text="orange-40" />
        <ColorRow hex={orange[50]} text="orange-50" />
        <ColorRow hex={orange[60]} text="orange-60" />
        <ColorRow hex={orange[70]} text="orange-70" />
        <ColorRow hex={orange[80]} text="orange-80" />
        <ColorRow hex={orange[90]} text="orange-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Purple" />
      <StyleGroupBody>
        <ColorRow hex={purple["00"]} text="purple-00" />
        <ColorRow hex={purple["05"]} text="purple-05" />
        <ColorRow hex={purple[10]} text="purple-10" />
        <ColorRow hex={purple[15]} text="purple-15" />
        <ColorRow hex={purple[20]} text="purple-20" />
        <ColorRow hex={purple[30]} text="purple-30" />
        <ColorRow hex={purple[40]} text="purple-40" />
        <ColorRow hex={purple[50]} text="purple-50" />
        <ColorRow hex={purple[60]} text="purple-60" />
        <ColorRow hex={purple[70]} text="purple-70" />
        <ColorRow hex={purple[80]} text="purple-80" />
        <ColorRow hex={purple[90]} text="purple-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Red" />
      <StyleGroupBody>
        <ColorRow hex={red["00"]} text="red-00" />
        <ColorRow hex={red["05"]} text="red-05" />
        <ColorRow hex={red[10]} text="red-10" />
        <ColorRow hex={red[15]} text="red-15" />
        <ColorRow hex={red[20]} text="red-20" />
        <ColorRow hex={red[30]} text="red-30" />
        <ColorRow hex={red[40]} text="red-40" />
        <ColorRow hex={red[50]} text="red-50" />
        <ColorRow hex={red[60]} text="red-60" />
        <ColorRow hex={red[70]} text="red-70" />
        <ColorRow hex={red[80]} text="red-80" />
        <ColorRow hex={red[90]} text="red-90" />
      </StyleGroupBody>

      <StyleGroupHeader title="Teal" />
      <StyleGroupBody>
        <ColorRow hex={teal["00"]} text="teal-00" />
        <ColorRow hex={teal["05"]} text="teal-05" />
        <ColorRow hex={teal[10]} text="teal-10" />
        <ColorRow hex={teal[15]} text="teal-15" />
        <ColorRow hex={teal[20]} text="teal-20" />
        <ColorRow hex={teal[30]} text="teal-30" />
        <ColorRow hex={teal[40]} text="teal-40" />
        <ColorRow hex={teal[50]} text="teal-50" />
        <ColorRow hex={teal[60]} text="teal-60" />
        <ColorRow hex={teal[70]} text="teal-70" />
        <ColorRow hex={teal[80]} text="teal-80" />
        <ColorRow hex={teal[90]} text="teal-90" />
      </StyleGroupBody>
    </StyleTable>
  );
};

export default PalettePreview;

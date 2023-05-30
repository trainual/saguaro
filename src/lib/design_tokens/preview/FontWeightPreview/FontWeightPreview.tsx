
import { useTheme } from 'styled-components';
import StyleTable, { StyleGroupBody, StyleGroupHeader } from '../shared/StyleTable/StyleTable';
import FontWeightRow from './_FontWeightRow';

const FontWeightPreview = () => {
  const {
    constants: {
      fontExtralight,
      fontLight,
      fontRegular,
      fontMedium,
      fontSemibold,
      fontBold,
      fontExtrabold,
      fontHeavy 
    },
  } = useTheme();

  return (
    <StyleTable>
      <StyleGroupHeader title='Font Weights' />
      <StyleGroupBody>
        <FontWeightRow text='font-extralight' weight={fontExtralight} />
        <FontWeightRow text='font-light' weight={fontLight} />
        <FontWeightRow text='font-regular' weight={fontRegular} />
        <FontWeightRow text='font-medium' weight={fontMedium} />
        <FontWeightRow text='font-semibold' weight={fontSemibold} />
        <FontWeightRow text='font-bold' weight={fontBold} />
        <FontWeightRow text='font-extrabold' weight={fontExtrabold} />
        <FontWeightRow text='font-heavy' weight={fontHeavy} />
      </StyleGroupBody>

    </StyleTable>
  );
};

export default FontWeightPreview;

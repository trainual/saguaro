
import { useTheme } from 'styled-components';
import StyleTable, { StyleGroupBody, StyleGroupHeader } from '../shared/StyleTable/StyleTable';
import SpacingRow from './_SpacingRow';

const SpacingPreview = () => {
  const {
    constants: {
      spacerSm1,
      spacerSm2,
      spacerSm3,
      spacerMd2,
      spacerMd3,
      spacerLg1,
      spacerLg2,
      spacerLg3,
    },
  } = useTheme();

  return (
    <StyleTable>
      <StyleGroupHeader title='Spacing' />
      <StyleGroupBody>
        <SpacingRow text='spacer-sm-1' spacing={spacerSm1} />
        <SpacingRow text='spacer-sm-2' spacing={spacerSm2} />
        <SpacingRow text='spacer-sm-3' spacing={spacerSm3} />
        <SpacingRow text='spacer-md-2' spacing={spacerMd2} />
        <SpacingRow text='spacer-md-3' spacing={spacerMd3} />
        <SpacingRow text='spacer-lg-1' spacing={spacerLg1} />
        <SpacingRow text='spacer-lg-2' spacing={spacerLg2} />
        <SpacingRow text='spacer-lg-3' spacing={spacerLg3} />
      </StyleGroupBody>

    </StyleTable>
  );
};

export default SpacingPreview;

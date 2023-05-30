
import { useTheme } from 'styled-components';
import StyleTable, { StyleGroupBody, StyleGroupHeader } from '../shared/StyleTable/StyleTable';
import SpacingRow from './_SpacingRow';

const SpacingPreview = () => {
  const {
    constants: {
      spacer2xs,
      spacerXs,
      spacerSm,
      spacerMd,
      spacerLg,
      spacerXl,
      spacer2xl,
      spacer3xl,
    },
  } = useTheme();

  return (
    <StyleTable>
      <StyleGroupHeader title='Spacing' />
      <StyleGroupBody>
        <SpacingRow text='spacer-2xs' spacing={spacer2xs} />
        <SpacingRow text='spacer-xs' spacing={spacerXs} />
        <SpacingRow text='spacer-sm' spacing={spacerSm} />
        <SpacingRow text='spacer-md' spacing={spacerMd} />
        <SpacingRow text='spacer-lg' spacing={spacerLg} />
        <SpacingRow text='spacer-xl' spacing={spacerXl} />
        <SpacingRow text='spacer-2xl' spacing={spacer2xl} />
        <SpacingRow text='spacer-3xl' spacing={spacer3xl} />
      </StyleGroupBody>

    </StyleTable>
  );
};

export default SpacingPreview;

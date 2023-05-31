import styled, { useTheme } from 'styled-components';

import BorderRow from './_BorderRow';
import StyleTable, { StyleGroupBody, StyleGroupHeader } from '../shared/StyleTable/StyleTable';

const SpacedTable = styled(StyleTable)`
  border-spacing: 20px;
  border-collapse: separate;
`;

const BorderHeaderCell = styled.th`
  color: ${({ theme: { vars } }) => vars.textDefault};
  font-size: 0.9rem;
  font-weight: normal;
`;

const BorderHeader = () => {
  const { 
    constants: {
      borderWidthXs,
      borderWidthSm,
      borderWidthMd,
      borderWidthLg,
      borderWidthXl,
      borderWidth2xl,
    }
  } = useTheme();
  return (
    <thead>
      <tr>
        <th />
        <th />
        <BorderHeaderCell>border-width-xs</BorderHeaderCell>
        <BorderHeaderCell>border-width-sm</BorderHeaderCell>
        <BorderHeaderCell>border-width-md</BorderHeaderCell>
        <BorderHeaderCell>border-width-lg</BorderHeaderCell>
        <BorderHeaderCell>border-width-xl</BorderHeaderCell>
        <BorderHeaderCell>border-width-2xl</BorderHeaderCell>
      </tr>
      <tr>
        <th />
        <th />
        <BorderHeaderCell>{borderWidthXs}</BorderHeaderCell>
        <BorderHeaderCell>{borderWidthSm}</BorderHeaderCell>
        <BorderHeaderCell>{borderWidthMd}</BorderHeaderCell>
        <BorderHeaderCell>{borderWidthLg}</BorderHeaderCell>
        <BorderHeaderCell>{borderWidthXl}</BorderHeaderCell>
        <BorderHeaderCell>{borderWidth2xl}</BorderHeaderCell>
      </tr>
    </thead>
  );
};

const BorderPreview = () => {
  const {
    constants: {
      borderRadiusXs,
      borderRadiusSm,
      borderRadiusMd,
      borderRadiusLg,
      borderRadiusXl,
      borderRadiusCircle,
      borderRadiusEndcap,
    },
  } = useTheme();


  return (
    <SpacedTable>
      <StyleGroupHeader title='Borders' />
      <BorderHeader />
      <StyleGroupBody>
        <BorderRow text='border-radius-xs' radius={borderRadiusXs} />
        <BorderRow text='border-radius-sm' radius={borderRadiusSm} />
        <BorderRow text='border-radius-md' radius={borderRadiusMd} />
        <BorderRow text='border-radius-lg' radius={borderRadiusLg} />
        <BorderRow text='border-radius-xl' radius={borderRadiusXl} />
        <BorderRow text='border-radius-endcap' radius={borderRadiusEndcap} />
        <BorderRow text='border-radius-circle' radius={borderRadiusCircle} />
      </StyleGroupBody>
    </SpacedTable>
  );
};

export default BorderPreview;

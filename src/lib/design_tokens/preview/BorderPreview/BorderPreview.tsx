import styled from 'styled-components';

import BorderRow from '../BorderRow/BorderRow';
import StyleTable, { StyleGroupBody, StyleGroupHeader } from '../StyleTable/StyleTable';
import useTokenTheme from '../../../hooks/useTokenTheme';

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
  return (
    <thead>
      <tr>
        <th />
        <BorderHeaderCell>border-width-xs</BorderHeaderCell>
        <BorderHeaderCell>border-width-sm</BorderHeaderCell>
        <BorderHeaderCell>border-width-md</BorderHeaderCell>
        <BorderHeaderCell>border-width-lg</BorderHeaderCell>
        <BorderHeaderCell>border-width-xl</BorderHeaderCell>
        <BorderHeaderCell>border-width-2xl</BorderHeaderCell>
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
  } = useTokenTheme();


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
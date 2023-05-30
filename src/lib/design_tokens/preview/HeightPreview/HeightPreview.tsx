import styled from 'styled-components';

import HeightRow from './_HeightRow';
import StyleTable, { StyleGroupBody, StyleGroupHeader } from '../shared/StyleTable/StyleTable';

const SpacedTable = styled(StyleTable)`
  border-spacing: 20px;
  border-collapse: separate;
`;

const HeightHeaderCell = styled.th`
  color: ${({ theme: { vars } }) => vars.textDefault};
  font-size: 0.9rem;
  font-weight: normal;
`;

const HeightHeader = () => {
  return (
    <thead>
      <tr>
        <HeightHeaderCell>height-2xs</HeightHeaderCell>
        <HeightHeaderCell>height-xs</HeightHeaderCell>
        <HeightHeaderCell>height-sm</HeightHeaderCell>
        <HeightHeaderCell>height-md</HeightHeaderCell>
        <HeightHeaderCell>height-lg</HeightHeaderCell>
      </tr>
    </thead>
  );
};

const HeightPreview = () => {
  return (
    <SpacedTable>
      <StyleGroupHeader title='Heights' />
      <HeightHeader />
      <StyleGroupBody>
        <HeightRow />
      </StyleGroupBody>
    </SpacedTable>
  );
};

export default HeightPreview;

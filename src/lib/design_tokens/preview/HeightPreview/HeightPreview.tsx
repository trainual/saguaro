import styled, { useTheme } from 'styled-components';

import StyleTable, { StyleGroupBody, StyleGroupHeader } from '../shared/StyleTable/StyleTable';
import HeightCell from './_HeightCell';

const SpacedTable = styled(StyleTable)`
  border-spacing: 20px;
  border-collapse: separate;
`;

const HeightPreview = () => {
  const {
    constants: {
      height2xs,
      heightXs,
      heightSm,
      heightMd,
      heightLg
    }
  } = useTheme();

  return (
    <SpacedTable>
      <StyleGroupHeader title='Heights' />
      <StyleGroupBody>
        <tr>
          <HeightCell text='height-2xs' height={height2xs} />
          <HeightCell text='height-xs' height={heightXs} />
          <HeightCell text='height-sm' height={heightSm} />
          <HeightCell text='height-md' height={heightMd} />
          <HeightCell text='height-lg' height={heightLg} />
        </tr>
      </StyleGroupBody>
    </SpacedTable>
  );
};

export default HeightPreview;

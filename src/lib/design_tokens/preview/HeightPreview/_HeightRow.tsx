import styled, { useTheme } from 'styled-components';

const HeightTop = styled.div`
  border-bottom: 1px solid;
  text-align: center;
`;

const HeightBottom = styled.div`
  border-top: 1px solid;
  text-align: center;
`;

const HeightMiddle = styled.div<{ height: string }>`
	display: inline-block;
  padding: 0;
  height: ${({ height }) => height};
`;

const HeightCell = ({ height }: { height: string }) => {
  return (
    <td>
      <HeightTop>{'v'}</HeightTop>
      <HeightMiddle height={height} />
      <HeightBottom>{'^'}</HeightBottom>
    </td>
  );
}

const HeightRow = () => {
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
    <tr>
      <HeightCell height={height2xs} />
      <HeightCell height={heightXs} />
      <HeightCell height={heightSm} />
      <HeightCell height={heightMd} />
      <HeightCell height={heightLg} />
    </tr>
  );
};

export default HeightRow;

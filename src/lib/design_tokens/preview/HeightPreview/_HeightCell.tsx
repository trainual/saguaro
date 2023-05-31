import styled from 'styled-components';

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
  height: ${({ height }) => height};
`;

const HeightText = styled.div`
  color: ${({ theme: { vars } }) => vars.textDefault};
  margin-bottom: 1rem;
`

const SubduedText = styled.div`
  color: ${({ theme: { vars } }) => vars.textSubdued};
  font-size: 0.8;
  margin-bottom: 3rem;
`

const TopAlignedCell = styled.td`
  vertical-align: top;
`;

const HeightCell = ({ height, text }: { height: string, text: string }) => {
  return (
    <TopAlignedCell>
      <HeightText>{text}</HeightText>
      <SubduedText>{height}</SubduedText>
      <HeightTop>{'v'}</HeightTop>
      <HeightMiddle height={height} />
      <HeightBottom>{'^'}</HeightBottom>
    </TopAlignedCell>
  );
}

export default HeightCell;

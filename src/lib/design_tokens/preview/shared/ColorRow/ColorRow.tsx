import styled from 'styled-components';

const ColorText = styled.td<{ color: string }>`
  color: ${({ color }) => color};
  text-transform: lowercase;
`;

const ColorBar = styled.td<{ color: string }>`
  background-color: ${({ color }) => color};
  height: 100%;
  width: 80%;
`;

const ColorRow = ({ hex, text }: { hex: string; text: string }) => {
  return (
    <tr>
      <ColorText color={hex}>{text}</ColorText>
      <ColorBar color={hex} />
      {/* <ColorText color={hex}>{hex}</ColorText> */}
    </tr>
  );
};

export default ColorRow;

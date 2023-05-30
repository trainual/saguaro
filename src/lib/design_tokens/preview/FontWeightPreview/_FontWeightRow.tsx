import styled from 'styled-components';

const WeightedCell = styled.td<{ weight: string }>`
  font-weight: ${({ weight }) => weight};
`;

type Props = {
  text: string;
  weight: string;
};

const FontWeightRow = ({ text, weight }: Props) => {

  return (
    <tr>
      <WeightedCell weight={weight}>{text} </WeightedCell>
    </tr>
  );
};

export default FontWeightRow;

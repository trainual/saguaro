import styled from 'styled-components';

const WeightedCell = styled.td<{ weight: string }>`
  font-weight: ${({ weight }) => weight};

  &+& {
    padding-left: 3rem;
  }
`;

type Props = {
  text: string;
  weight: string;
};

const FontWeightRow = ({ text, weight }: Props) => {

  return (
    <tr>
      <WeightedCell weight={weight}>{text}</WeightedCell>
      <WeightedCell weight={weight}>{weight}</WeightedCell>
    </tr>
  );
};

export default FontWeightRow;

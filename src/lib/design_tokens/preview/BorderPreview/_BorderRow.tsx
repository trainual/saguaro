import styled, { useTheme } from 'styled-components';

const BorderText = styled.td`
  color: ${({ theme: { vars } }) => vars.textDefault};
  font-size: 0.9rem;
`;

const BorderCell = styled.td<{ radius: string; width: string }>`
  border-color: ${({ theme: { vars } }) => vars.borderDefault};
  border-radius: ${({ radius }) => radius};
  border-width: ${({ width }) => width};
  border-style: solid;
  height: 40px;
  padding: 30px;
  width: 80px;
`;

type Props = {
  text: string;
  radius: string;
};

const BorderRow = ({ radius, text }: Props) => {
  const {
    constants: {
      borderWidthXs,
      borderWidthSm,
      borderWidthMd,
      borderWidthLg,
      borderWidthXl,
      borderWidth2xl,
    },
  } = useTheme();

  return (
    <tr>
      <BorderText>{text}</BorderText>
      <BorderText>{radius}</BorderText>
      <BorderCell radius={radius} width={borderWidthXs} />
      <BorderCell radius={radius} width={borderWidthSm} />
      <BorderCell radius={radius} width={borderWidthMd} />
      <BorderCell radius={radius} width={borderWidthLg} />
      <BorderCell radius={radius} width={borderWidthXl} />
      <BorderCell radius={radius} width={borderWidth2xl} />
    </tr>
  );
};

export default BorderRow;

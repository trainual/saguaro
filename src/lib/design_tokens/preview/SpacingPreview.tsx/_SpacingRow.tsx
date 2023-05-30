import styled from 'styled-components';

const SpacingText = styled.td`
  color: ${({ theme: { vars } }) => vars.textDefault};
  font-size: 0.9rem;
`;

const SpacingLeft = styled.span`
  border-right: 1px solid;
`;

const SpacingRight = styled.span`
  border-left: 1px solid;
`;

const SpacingCenter = styled.span<{ width: string }>`
	display: inline-block;
  height: 1px;
  padding: 0;
  width: ${({ width }) => width};
`;

const SpacingCell = ({ spacing }: { spacing: string }) => {
  return (
    <td>
      <SpacingLeft>{'>'}</SpacingLeft>
      <SpacingCenter width={spacing} />
      <SpacingRight>{'<'}</SpacingRight>
    </td>
  );
}

type Props = {
  text: string;
  spacing: string;
};

const SpacingRow = ({ text, spacing }: Props) => {
  return (
    <tr>
      <SpacingText>{text}</SpacingText>
      <SpacingCell spacing={spacing} />
    </tr>
  );
};

export default SpacingRow;

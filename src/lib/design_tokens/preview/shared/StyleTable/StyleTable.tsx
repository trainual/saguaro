import styled from "styled-components";

export const StyleTable = styled.table``;

const SoftText = styled.div`
  color: ${({ theme: { vars } }) => vars.textDefault};
  font-size: 0.75rem;
  font-style: italic;
  padding-left: 10px;
  text-align: left;
`;

const MainTitle = styled.div`
  color: ${({ theme: { vars } }) => vars.textDefault};
  font-size: 1.5rem;
  text-align: left;
`;

export const StyleGroupHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <thead>
      <tr>
        <th colSpan={2}>
          <MainTitle>{title}</MainTitle>
          {description && <SoftText>{description}</SoftText>}
        </th>
      </tr>
    </thead>
  );
};

export const StyleGroupBody = styled.tbody`
  &::before {
    content: '';
    display: block;
    height: 15px;
  }

  &::after {
    content: '';
    display: block;
    height: 40px;
  }
`;

export default StyleTable;

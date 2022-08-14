import styled from "styled-components";


export const PostSummaryContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["gray-700"]};
  border-radius: 10px;
  margin-top: -4rem;
  margin-bottom: 4.5rem;
`;

export const PostSummaryOptions = styled.div`
  span {
    font-size: ${({ theme }) => theme.sizes.link};
  }
`;
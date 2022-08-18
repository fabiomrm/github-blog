import styled from "styled-components";


export const PostSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["gray-700"]};
  border-radius: 10px;
  margin-top: -4rem;
  /* margin-bottom: 4.5rem; */
`;

export const PostSummaryOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 100%;

  a, button {
    font-size: ${({ theme }) => theme.sizes.link};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    color: ${({ theme }) => theme.colors["blue-500"]};
  }

  & > button {
    background-color: transparent;
    border: 0;
  }
  
`;

export const PostSummaryHeader = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.sizes["title-large"]};
    margin-bottom: .5rem;
  }
`;

export const TagsArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
`;
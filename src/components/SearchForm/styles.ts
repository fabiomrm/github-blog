import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid ${({ theme }) => theme.colors["gray-500"]};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background-color: ${({ theme }) => theme.colors["gray-900"]};
    color: ${({ theme }) => theme.colors["gray-400"]};
  }
`;

export const TextArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  

  strong {
    font-size: ${({ theme }) => theme.sizes["title-small"]};
  }

  span {
    font-size: ${({ theme }) => theme.sizes["text-small"]};
    color: ${({ theme }) => theme.colors["gray-300"]}
  }
  

`
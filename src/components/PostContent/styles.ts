import styled from "styled-components";

export const PostContentContainer = styled.main`
  padding: 2.5rem 2rem;
  color: ${({ theme }) => theme.colors["gray-200"]};

  h3 {
    color: ${({ theme }) => theme.colors["blue-500"]};
    font-size: ${({ theme }) => theme.sizes["text-medium"]};
    font-weight: 400;
    text-decoration: underline;
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
  }
`;
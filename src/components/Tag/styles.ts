import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  span {
    display: block;
    font-size: ${({ theme }) => theme.sizes["text-medium"]};
  }
`;
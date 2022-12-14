import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["gray-700"]};
  border-radius: 10px;
  margin-top: -4rem;
  margin-bottom: 4.5rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px
  }
`;

export const TextContentArea = styled.div`
  width: 100%;;
`;

export const TextContentHeader = styled.div`

  display: flex;
  justify-content: space-between;

  strong {
    font-size: ${({ theme }) => theme.sizes["title-large"]};
  }

  a {
    display: inline-flex;
    color: ${({ theme }) => theme.colors["blue-500"]};
    font-size: 12px;
    gap: .5rem;
  }
`;

export const TextContentBody = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  p {
    font-size: ${({ theme }) => theme.sizes["title-medium"]};
    color: ${({ theme }) => theme.colors["gray-200"]};
    line-height: 1.6em;
    font-weight: 400;
  }
`;

export const TagsArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  img.logo {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
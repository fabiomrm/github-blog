import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  
  border: 1px solid ${({ theme }) => theme.colors["gray-600"]};
  border-radius: 10px;
  padding: 2rem;
  height: 16.25rem;
  border: 1px solid #f00;
  
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;

  h2 {
    max-width: 60%;
    font-size: ${({ theme }) => theme.sizes["title-medium"]};
  }

  span {
    font-size: ${({ theme }) => theme.sizes["text-small"]};
    color: ${({ theme }) => theme.colors["gray-300"]};
  }
  `;

export const CardBody = styled.div`
  p {
    font-size: ${({ theme }) => theme.sizes["text-medium"]};
    color: ${({ theme }) => theme.colors["gray-300"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
import styled from "styled-components";
import headerBackgroundImg from '../../assets/header-background.png';

export const HeaderContainer = styled.header`
  background-image: url(${headerBackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  height: 18.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
import { TagContainer } from "./styles";
import githubLogo from '../../assets/github-icon.svg';
export function Tag() {
  return (
    <TagContainer>
      <img src={githubLogo} alt="Github logo" className="logo" />
      <span>fabiomrm</span>
    </TagContainer>
  )
}
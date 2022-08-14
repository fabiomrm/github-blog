import { TagContainer } from "./styles";
import githubLogo from '../../assets/github-icon.svg';

interface TagProps {
  icon: string;
  text: string;
}

export function Tag({ icon, text }: TagProps) {
  return (
    <TagContainer>
      <img src={icon} alt="" className="logo" />
      <span>{text}</span>
    </TagContainer>
  )
}
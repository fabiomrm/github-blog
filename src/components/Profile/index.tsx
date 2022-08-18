import { ArrowSquareOut } from "phosphor-react";
import { Tag } from "../Tag";
import { ProfileContainer, TagsArea, TextContentArea, TextContentBody, TextContentHeader } from "./styles";

import githubLogo from '../../assets/github-icon.svg';
import buildingLogo from '../../assets/building-icon.svg';
import userLogo from '../../assets/user-icon.svg';
import { useGithub } from "../../contexts/GithubContext";

export function Profile() {

  const { user } = useGithub();

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="avatar" />
      <TextContentArea>
        <TextContentHeader>
          <strong>{user.name}</strong>
          <a href={`https://github.com/${user.login}`} target="_blank">
            GITHUB
            <ArrowSquareOut size={12} />
          </a>
        </TextContentHeader>
        <TextContentBody>
          <p>{user.bio}</p>
        </TextContentBody>
        <TagsArea>
          <Tag icon={githubLogo} text={user.login} href={user.url} />
          <Tag icon={buildingLogo} text={`${user.company ? user.company : "-"}`} />
          <Tag icon={userLogo} text={`${user.followers} seguidor${user.followers > 1 && "es"}`} />

        </TagsArea>
      </TextContentArea>
    </ProfileContainer>
  )
}
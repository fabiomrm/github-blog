import { ArrowSquareOut } from "phosphor-react";
import { Tag } from "../Tag";
import { ProfileContainer, TagsArea, TextContentArea, TextContentBody, TextContentHeader } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/fabiomrm.png" alt="avatar" />
      <TextContentArea>
        <TextContentHeader>
          <strong>Fábio Monteiro</strong>
          <span>
            GITHUB
            <ArrowSquareOut size={12} />
          </span>
        </TextContentHeader>
        <TextContentBody>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </TextContentBody>
        <TagsArea>
          <Tag />
          <Tag />
          <Tag />
        </TagsArea>
      </TextContentArea>
    </ProfileContainer>
  )
}
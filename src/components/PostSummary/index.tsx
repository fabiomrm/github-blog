import { PostSummaryContainer, PostSummaryHeader, PostSummaryOptions, TagsArea } from "./styles";
import arrowLeftImg from '../../assets/arrow-left.svg';
import calendarIcon from '../../assets/calendar-icon.svg';
import commentIcon from '../../assets/comment-icon.svg';
import { ArrowSquareOut, CalendarBlank, ChatCircle } from "phosphor-react";
import githubIcon from '../../assets/github-icon.svg';
import { Tag } from "../Tag";
import { useTheme } from "styled-components";


export function PostSummary() {

  const theme = useTheme()

  return (
    <PostSummaryContainer>
      <PostSummaryOptions>
        <span>
          <img src={arrowLeftImg} alt="" />
          VOLTAR
        </span>
        <span>
          VER NO GITHUB
          <ArrowSquareOut size={12} />
        </span>
      </PostSummaryOptions>
      <PostSummaryHeader>
        <h1>JavaScript data types and data structures</h1>
        <TagsArea>
          <Tag icon={githubIcon} text="fabiomrm" href="https://github.com/fabiomrm" />
          <Tag icon={calendarIcon} text="Há 1 dia" />
          <Tag icon={commentIcon} text="5 comentários" />
        </TagsArea>
      </PostSummaryHeader>
    </PostSummaryContainer>
  )
}
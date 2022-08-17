import { PostSummaryContainer, PostSummaryHeader, PostSummaryOptions, TagsArea } from "./styles";
import arrowLeftImg from '../../assets/arrow-left.svg';
import calendarIcon from '../../assets/calendar-icon.svg';
import commentIcon from '../../assets/comment-icon.svg';
import { ArrowSquareOut } from "phosphor-react";
import githubIcon from '../../assets/github-icon.svg';
import { Tag } from "../Tag";
import { Post } from "../../contexts/GithubContext";

interface PostSummaryProps {
  post: Post;
}


export function PostSummary({ post }: PostSummaryProps) {

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
        <h1>{post.title}</h1>
        <TagsArea>
          <Tag icon={githubIcon} text={post.user.login} href={`https://github.com/${post.user.login}`} />
          <Tag icon={calendarIcon} text="Há 1 dia" />
          <Tag icon={commentIcon} text={`${post.comments} comentário`} />
        </TagsArea>
      </PostSummaryHeader>
    </PostSummaryContainer>
  )
}
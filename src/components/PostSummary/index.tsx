import { PostSummaryContainer, PostSummaryHeader, PostSummaryOptions, TagsArea } from "./styles";
import arrowLeftImg from '../../assets/arrow-left.svg';
import calendarIcon from '../../assets/calendar-icon.svg';
import commentIcon from '../../assets/comment-icon.svg';
import { ArrowSquareOut } from "phosphor-react";
import githubIcon from '../../assets/github-icon.svg';
import { Tag } from "../Tag";
import { Post } from "../../contexts/GithubContext";
import { timeElapsedDateFormatter } from "../../utils/dateFormatter";
import { Link } from "react-router-dom";

interface PostSummaryProps {
  post: Post;
}


export function PostSummary({ post }: PostSummaryProps) {

  return (
    <PostSummaryContainer>
      <PostSummaryOptions>
        <Link to="/">
          <img src={arrowLeftImg} alt="seta para esquerda para voltar" />
          VOLTAR
        </Link>
        <a href={post.html_url} target="_blank">
          VER NO GITHUB
          <ArrowSquareOut size={12} />
        </a>
      </PostSummaryOptions>
      <PostSummaryHeader>
        <h1>{post.title}</h1>
        <TagsArea>
          <Tag icon={githubIcon} text={post.user.login} href={`https://github.com/${post.user.login}`} />
          <Tag icon={calendarIcon} text={timeElapsedDateFormatter(new Date(post.created_at))} />
          <Tag icon={commentIcon} text={`${post.comments} comentário`} />
        </TagsArea>
      </PostSummaryHeader>
    </PostSummaryContainer>
  )
}
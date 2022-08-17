import { Post } from "../../contexts/GithubContext";
import { timeElapsedDateFormatter } from "../../utils/dateFormatter";
import { CardBody, CardContainer, CardHeader } from "./styles";

interface CardProps {
  post: Post;
}

export function Card({ post }: CardProps) {
  return (
    <CardContainer to={`/posts/${post.number}`}>
      <CardHeader>
        <h2>{post.title}</h2>
        <span>{timeElapsedDateFormatter(new Date(post.created_at))}</span>
      </CardHeader>
      <CardBody>
        <p>
          {post.body}
        </p>
      </CardBody>
    </CardContainer>
  )
}
import { Post } from "../../contexts/GithubContext";
import { CardBody, CardContainer, CardHeader } from "./styles";

interface CardProps {
  post: Post;
}

export function Card({ post }: CardProps) {
  return (
    <CardContainer to={`/posts/${post.id}`}>
      <CardHeader>
        <h2>{post.title}</h2>
        <span>Há 1 dia</span>
      </CardHeader>
      <CardBody>
        <p>
          {post.body}
        </p>
      </CardBody>
    </CardContainer>
  )
}
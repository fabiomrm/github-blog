import { PostSummaryContainer, PostSummaryOptions } from "./styles";
import arrowLeftImg from '../../assets/arrow-left.svg';
export function PostSummary() {
  return (
    <PostSummaryContainer>
      <PostSummaryOptions>
        <span>
          <img src={arrowLeftImg} alt="" />
          VOLTAR
        </span>
      </PostSummaryOptions>
    </PostSummaryContainer>
  )
}
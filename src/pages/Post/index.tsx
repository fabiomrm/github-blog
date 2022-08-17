import { PostContent } from "../../components/PostContent/indext";
import { PostSummary } from "../../components/PostSummary";
import { PostContainer } from "./styles";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Post as PostType } from "../../contexts/GithubContext";

const USERNAME = "fabiomrm"
const REPO = "github-blog-posts"



export function Post() {

  const { id } = useParams<string>();
  const [currentPost, setCurrentPost] = useState<PostType | undefined>();


  async function fetchPost(id: string) {
    const response = await api.get(`repos/${USERNAME}/${REPO}/issues/${id}`)
    console.log(response.data)
    setCurrentPost(response.data)
  }

  useEffect(() => {
    fetchPost(id as string)
  }, [])



  return (
    <PostContainer>
      {currentPost !== undefined ? (
        <>
          <PostSummary post={currentPost} />
          <PostContent />
        </>
      ) : (
        <>
          <h1>Carregando...</h1>
        </>
      )
      }
    </PostContainer>
  )
}
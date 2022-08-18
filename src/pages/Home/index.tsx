import { useEffect } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { useGithub } from "../../contexts/GithubContext";
import { HomeContainer, PostsArea } from "./styles";

export function Home() {

  const { posts } = useGithub();



  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PostsArea>
        {
          posts ? posts.map((post) => (
            <Card post={post} key={post.id} />
          )) : <h1>Carregando...</h1>
        }

      </PostsArea>
    </HomeContainer>
  )
}
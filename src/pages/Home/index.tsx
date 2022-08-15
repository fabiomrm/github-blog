import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { HomeContainer, PostsArea } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PostsArea>
        <Card postId="1" />
        <Card postId="2" />
        <Card postId="3" />
        <Card postId="4" />
      </PostsArea>
    </HomeContainer>
  )
}
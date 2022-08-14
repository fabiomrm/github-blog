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
        <Card />
        <Card />
        <Card />
        <Card />
      </PostsArea>
    </HomeContainer>
  )
}
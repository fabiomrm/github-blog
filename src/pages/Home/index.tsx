import { api } from "../../api/api";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { useGithub } from "../../contexts/GithubContext";
import { HomeContainer, PostsArea } from "./styles";


const USERNAME = "fabiomrm"
const REPO = "github-blog-posts"

export function Home() {

  const { posts, setPosts } = useGithub();
  const filteredPosts = posts;

  async function fetchPosts(query: string = "") {
    try {
      console.log(query)
      const response = await api.get(`/search/issues?q=${query}%20repo:${USERNAME}/${REPO}`)
      console.log(response.data)
      setPosts(response.data.items)
    } catch (e) {
      alert("erro")
    }
  }


  return (
    <HomeContainer>
      <Profile />
      <SearchForm fetchPosts={fetchPosts} />
      <PostsArea>
        {
          filteredPosts ? filteredPosts.map((post) => (
            <Card post={post} key={post.id} />
          )) : <h1>Carregando...</h1>
        }

      </PostsArea>
    </HomeContainer>
  )
}
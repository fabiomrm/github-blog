import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";

const USERNAME = "fabiomrm"
const REPO = "github-blog-posts"

interface User {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  bio: string | null;
  company: string | null;
  followers: number;
  url: string;
}

export interface Post {
  id: number;
  number: number;
  title: string;
  user: User;
  body: string;
  comments: number;
  created_at: string;
}

interface GithubContextType {
  user: User;
  posts: Post[];
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubContextProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<User>({} as User);
  const [posts, setPosts] = useState<Post[]>([]);




  async function fetchUser() {
    const response = await api.get(`users/${USERNAME}`)
    const { data } = response;
    setUser(data);
  }

  async function fetchPosts() {
    const response = await api.get(`search/issues?q=repo:${USERNAME}/${REPO}`)
    const { data } = response

    setPosts(data.items)
  }



  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchPosts();
  }, [])




  return (
    <GithubContext.Provider value={{ user, posts }}>
      {children}
    </GithubContext.Provider>
  )
}


export function useGithub() {
  return useContext(GithubContext);
}
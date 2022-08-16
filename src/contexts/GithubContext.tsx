import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";

const USERNAME = "fabiomrm"

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

interface GithubContextType {
  user: User;
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubContextProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<User>({} as User);


  async function fetchUser() {
    const response = await api.get(`users/${USERNAME}`)
    const { data } = response;
    setUser(data);
  }


  useEffect(() => {
    fetchUser()
  }, [])




  return (
    <GithubContext.Provider value={{ user }}>
      {children}
    </GithubContext.Provider>
  )
}


export function useGithub() {
  return useContext(GithubContext);
}
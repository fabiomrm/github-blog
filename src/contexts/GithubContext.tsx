import React, { createContext, useContext, useEffect } from "react";
import { api } from "../api/api";

const USERNAME = "fabiomrm"

interface User {
  id: number;
  name: string;
  login: string;
  company: string | null;
  followers: number;
}

interface GithubContextType {
  user: User;
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubContextProvider({ children }: { children: React.ReactNode }) {

  async function fetchUser() {
    const response = await api.get(`users/${USERNAME}`)
    const { data } = response;
    console.log(data)
  }


  useEffect(() => {
    fetchUser()
  }, [])




  return (
    <GithubContext.Provider value={{}}>
      {children}
    </GithubContext.Provider>
  )
}


export function useGithub() {
  return useContext(GithubContext);
}
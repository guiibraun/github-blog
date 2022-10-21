import { createContext, ReactNode, useEffect, useState } from 'react'
import { PostsType } from '../@types/posts'
import { api } from '../lib/axios'

interface BlogContextType {
  profile: {
    id: number
    login: string
    name: string
    followers: string
    bio: string
    avatar_url: string
    html_url: string
    company: string
  }
  posts: PostsType[]
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [posts, setPosts] = useState<PostsType[]>([])

  const [profile, setProfile] = useState({
    id: 0,
    login: '',
    name: '',
    followers: '',
    bio: '',
    avatar_url: '',
    html_url: '',
    company: '',
  })

  async function fetchIssues() {
    const response = await api.get('/repos/guiibraun/github-blog/issues')
    setPosts(response.data)
  }

  async function fetchProfile() {
    const response = await api.get('/users/guiibraun')
    setProfile(response.data)
  }

  useEffect(() => {
    fetchProfile()
    fetchIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ profile, posts }}>
      {children}
    </BlogContext.Provider>
  )
  // eslint-disable-next-line prettier/prettier
}

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
  searchPost: (post?: string) => void
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

  async function searchPost(post?: string) {
    const response = await api.get(
      `https://api.github.com/search/issues?q=${post}repo:guiibraun/github-blog`,
    )
    console.log(response.data.items)
    setPosts(response.data.items)
  }

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
    <BlogContext.Provider value={{ profile, posts, searchPost }}>
      {children}
    </BlogContext.Provider>
  )
  // eslint-disable-next-line prettier/prettier
}

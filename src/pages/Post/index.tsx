import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { CardPresentation } from './PostCardPresentation'
import { PostContent } from './PostContent'
import { PostContainer } from './styles'

export interface PostType {
  title: string
  user: {
    login: string
  }
  body: string
  comments: number
  created_at: string
  html_url: string
}

export function Post() {
  const [singlePost, setSinglePost] = useState<PostType>({
    title: '',
    user: {
      login: '',
    },
    html_url: '',
    body: '',
    comments: 0,
    created_at: new Date().toISOString(),
  })
  const params = useParams()

  useEffect(() => {
    async function getPost() {
      const response = await api.get(
        `/repos/guiibraun/github-blog/issues/${params.id}`,
      )
      setSinglePost(response.data)
    }
    getPost()
  }, [params.id])

  return (
    <PostContainer>
      <CardPresentation
        title={singlePost.title}
        url={singlePost.html_url}
        user={singlePost.user.login}
        createdAt={singlePost.created_at}
        comments={singlePost.comments}
      />
      <PostContent body={singlePost.body} />
    </PostContainer>
  )
}

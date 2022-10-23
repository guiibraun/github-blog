import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../../../lib/axios'
import {
  CommentForm,
  CommentInfo,
  Comments,
  InfoAndTime,
  PostCommentsContainer,
} from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { dateFormatter } from '../../../../utils/formatter'

interface PostCommentsProps {
  commentsId?: string
}

interface CommentsType {
  id: number
  url: string
  body: string
  user: {
    login: string
    avatar_url: string
  }
  created_at: string
}

const commentValidationSchema = zod.object({
  comment: zod.string(),
})

type DataProps = zod.infer<typeof commentValidationSchema>

export function PostComments({ commentsId }: PostCommentsProps) {
  const [comments, setComments] = useState<CommentsType[]>([])
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(commentValidationSchema),
    defaultValues: {
      comment: '',
    },
  })

  useEffect(() => {
    if (commentsId) {
      async function getComments() {
        const response = await api.get(
          `/repos/guiibraun/github-blog/issues/${commentsId}/comments`,
        )
        setComments(response.data)
      }
      getComments()
    }
  }, [commentsId])

  async function handleCommentSubmit(data: DataProps) {
    const response = await api.post(
      `/repos/guiibraun/github-blog/issues/${commentsId}/comments`,
      {
        owner: 'guiibraun',
        repo: 'github-blog',
        issue_number: Number(commentsId),
        body: data.comment,
      },
    )
    console.log(response)
    setComments((prevState) => [response.data, ...prevState])
  }

  return (
    <PostCommentsContainer>
      <h4>Comentários</h4>
      <CommentForm onSubmit={handleSubmit(handleCommentSubmit)}>
        <textarea placeholder="Deixe um comentário" {...register('comment')} />
        <button type="submit">Enviar</button>
      </CommentForm>
      {comments.map((comment) => (
        <Comments key={comment.id}>
          <img src={comment.user.avatar_url} alt="" />
          <CommentInfo>
            <InfoAndTime>
              <h6>{comment.user.login}</h6>
              <span>{dateFormatter(comment.created_at)}</span>
            </InfoAndTime>
            <p>{comment.body}</p>
          </CommentInfo>
        </Comments>
      ))}
    </PostCommentsContainer>
  )
}

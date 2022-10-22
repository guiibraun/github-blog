import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../../../lib/axios'
import { Comments, PostCommentsContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
}

const commentValidationSchema = zod.object({
    comment: zod.string(),
})

type DataProps = zod.infer<typeof commentValidationSchema>

export function PostComments({ commentsId }: PostCommentsProps) {
    const [comments, setComments] = useState<CommentsType[]>([])
    const { register, handleSubmit} = useForm({
        resolver: zodResolver(commentValidationSchema),
        defaultValues:  {
            comment: ''
        }
    })


    async function getComments() {
        const response = await api.get(
            `/repos/guiibraun/github-blog/issues/${commentsId}/comments`,
        )
        setComments(response.data)
    }
    useEffect(() => {
        if (commentsId) {
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
        setComments(prevState => [response.data, ...prevState, ])
    }

    return (
        <PostCommentsContainer>
            <h4>Comentários</h4>
            <form onSubmit={handleSubmit(handleCommentSubmit)}>
                <textarea placeholder="Deixe um comentário" {...register('comment')} />
                <button>Enviar</button>
            </form>
            {comments.map((comment) => (
                <Comments key={comment.id}>
                    <img src={comment.user.avatar_url} alt="" />
                    <div>{comment.body}</div>
                </Comments>
            ))}
        </PostCommentsContainer>
    )
}

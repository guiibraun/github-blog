import { PostContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface PostContentProps {
  body: string
}

export function PostContent({ body }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown>{body}</ReactMarkdown>
    </PostContentContainer>
  )
}

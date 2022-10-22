import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogContext } from '../../../../contexts/blogContexts'
import { dateFormatter } from '../../../../utils/formatter'
import { PostCard, SummaryContainer, TitleAndTime } from './styles'

export function Summary() {
  const { posts } = useContext(BlogContext)

  return (
    <SummaryContainer>
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <Link to={`/post/${post.number}`} key={post.number}>
              <PostCard>
                <TitleAndTime>
                  <h2>{post.title}</h2>
                  <span>{dateFormatter(post.created_at)}</span>
                </TitleAndTime>

                <p>{post.body.slice(0, 120)}...</p>
              </PostCard>
            </Link>
          ))}
        </>
      ) : (
        <h2>Nenhum post encontrado</h2>
      )}
    </SummaryContainer>
  )
}

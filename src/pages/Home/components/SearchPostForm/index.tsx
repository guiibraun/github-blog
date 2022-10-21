import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/blogContexts'
import { LabelsForm, SearchPostFormContainer } from './styles'

export function SearchPostForm() {
  const { posts } = useContext(BlogContext)

  return (
    <SearchPostFormContainer>
      <LabelsForm>
        <div>Publicações</div>
        <span>
          {posts.length > 1 ? (
            <>{posts.length} publicações</>
          ) : (
            <>{posts.length} publicação</>
          )}
        </span>
      </LabelsForm>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchPostFormContainer>
  )
}

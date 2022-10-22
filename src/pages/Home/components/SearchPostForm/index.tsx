import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BlogContext } from '../../../../contexts/blogContexts'
import { LabelsForm, SearchPostFormContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchPostValidationSchema = zod.object({
  post: zod.string(),
})

type DataProps = zod.infer<typeof searchPostValidationSchema>

export function SearchPostForm() {
  const { posts, searchPost } = useContext(BlogContext)
  const { register, handleSubmit } = useForm<DataProps>({
    resolver: zodResolver(searchPostValidationSchema),
  })

  function handleSearchInput(dataInfo: DataProps) {
    searchPost(dataInfo.post)
  }

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
      <form onSubmit={handleSubmit(handleSearchInput)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('post')}
        />
      </form>
    </SearchPostFormContainer>
  )
}

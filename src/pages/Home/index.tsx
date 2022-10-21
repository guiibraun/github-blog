import { CardPresentation } from './components/CardPresentation'
import { SearchPostForm } from './components/SearchPostForm'
import { Summary } from './components/Summary'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardPresentation />
      <SearchPostForm />
      <Summary />
    </HomeContainer>
  )
}

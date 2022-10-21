import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  CardInfos,
  CardPresentationContainer,
  NameAndLink,
  SocialGithubInfos,
} from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/blogContexts'

export function CardPresentation() {
  const { profile } = useContext(BlogContext)

  return (
    <CardPresentationContainer>
      <img src={profile.avatar_url} alt="" />
      <CardInfos>
        <NameAndLink>
          <h4>{profile.name}</h4>
          <div>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </NameAndLink>
        <p>{profile.bio}</p>
        <SocialGithubInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            {profile.login}
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} size="lg" />
            {profile.company}
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} size="lg" />
            {profile.followers} seguidores
          </div>
        </SocialGithubInfos>
      </CardInfos>
    </CardPresentationContainer>
  )
}

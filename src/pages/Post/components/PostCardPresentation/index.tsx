import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  CardInfos,
  NameAndLink,
  PostCardPresentationContainer,
  SocialGithubInfos,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { dateFormatter } from '../../../../utils/formatter'

interface CardPresentationProps {
  title: string
  url: string
  user: string
  createdAt: string
  comments: number
}

export function CardPresentation({
  title,
  comments,
  createdAt,
  user,
  url,
}: CardPresentationProps) {
  const navigate = useNavigate()

  return (
    <PostCardPresentationContainer>
      <CardInfos>
        <NameAndLink>
          <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </button>
          <a href={url} target="_blank" rel="noreferrer">
            VER GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameAndLink>
        <h2>{title}</h2>
        <SocialGithubInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            {user}
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} size="lg" />
            {dateFormatter(createdAt)}
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} size="lg" />
            {comments} comentáríos
          </div>
        </SocialGithubInfos>
      </CardInfos>
    </PostCardPresentationContainer>
  )
}

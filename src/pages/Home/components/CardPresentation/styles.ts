import styled from 'styled-components'

export const CardPresentationContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  margin-top: -5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: grid;
  grid-template-columns: 9.25rem 1fr;

  gap: 2rem;

  img {
    border-radius: 10px;
    max-height: 9.25rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NameAndLink = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  h4 {
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    svg {
      margin-left: 0.5rem;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`
export const SocialGithubInfos = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  div {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

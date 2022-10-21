import styled from 'styled-components'

export const PostCardPresentationContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  margin-top: -5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;

  gap: 2rem;
`
export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  flex: 1;

  h2 {
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }
`

export const NameAndLink = styled.header`
  display: flex;
  justify-content: space-between;

  a,
  button {
    color: ${(props) => props.theme.blue};
    background-color: transparent;
    border: 0;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;

    svg {
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
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme['base-label']};
    display: flex;
    gap: 0.5rem;
  }
`

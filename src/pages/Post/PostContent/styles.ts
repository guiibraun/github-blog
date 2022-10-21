import styled from 'styled-components'

export const PostContentContainer = styled.article`
  color: ${(props) => props.theme['base-text']};
  margin-top: 3rem;
  padding: 2rem;
  font-size: 1rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }

  p {
    margin-bottom: 1rem;
  }

  pre {
    background-color: ${(props) => props.theme['base-post']};
    padding: 1rem;
    border-radius: 2px;
  }

  img {
    max-width: 100%;
  }
`

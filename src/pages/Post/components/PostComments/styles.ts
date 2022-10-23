import styled from 'styled-components'

export const PostCommentsContainer = styled.div``

export const CommentForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;

  gap: 1rem;

  textarea {
    flex: 1;
    padding: 1rem;
    background-color: ${(prosp) => prosp.theme['base-input']};

    color: ${(props) => props.theme['base-title']};

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    min-height: 6rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  button {
    background-color: ${(props) => props.theme['base-post']};
    color: ${(props) => props.theme['base-title']};
    border: 0;
    width: auto;
    height: 58px;
    border-radius: 6px;
    cursor: pointer;
    padding: 1rem 1.5rem;
    width: min-content;
  }
`

export const Comments = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1.5rem;
  margin: 1rem 0;
  background-color: ${(props) => props.theme['base-post']};
  padding: 1rem;
  border-radius: 10px;

  align-items: center;

  img {
    max-width: 100%;
    border-radius: 6px;
  }
`

export const CommentInfo = styled.div`
  font-family: 'Nunito', sans-serif;
  p {
    font-size: 1rem;
  }
`
export const InfoAndTime = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    font-size: 1.5rem;
    line-height: 1.6;
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }
`

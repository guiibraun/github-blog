import styled from 'styled-components'

export const PostCommentsContainer = styled.div``

export const Comments = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;

  img {
    max-width: 100%;
  }
`
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
  }
`

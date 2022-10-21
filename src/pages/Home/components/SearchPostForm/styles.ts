import styled from 'styled-components'

export const SearchPostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 5rem;

  form {
    display: flex;

    input[type='text'] {
      flex: 1;
      padding: 1rem;
      background-color: ${(prosp) => prosp.theme['base-input']};

      color: ${(props) => props.theme['base-title']};

      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const LabelsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Nunito', sans-serif;

  div {
    font-size: 1.05rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    font-weight: 400;
  }
`

import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;

  a {
    text-decoration: none;
  }
`

export const PostCard = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  border-radius: 10px;

  row-gap: 1.5rem;

  p {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TitleAndTime = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;

  h2 {
    flex: 1;
    font-family: 'Nunito', sans-serif;
    color: ${(props) => props.theme['base-title']};
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.6;
  }

  span {
    display: flex;
    flex-wrap: nowrap;

    font-size: 0.875rem;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;

    color: ${(props) => props.theme['base-span']};
  }
`

import styled from 'styled-components'

export default function ArtworkPage() {
  return (
    <Wrapper>
      <header>This is the header for the artwork page</header>
      <section>This is the description for the artwork page</section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 30px auto;
`
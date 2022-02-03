import styled from 'styled-components'

export default function LiteraturePage() {
  return (
    <Wrapper>
      <header>This is the header for the literature page</header>
      <section>This is the description for the literature page</section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 30px auto;
`
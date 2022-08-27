import styled from "styled-components"

const Wrap = styled.div`
  text-align: center;
  padding-top: 100px 20px 20px 20px;
  min-height: 100vh;
  background: #333 center no-repeat;
  background-image: url("/images/mobilebg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: 60px;
  }
  h1 {
    font-size: 80px;
    padding: 0px;
    margin: 0px;
  }
  h2 {
    color: red;
  }
`

const InnerWrap = styled.div`
  padding: 20px 40px;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  margin: 20px;
`

export default function Home() {
  return (
    <Wrap>
      <InnerWrap>
        <h1>🚧</h1>
        <h2>Site is Under Contruction</h2>
        <h3>
          Our well trained and well fed monkeys are working
          really hard in the cubical cages to make this site up for you.
        </h3>
        <p>Team: majorminor.in</p>
      </InnerWrap>
    </Wrap>
  )
}

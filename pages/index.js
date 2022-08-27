import styled from "styled-components"
import AboutUs from "../comp/AboutUs"
import LatestEvents from "../comp/LatestEvents"

const Wrap = styled.div`
  
`

const InnerWrap = styled.div`
  margin: 150px 0px;
`

const Hero = styled.div`
  background: #333 center no-repeat;
  background-image: url("/images/header-main-2.jpg");
  background-size: cover;
  font-family: 'Roboto', sans-serif;
  background-position: fixed;
  padding: 20px;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0, 0.3);
    position: absolute;
    z-index: 0;
  }
  h1 {
    position: relative;
    color: #fff;
    font-size: 40px;
    text-shadow: 0px 0px 8px rgba(150, 150, 150, 1);
    z-index: 1;
    line-height: 1.4em;
  }
`

const JoinBTN = styled.button`
  padding: 15px 20px;
  border: none;
  background: #222;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`


export default function Home() {
  return (
    <Wrap>
      <Hero>
        <InnerWrap>
          <h1>
            Join the
            <br />
            Biggest events
            <br />
             happening in
            <br />
            Raipur
          </h1>
          <JoinBTN>
            Book Now
          </JoinBTN>
        </InnerWrap>
      </Hero>
      <LatestEvents />
      <AboutUs />
    </Wrap>
  )
}

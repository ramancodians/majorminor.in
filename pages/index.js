import styled from "styled-components"
import AboutUs from "../comp/AboutUs"
import LatestEvents from "../comp/LatestEvents"

const Wrap = styled.div `
  margin: 0px auto;
  > img {}
`

const InnerWrap = styled.div `
  margin: 150px 0px;
`

const Footer = styled.div`
  text-align: center;
  img {
    max-height: 50px;
    margin: 0px auto;
  }
`

const Hero = styled.div `
  /* background: #333 center no-repeat;
  background-image: url("/images/header-main-2.jpg");
  background-size: cover; */
  font-family: 'Roboto', sans-serif;
  position: relative;

  iframe {
    position: block;
    width: 100%;
    border: 1px solid red;
    height: 100vh;
  }
  /* &::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0, 0.3);
    position: absolute;
    z-index: 0;
  } */
  h1 {
    position: relative;
    color: #fff;
    font-size: 40px;
    text-shadow: 0px 0px 8px rgba(150, 150, 150, 1);
    z-index: 1;
    line-height: 1.4em;
  }
`

const JoinBTN = styled.button `
  margin: 50px auto;
  display: block;
  padding: 15px 20px;
  border: none;
  background: #FFF;
  color: #333;
  font-size: 22px;
  font-weight: bold;
`


export default function Home() {
  return (
    <Wrap>
      <Hero>
        <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/756756274?h=4e845680fe&autoplay=1&loop=1&title=0&byline=0&portrait=0"
            style={{ position:"absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>

            </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        {/* <InnerWrap>
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
        </InnerWrap> */} </Hero>
      {/* <LatestEvents /> */}
      {/* <AboutUs/> */}
      <JoinBTN>
        Book Now
      </JoinBTN>
      <Footer>
        <img className="logo" src="/images/mm_grunge_main.png" alt="" onClick={() => window.open("https://sortmyscene.com/event/majorminor-x-radiate-presents-stan-kolev?rep=MAJORM")}/>
        <br />
        <img className="logo" src="/images/insta.png" alt="" onClick={() => window.open("https://instagram.com/majorminorgigs")}/>
      </Footer>
    </Wrap>
  )
}

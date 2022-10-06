import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  background: #111;
  position: relative;
  top: -70px;
  color: #fff;
  img {
    width: 100%;
  }
  > div {
    padding: 30px;
  }
`

const BhaiLele = styled.div`
  text-align: center;
  button {
    width: 100%;
    border: none;
    padding: 16px;
    font-size: 18px;
    font-weight: bold;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    max-height: 50px;
    width: auto;
    margin: 0px auto;
  }
`

const AboutUs = (props) => (
  <Wrap>
    <img src="/images/bg2.jpg" alt="" />
    <div>
      <h2>Only the best events for you.</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aperiam ab cupiditate quam beatae impedit, totam sed et laudantium nobis soluta sunt repellat. Earum accusamus ullam exercitationem cum necessitatibus inventore.
      </p>
    </div>
    <img src="/images/more-event.jpg" alt="" />
    <BhaiLele>
      <h1>Slots filling soon</h1>
      <button>
        Book Now
      </button>
    </BhaiLele>
    <Footer>
      <img src="/images/mm_grunge_main.png" alt="" />
    </Footer>
  </Wrap>
)

export default AboutUs
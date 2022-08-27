import React from "react"
import styled from "styled-components"



const Wrap = styled.div`
  background: #111;
  color: #fff;
  font-size: 20px;
  position: relative;
  overflow-y: visible;
  transform: skewY(10deg) translateY(-35px);
  z-index: 2;
  > div {
    position: relative;
    transform: skewY(-10deg);
    padding: 20px 30px 100px 30px;
    > h2 {
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
    > p {
      font-size: 16px;
      margin-top: 0px;
    }
  }
`

const Item = styled.div`
  margin: 20px 0px;
  border: 1px solid #fff;
  img {
    width: 100%;
  }
  button {
    width: 100%;
    border: none;
    padding: 16px;
    font-size: 18px;
    font-weight: bold;
  }
`

const LatestEvents = (props) => (
  <Wrap>
    <div>
      <h2>Latests Events</h2>
      <p>New Events every week!</p>
      {[1,2].map(x => (
        <Item key={x}>
          <img src={`/images/event-${x}.jpg`} alt="" />
          <button>
            Book Now
          </button>
        </Item>
      ))}
    </div>
  </Wrap>
)

export default LatestEvents
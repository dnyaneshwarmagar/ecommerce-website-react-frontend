import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #ec7a7a;
    position:relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items:center ;
    justify-content:center;
    position: absolute;
    top:0;
    bottom: 0;
    left : ${props=>props.direction === 'left' && "10px"};
    right : ${props=>props.direction === 'right' && "10px"}; 
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`
const Wrapper = styled.div`
    height: 100%;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper></Wrapper>
        <Arrow  direction="right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
import styled, { keyframes } from 'styled-components';

const SvgContainer = styled.div`
  width: 3.25em;
  margin: 0 auto;
`;

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Svg = styled.svg`
  width: 100%;
  height: auto;
  transform-origin: center;
  animation: ${rotateAnimation} 2s linear infinite;
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
`;
const Circle = styled.circle`
  fill: none;
  stroke: hsl(214, 97%, 59%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dashAnimation} 1.5s ease-in-out infinite;
`;
const Loading = () => {
    return (
        <SvgContainer>
            <Svg viewBox="25 25 50 50">
                <Circle r="20" cy="50" cx="50"></Circle>
            </Svg>
        </SvgContainer>
    );
};

export default Loading;

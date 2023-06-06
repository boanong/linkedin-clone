import styled from "@emotion/styled";

export const LineInner = styled.div`
  position: relative;
  display: block;
  width: 150px;
  height: 2px;
  overflow: hidden;
  background-color: lightgray;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: -25%;
    width: 50%;
    height: 100%;
    background-color: #0077b5;
    animation: load 1.25s ease infinite;
  }

  // &:after {
  // 	position: absolute;
  // 	content: '';
  // 	top: 0;
  // 	right: 0;
  // 	width: 25%;
  // 	height: 100%;
  // 	background-color: slategray;
  // 	animation: load 3s ease-in-out infinite;
  // }
  @keyframes load {
    0% {
    }
    50% {
      left: 75%;
    }
    100% {
    }
  }
`;
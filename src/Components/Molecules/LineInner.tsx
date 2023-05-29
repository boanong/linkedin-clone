import styled from "@emotion/styled";

export const LineInner = styled.div`
    width: 100%;
    height: inherit;
    background: #0077B5;
    animation: slide 2s ease-in-out infinite;
    @keyframes slide{
  0%{
    transform-origin: left;
    transform: scalex(0.3);
  }
  //12.5%{
    //transform-origin: left;
    //transform: scalex(0.2);
  //}
  25%{
    transform-origin: left;
    transform: scalex(1);
  }
  26%{
    transform-origin: right;
    transform: scalex(1);
  }
  50%{
    transform-origin: right;
    transform: scalex(0.3);
  }
  //62.5%{
    //transform-origin: right;
    //transform: scalex(0.2);
  //}
  75%{
    transform-origin: right;
    transform: scalex(1);
  }
  76%{
    transform-origin: left;
    transform: scalex(1);
  }
  100%{
    transform-origin: left;
    transform: scalex(0.3);
  }
}
`;
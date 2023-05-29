import styled from "@emotion/styled";

export const LandingHero = styled.section`
  /* display: flex;
  align-items: flex-start;
  width: 98vw;
  margin: 10px auto;
  max-width: 1000px;
  @media only screen and (min-width: 768px) {
    width: 95vw;
    flex-direction: column;
  } */
  display: flex;
  height: calc(100vh - 73px);
  gap: 35px;
  align-items: flex-start;
  position: relative;
`;

export const LandingHeroLeft = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  @media only screen and (min-width: 768px) {
    margin: 20px auto;
    flex-direction: column;
    width: 50vw;
    max-width: 680px;
  }
`;

export const LandingHeroH1 = styled.h1`
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 25px;
  color: #8f5849;
  width: 100%;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 3.2rem;
    margin-bottom: 18px;
  }
`;

export const LandingHeroInput = styled.input`
  padding: 5px 1px;
  font-size: 1.1rem;
  margin-top: 10px;
  width: 97vw;
  @media only screen and (min-width: 768px) {
    max-width: 350px;
    width: 45vw;
    padding: 5px 10px;
    font-size: 1.2rem;
    margin-top: 15px;
  }
`;

export const LandingHeroRight = styled.div`
  width: 100vw;
  margin: auto 0;
  @media only screen and (min-width: 768px) {
    /* margin: 20px auto;
    width: 50vw;
    max-width: 650px; */
    background-image: url('https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg');
    height: calc(100vh - 73px);
    width: 50vw;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    z-index: -1;
    position: absolute;
    right: 0;
  }
`;

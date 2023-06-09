import styled from "@emotion/styled";

interface StyledProps {
  noEmail?: boolean
}

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
  gap: 15px;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  @media only screen and (min-width: 768px) {
    gap: 35px;
    height: fit-content;
    width: 100vw;
    min-height: calc(100vh - 76px - 50px);
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LandingHeroLeft = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto 0;
  @media only screen and (min-width: 768px) {
    margin: 20px auto;
    width: 47vw;
    max-width: 680px;
  }
`;

export const LandingHeroH1 = styled.h1`
  font-size: 32px;
  color: #8f5849;
  width: 87%;
  padding-bottom: 20px;
  text-align: left;
  @media only screen and (min-width: 768px) {
    font-size: 3rem;
    width: 70%;
    font-weight: 300;
    margin: 0;
    padding: 0 0 24px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

export const LandingHeroInput = styled.input`
  padding: 5px 10px;
  font-size: 15px;
  margin-top: 15px;
  border: 1px solid #000;
  border-radius: 5px;
  width: min(94vw, 380px);
  height: fit-content;
  min-height: 40px;
  @media only screen and (min-width: 768px) {
    max-width: 400px;
    width: 100%;
    padding: 10px 15px;
    font-size: 1.1rem;
    margin-top: 15px;
  }
`;

export const LandingHeroRight = styled.div`
  width: 90vw;
  margin: auto;
  background-image: url("https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4");
  height: 378px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  right: 0;
  @media only screen and (min-width: 768px) {
    width: 50vw;
    background-image: url("https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg");
    background-size: cover;
    background-position: left;
    height: calc(100vh - 73px);
  }
`;

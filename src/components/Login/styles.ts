import styled, { keyframes } from 'styled-components';
import CardBackgroundImage from 'assets/card-background.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Circle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;

  animation-delay: 2s;
  animation: 1.5s ${fadeIn} ease-out;
`;

export const LeftBigCircle = styled(Circle)`
  background-color: var(--blue-dark);
  clip-path: circle(6% at top 15% left 10%);
`;

export const LeftMediumCircle = styled(Circle)`
  background-color: var(--blue);
  clip-path: circle(5.5% at top 15% left 10%);
`;

export const RightTopCircle = styled(Circle)`
  background-color: var(--blue-dark);
  clip-path: circle(4% at top 10% right 7%);
`;

export const SmallRightTopCircle = styled(Circle)`
  background-color: rgba(73, 83, 184, 0.6);
  clip-path: circle(1.5% at top 20% right 10%);
`;

export const RightBottomCircle = styled(Circle)`
  background-color: var(--blue-dark);
  clip-path: circle(30% at right 120%);
`;

export const Section = styled.section`
  flex: 1;

  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  z-index: 1;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Card = styled.div`
  max-width: 450px;
  min-width: 300px;
  height: 75%;

  display: flex;

  border-radius: 10px;
  align-items: flex-end;

  background-image: url(${CardBackgroundImage});
  background-repeat: no-repeat;
`;

export const Description = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: white;
  font-size: 1.25rem;
  line-height: 1.5;

  padding: 2rem;
`;

export const RightSection = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;

  font-family: Inter;
  font-style: normal;
`;

export const WelcomeTextBox = styled.div`
  margin-bottom: 1.5rem;
  color: var(--white);
`;

export const Text = styled.p`
  background: var(--blue-dark);
  font-size: 4.5rem;
  font-weight: 300;
`;

export const StrongText = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
`;

export const Divider = styled.div`
  border-left: 1px solid var(--blue);

  height: 25px;
  transition: height 0.5s;
`;

export const Button = styled.button`
  width: 50%;
  max-width: 210px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 1rem;
  padding-right: 1rem;

  font-weight: 600;
  text-align: left;
  border: 0;
  border-radius: 6px;

  background: var(--background);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  }

  &:hover ${Divider} {
    height: 50px;
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;

  background-color: var(--blue);

  margin: 0 auto;
  padding: 2.5rem 2rem;

  @media (max-width: 965px) {
    ${Section} {
      grid-template-columns: 1fr;
    }

    ${LeftSection} {
      display: none;
    }

    ${RightSection}, ${WelcomeBox} {
      justify-content: center;
      align-items: center;
    }

    ${WelcomeTextBox} {
      text-align: center;
      margin-bottom: 0;
    }

    ${Text}, ${StrongText} {
      font-size: 4rem;
    }

    ${Description} {
      width: 65%;
      font-weight: 300;
      text-align: center;
      padding: 0.8rem 0 2.5rem 0;
    }
  }

  @media (min-width: 966px) {
    ${RightSection} ${WelcomeBox} ${Description} {
      display: none;
    }
  }
`;

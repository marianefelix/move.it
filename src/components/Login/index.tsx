import {
  Container,
  LeftBigCircle,
  LeftMediumCircle,
  RightTopCircle,
  SmallRightTopCircle,
  RightBottomCircle,
  Section,
  LeftSection,
  Card,
  Description,
  RightSection,
  WelcomeBox,
  WelcomeTextBox,
  Text,
  StrongText,
  Button,
  Divider,
} from './style';

import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';

const Login = () => {
  return (
    <Container>
      <LeftBigCircle />
      <LeftMediumCircle />
      <RightTopCircle />
      <SmallRightTopCircle />
      <RightBottomCircle />
      <Section>
        <LeftSection>
          <Card>
            <Description>
              Sua página de desafios de exercícios para melhorar sua
              produtividade
            </Description>
          </Card>
        </LeftSection>
        <RightSection>
          <WelcomeBox>
            <WelcomeTextBox>
              <Text>Bem vindo ao</Text>
              <StrongText>Move.it</StrongText>
            </WelcomeTextBox>
            <Description>
              Sua página de desafios de exercícios para melhorar sua
              produtividade
            </Description>
            <Button>
              Login com Github
              <Divider />
              <GithubIcon title="Github logo" />
            </Button>
          </WelcomeBox>
        </RightSection>
      </Section>
    </Container>
  );
};

export default Login;

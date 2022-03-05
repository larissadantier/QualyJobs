import logoJob from '../../assets/svg/logo-job.svg';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import {
  Container,
  Header,
  Aside,
  SearchContainer,
  VacancyContainer,
  Vacancy,
  VacancyInfo,
  Footer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <Input maxWidth={790} height={55} placeholder="Title, companies, expertise or benefits" />
      </Header>

      <VacancyContainer>
        <Aside>
          <Checkbox>
            Full time
          </Checkbox>
          <SearchContainer>
            <strong>Location</strong>
            <Input maxWidth={379} height={48} placeholder="City, state, code or country" />
          </SearchContainer>
        </Aside>

        <Vacancy>
          <img src={logoJob} alt="Logo Vacancy" />
          <VacancyInfo>
            <small>Kanancy</small>
            <span>Front-end Software Engineer</span>
            <strong>Full time</strong>
          </VacancyInfo>

          <Footer>
            <small>New York</small>
            <small>5 days go</small>
          </Footer>
        </Vacancy>
      </VacancyContainer>
    </Container>
  );
}

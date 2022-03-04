import Input from '../../components/Input';
import {
  Container,
  Header,
  Aside,
  SearchContainer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <Input maxWidth={790} height={55} placeholder="Title, companies, expertise or benefits" />
      </Header>

      <Aside>
        <input type="checkbox" value="Full Time" />
        <span>Full Time</span>
        <SearchContainer>
          <strong>Location</strong>
          <Input maxWidth={379} height={48} placeholder="City, state, code or country" />
        </SearchContainer>
      </Aside>
    </Container>
  );
}

import Checkbox from '../../components/Checkbox';
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
        <Checkbox>
          Full time
        </Checkbox>
        <SearchContainer>
          <strong>Location</strong>
          <Input maxWidth={379} height={48} placeholder="City, state, code or country" />
        </SearchContainer>
      </Aside>
    </Container>
  );
}

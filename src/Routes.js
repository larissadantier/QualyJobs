import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailVacancy from './pages/DetailVacancy';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/vacancy/:id" component={DetailVacancy} />
    </Switch>
  );
}

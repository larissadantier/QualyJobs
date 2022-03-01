import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vacancy from './pages/Vacancy';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/vacancy/:id" component={Vacancy} />
    </Switch>
  );
}

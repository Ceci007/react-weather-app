import Page from './components/Page';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createMemoryHistory } from 'history';

export const history = createMemoryHistory();

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Page} />
            </Switch>
        </Router>
    )
}

export default App;

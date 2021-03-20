import Signup from './components/loginRegister/Signup'
import Signin from './components/loginRegister/Signin'
import { Provider } from 'react-redux'
import Store from './redux/store'
import Nav from './components/nav/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Provider store={Store}>

        <Router>

          <Switch>
            <Route exact component={Signin} path='/' />
            <Route component={Signup} path='/signup' />
            <Nav />
          </Switch>
          
        </Router >

      </Provider>

    </div>
  );
}

export default App;

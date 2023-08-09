import logo from './logo.svg';
import './App.scss';
import './Examples/MyComponent';
import MyComponent from './Examples/MyComponent';
import ListTodo from './Todos/ListTodo';
import Home from './Examples/Home';
import ListUser from './Users/ListUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation/Navigation';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route index path='/' exact>
              <Home />
            </Route>
            <Route path='/todo'>
              <ListTodo />
            </Route>
            <Route path='/about' >
              <MyComponent />
            </Route>
            <Route path='/user' exact >
              <ListUser />
            </Route>
            <Route path='/users/:id'>
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

    </BrowserRouter>

  );
}

export default App;
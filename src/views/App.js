import logo from './logo.svg';
import './App.scss';
import './Examples/MyComponent';
import MyComponent from './Examples/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation/Navigation';
import {
  BrowserRouter,
  Routes,
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
          <Routes>
            {/* <Route index path='/' element={<Home />} exact>
            </Route> */}
            <Route path='/todo' element={<ListTodo />}>
            </Route>
            <Route path='/about' element={<MyComponent />}>
            </Route>
          </Routes>
        </header>s
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
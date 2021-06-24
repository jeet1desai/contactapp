import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';


function App() {
  // const notify = () => toast("Wow so easy !");
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/add' component={AddContact}></Route>
        <Route exact path='/edit/:id' component={EditContact}></Route>
      </Switch>
    </>
  )
}

export default App;

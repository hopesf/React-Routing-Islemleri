import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route,NavLink,Link,Redirect,Switch} from 'react-router-dom';
import Haberler from './Components/Haberler';
import Profil from './Components/Profil';
import Error from './Components/Error';

class App extends React.Component{

  state={
    check:false
  };

  onClickButton=()=>{
    this.setState(prevState=> ({
      check: !prevState.check
    }));
  };

  /*Navlink de class tanimlayabiliyosun, ama exact koyman lazim yoksa digerleride true donuyo kodda.
  * Ama Link ile class tanimlarsan calismaz*/

  render() {
    return(

        <Router>
          <div>
            <NavLink activeClassName="activelink" exact to={'/'}>Anasayfa</NavLink> <br/>
            <NavLink activeClassName="activelink" exact to={'/iletisim'}>iletisim</NavLink> <br/>
            <Link to={'/haberler/3'}>Haberler</Link> <br/>
            <Link to={'/Profil'}>Profile</Link>

            <br/><br/>
            <input
                type="button"
                onClick={this.onClickButton}
                value={ this.state.check ? 'Logout':'Log in' }
            />

            <Switch>

              <Route path="/" exact render={
                () =>{
                  return(<h1>Anasayfa</h1>)
                }
              }/>

              <Route path="/iletisim" exact strict render={
                () =>{
                  return(<h2>iletisim</h2>)
                }}/>

              <Route path="/haberler/:id" exact strict component={Haberler} />

              <Route path="/Profil" exact strict render={
                ()=>(
                  this.state.check ? (<Profil/>) : (<Redirect to="/"/>)
                )}/>

              <Route component={Error} />

            </Switch>

          </div>
        </Router>
    )
  }
}

export default App;

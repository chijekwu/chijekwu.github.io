import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListDoctorComponent from './components/ListDoctorComponent.jsx';
import CreateDoctorComponent from './components/CreateDoctorComponent.jsx';
import UpdateDoctorComponent from './components/UpdateDoctorComponent';
import ViewDoctorComponent from './components/ViewDocDetailComponent'

function App() {
  return (
    <div>
      <Router>
          <Header />
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListDoctorComponent}></Route>
                <Route path="/doctors" component={ListDoctorComponent}></Route>
                <Route path="/add-doctor" component={CreateDoctorComponent}></Route>
                <Route path="/update-doctor/:id" component={UpdateDoctorComponent}></Route>
                <Route path="/view-doctor" component={ViewDoctorComponent}></Route>
              </Switch>
            </div>
          <Footer />
      </Router>
    </div>
    
  );
}

export default App;

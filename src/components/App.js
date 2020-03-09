import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContactsPage from './contlist'
import ContactAdd from './add-contact';
import contactUpd from './modifyContact'
class App extends Component {




    render() {

        return (


            <Router>
                <div className="listcontainer">
                    <h1>Contact App</h1>
                    <Link to={"/list"}> <button>Contact List</button></Link>
                    <Link to={"/add_contact"}><button>Add Contact</button></Link>


                </div>


                <Route path="/list" component={ContactsPage} />

                <Route path="/add_contact" component={ContactAdd} />
                <Route path='/update/:id' component={contactUpd} />
            </Router>



        );
    }
}



export default App;
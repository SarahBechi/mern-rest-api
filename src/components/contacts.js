import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router } from "react-router-dom";


class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],

        }
    }

    /*   componentDidMount() {
   
           axios.get("http://localhost:4000/contacts")
               .then(res => this.setState({ contacts: res.data }))
   
       }
    delete1 = (id) => {
        axios.delete("http://localhost:4000/delete_contact/" + id)
            .then(res => {
                console.log(res.data);
                window.location.reload()
            }

            )
    }


    modif = (id) => {
        axios.delete("http://localhost:4000/delete_contact/" + id)
            .then(res => {
                console.log(res.data);
                window.location.reload()
            }

            )
    }



*/



    render() {
        return (
            <Router>
                <div>
                    {this.state.contacts.map((el) => {
                        return (
                            <div className="contact-card" key={el._id}>
                                <p><span>Name:</span><span>{el.name}</span></p>
                                <p><span>Phone:</span><span>{el.phoneNumber}</span></p>
                                <p><span>Email:</span><span>{el.contactEmail}</span></p>
                                <p>
                                    <button onClick={() => { this.delete1(el._id) }}>Supprimer</button>


                                    <button onClick={() => this.props.history.push(`/update/${el._id}`)}>Modifier</button>





                                </p>

                            </div>
                        )
                    })}


                </div>
            </Router>
        );
    }
}

export default ContactList;
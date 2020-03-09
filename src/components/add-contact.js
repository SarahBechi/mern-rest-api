
import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom'
class ContactAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: "",
            phoneNumber: 0,
            contactEmail: ""



        }
    }



    addContact = () => {
        axios.post("http://localhost:4000/contact", {
            "name": this.state.name,
            "phoneNumber": this.state.phoneNumber,
            "contactEmail": this.state.contactEmail
        })
            .then(res => {
                console.log(res.data);
                window.location.reload()
            }

            )


    }



    render() {

        return (<div>


            <div className="ContactAdd">
                <span>Add Contact Page</span>
                <span className="contactName">contactName</span>
                <input onChange={(e => this.setState({ name: e.target.value }))} className="searchByName"></input>
                <span className="contactNumber">Contact Number</span>
                <input onChange={(e => this.setState({ phoneNumber: e.target.value }))} className="searchByName"></input>
                <span className="ContactEmail">Contact Email</span>
                <input onChange={(e => this.setState({ contactEmail: e.target.value }))} className="searchByName"></input>
                <Link to={`/contacts/`}> <button className="addContact" onClick={this.addContact}>Add Contact</button></Link>

            </div>
        </div>
        )

    }
}



export default ContactAdd;
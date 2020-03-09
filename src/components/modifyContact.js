import React, { Component } from 'react'
import axios from 'axios';

export default class Updatecontact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {


        axios.get('http://localhost:4000/contact1/' + this.props.match.params.id)
            .then(res => this.setState({ name: res.data.name, phone: res.data.phoneNumber, email: res.data.contactEmail }))


    }





    UpdateContact = () => {
        let modifiedContact = {
            name: this.state.name,
            phoneNumber: this.state.phone,
            contactEmail: this.state.email
        }
        axios.put('http://localhost:4000/update/' + this.props.match.params.id, modifiedContact)
    }
    render() {

        return (
            <div>
                <input name="name" placeholder="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} /><br />
                <input name="phone" placeholder="phone" type="text" value={this.state.phone} onChange={(e) => this.handleChange(e)} /><br />
                <input name="email" placeholder="email" type="text" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                <span onClick={this.UpdateContact}>modifier</span>

            </div>
        )
    }
}


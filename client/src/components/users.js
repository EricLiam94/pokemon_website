import React, {Component} from "react";



class Users extends Component
{
    constructor(){
        super();
        this.state={
            lists : []
        }
    }

componentDidMount()
{
    fetch('http://localhost:5000/api/customer',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    .then( res => res.json())
    .then( customers => this.setState({lists:customers},()=>console.log('Customer fetched',customers)));

}

render(){
    return(
        <div>
        <h1> Test </h1>
        <ul>
        {this.state.lists.map(customer => 
          <li >{customer.name} {customer.age}</li>
        )}
        </ul></div>
        )
}
}

export default Users;
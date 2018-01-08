import React, { Component } from 'react';


export default class AddProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Some name',
      hobbies: 'Some hobby'
    }
    this.handleName = this.handleName.bind(this);
    this.handleHobby = this.handleHobby.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleName(e){
    this.setState({
      name: e.target.value
    })
  }

  handleHobby(e){
    this.setState({
      hobbies: e.target.value
    })
  }

  handleClick(e) {
    let newProfile = {
      name: this.state.name,
      hobbies: [this.state.hobbies]
    }
    this.props.addUser(newProfile)
  }


  render() {
    return (
      <div>
        <p>Add a new profile</p>
        <p>{this.state.name}</p>
        <p>{this.state.hobbies}</p>
        <span>Value of input: {this.state.name}</span><br />
        <button onClick={ this.handleClick }>Add</button><br/>
        <input onChange={this.handleName} value={this.state.name} /><br/>
        <input onChange={this.handleHobby} value={this.state.hobbies} /><br/>
      </div>
    )
  }
}


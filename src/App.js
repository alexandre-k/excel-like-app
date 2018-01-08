import React, { Component } from 'react';
import AddProfile from './AddProfile';
import Profile from './Profile';
import { getProfiles } from './utils';
import PropTypes from 'prop-types';
import HotTable from 'react-handsontable';

class Comp1 extends Component {
  constructor(props) {
    super(props)
  }
  readCSVfile (file) {
    const csv = file.target.files[0]
    console.log(csv)
    if ((csv !== undefined) && (csv.type.match('text/csv'))) {
	let reader = new FileReader();
	reader.onload = function(e) {
	    console.log(reader.result)
	}
	reader.readAsText(csv)
    }
  }
  render () {
    return (
	<div>
	<p>
	Select a file: 
	</p>
	<input type='file' onClick={this.readCSVfile} />

	<HotTable
	    data={[['some', 'test'], ['handsontable', 'data']]}
	    contextMenu={true}
	    colHeaders={true} />
	</div>
    )
  }
}

export default class App extends Component {
    constructor(props) {
	super(props)
	this.state = {
	  profiles: []
	    
	}
	this.addUser = this.addUser.bind(this)
    }

   //  componentDidMount() {
   //    getProfiles()
   // 	.then(profiles => {
   // 	  this.setState({
   // 	    profiles: profiles
   // 	  })
   // 	})
   //    console.log(this.state.profiles)
   // }

    addUser(newProfile) {
	this.setState({
	    profiles: this.state.profiles.concat([newProfile])
	});
    };
    render() {
	let profiles = this.state.profiles.map(profile => {
	    return (
		    <Profile
			name={profile.name}
			age={profile.age}
			hobbies={profile.hobbies} />
	    )
	})
	return (
	    <div>
	    <Comp1 name={'Bill'} count={'5'} />
		{profiles}
		<AddProfile addUser={this.addUser} />
	    </div>
	);
    }
};

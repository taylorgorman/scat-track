import React from 'react';

const Context = React.createContext();

export default Context;

export class Provider extends React.Component {

	state = {
		init: true
	}

	constants = {
  	hai: true
	}

	functions = {
		updateView: ( view ) => {
			this.setState({ view });
		},
	}

	render(){

		return (
		<Context.Provider value={{
			...this.state,
			...this.constants,
			...this.functions
		}}>
			{ this.props.children }
		</Context.Provider>
		);

	}

}

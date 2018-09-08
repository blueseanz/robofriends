import React, { Component } from 'react';

class ErrorBoundry extends Component {
	super(props);
	this.state = {
		hasError: false
	}

	ComponentDidCatch(error, info){
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError){
			returen <h1>Oooops. This is not good</h1>
		}	
	}
	return this.props.children;
}

export default ErrorBoundry;
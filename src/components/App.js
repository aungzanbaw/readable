import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Header from './Header'
import ListView from './ListView'
import CategoryView from './CategoryView'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/" render={()=> (<ListView/>)}/>
				<Route path="/category" render={()=> (<CategoryView/>)}/>
			</div>
		)
	}
}

export default connect()(App)

// const mapDispatchToProps 
// const mapStateToProps 
// connect(mapDispatchToProps, mapStateToProps)(component)
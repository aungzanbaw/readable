import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Header from './Header'
import ListView from './ListView'
import CategoryView from './CategoryView'
import { withRouter } from 'react-router'

class App extends Component {
	render() {
		return (
			<div className="container"> 
				<Header />  
				<Route exact path="/" render={()=> (<ListView/>)}/>
				<Route exact path="/category" render={()=> (<CategoryView/>)}/>
			</div>
		)
	}
}

export default withRouter(connect()(App))

// const mapDispatchToProps 
// const mapStateToProps 
// connect(mapDispatchToProps, mapStateToProps)(component)
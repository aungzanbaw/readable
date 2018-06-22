import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Header from './Header'
import ListView from './ListView'
import CategoryView from './CategoryView'
import { withRouter } from 'react-router'
import PostView from './PostView';

class App extends Component { 
	render() {
		console.log(this.props)
		return (
			<div className="container-fluid"> 
				<Header />  
				<Route exact path="/" render={()=> (<ListView/>)}/>
				<Route exact path="/category" render={()=> (<CategoryView/>)}/>
				<Route exact path="/post/new" render={()=> (<PostView/>)}/>
			</div>
		)
	}
}

export default withRouter(connect()(App))

// const mapDispatchToProps 
// const mapStateToProps 
// connect(mapDispatchToProps, mapStateToProps)(component)
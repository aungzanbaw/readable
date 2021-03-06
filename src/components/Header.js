import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route} from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg"> 
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">  
                        <Link className="navbar-brand" to="/">Readable</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link> 
                                </li>
                                {
                                    /* <li className="nav-item">
                                    <Link className="nav-link" to="/category">All categories</Link>
                                    </li>*/
                                } 
                                <li className="nav-item"> 
                                    <Link className="nav-link" to="/">Category</Link>
                                </li>
                                <li className="nav-item"> 
                                    <Link className="nav-link" to="/">Category</Link>
                                </li>
                                <li className="nav-item"> 
                                    <Link className="nav-link" to="/">Category</Link> 
                                </li>
                                <Switch> 
                                    <Route exact path="/" component={() => (<li className="nav-item"><Link className="nav-link btn btn-outline-primary" to="/post/new">Add new post</Link></li>)} /> 
                                </Switch>
                                
                            </ul>
                        </div>
                    </nav> 
                </div>
            </div>
        )
    }
}

export default Header
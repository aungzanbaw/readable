import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ListView extends Component {
    render(){
        return(
            <div className="row">
                <nav className="col-lg-12 nav justify-content-end">
                    <Link className="nav-link" to="/">Category</Link>
                    <Link className="nav-link" to="/">Category</Link>
                    <Link className="nav-link" to="/">Category</Link> 
                    <select>
                        <option selected>Sort by...</option>
                        <option value="1">Date</option>
                        <option value="2">Score</option> 
                    </select>
                </nav> 
                <table class="table table-borderless">
                     
                    <tbody>
                        <tr> 
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit, Otto</td> 
                            <td>-5 votes</td>
                            <td>3 comments</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-outline-dark">detail</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Up vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Down vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-info">Edit</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                            </td> 
                        </tr>
                        <tr> 
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit, Thornton</td> 
                            <td>5 votes</td>
                            <td>1 comments</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-outline-dark">detail</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Up vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Down vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-info">Edit</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                                </td>
                        </tr>
                        <tr> 
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit, Larry Bird</td> 
                            <td>0 votes</td>
                            <td>0 comments</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-outline-dark">detail</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Up vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Down vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-info">Edit</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListView
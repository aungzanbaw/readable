import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ListView extends Component {
    render(){
        return(
            <div className="row">
                <br/>
                <div className="col-lg-4 text-center"> 
                    <select>
                        <option selected>Sort by...</option>
                        <option value="1">Date</option>
                        <option value="2">Score</option> 
                    </select>
                </div> 
                <h3 className="col-lg-4 text-center">
                    Sorted by score
                </h3> 
                <h3 className="col-lg-4 text-center">
                    Total 2 posts
                </h3> 
                <table class="table table-borderless"> 
                    <tbody>
                        <tr> 
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit by <b>Otto</b>
                                <span class="badge badge-light">(category)</span>
                            </td> 
                            <td><span class="badge badge-secondary">-5</span> votes</td>
                            <td><span class="badge badge-dark">4</span> comments</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-outline-dark">detail</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Up vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Down vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-info">Edit</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                            </td> 
                        </tr>
                        <tr> 
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit by <b>Thornton</b>
                                <span class="badge badge-light">(category)</span>
                            </td> 
                            <td><span class="badge badge-secondary">-5</span> votes</td>
                            <td><span class="badge badge-dark">1</span> comments</td>
                            <td>
                                <button type="button" class="btn btn-sm btn-outline-dark">detail</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Up vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-secondary">Down vote</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-info">Edit</button>&nbsp;
                                <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                                </td>
                        </tr>
                        <tr> 
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit by <b>Larry Bird</b>
                                <span class="badge badge-light">(category)</span>
                            </td> 
                            <td><span class="badge badge-secondary">0</span> votes</td>
                            <td><span class="badge badge-dark">0</span> comments</td>
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
import React, {Component} from 'react';
import {Link} from 'react-router';
import {ProgramsMongo} from "../../../api/programs.js";


class AddProgram extends Component{

  constructor(props) {
   super(props);
   this.state = {
     programs:[],
     name: '',
     description: '',
     url: '',
   };

 }

 addProgram(event) {
    event.preventDefault();
    let name = this.state.name;
    let description = this.state.description;
    let url = this.state.url;

    ProgramsMongo.insert({
      name,
      description,
      url
    });

   alert("Program " + name + " added");
 }

render() {
    return (
          <div className="add">
          <div className="form-horizontal">
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="nombre">Name:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Ingeniería Eléctrica" className="form-control" value={this.state.value} onChange={(event) => {
                  this.setState({name: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="description">Description:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="SNIES: xxx programa de 8 semestres..." className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({description: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="url">URL:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="https://url.uniandes.edu.co" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({url: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
             <div className="col-sm-offset-2 col-sm-10">
               <div className="btn-group">
                  <button className="btn btn-success" onClick={this.addProgram.bind(this)}>
                    Save
                  </button>
                  <Link className="btn btn-primary" to={'/programs' }>Go Back</Link>
              </div>
            </div>
          </div>
      </div>
      </div>

    );
  }
}

export default AddProgram;

import React, {Component, PropTypes} from "react";
import Program from "./Program";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {ProgramsMongo} from "../../../api/programs.js";
import {Link} from 'react-router';


class Programs extends Component {

    render() {
        return (

            <div className="container-fluid">
              <h1>Programs</h1>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <ol className="breadcrumb">
                    <li className="active">
                      Programs
                    </li>

                  </ol>
                </div>
              </div>
                <Link className="btn" to={'/programs/add' }>
                  <i className="fa fa-plus fa-2x btn">
                    <span id="add">Add Program</span>
                  </i>
                </Link>
                <div className="row">
                    {this.props.programs.map(program => {
                        return <Program key={program._id} program={program}/>
                    })}

                </div>
            </div>
          )
}
}

export default AppContainer = createContainer(()=>{
	let programs = ProgramsMongo.find({});
	return {
		programs:programs.fetch()
	};
}, Programs);

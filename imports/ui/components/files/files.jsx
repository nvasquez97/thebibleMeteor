import React, {Component, PropTypes} from "react";
import File from "./file";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {FilesMongo} from "../../../api/programs.js";
import {Link} from 'react-router';

class Files extends Component {
  constructor(props) {
        super(props);

        this.state = {
            files: [],
            name:'',
            drive_url: '',
            _id:''
        }
    }

  render(){
    return (
      <div className="container-fluid">
              <h1>Files</h1>
              <hr />
            <div className="row">
                <div className="col-sm-12">
                  <ol className="breadcrumb">
                    <li>
                      <Link className="" to={'/programs' }>Programs</Link>
                    </li>
                    <li className="">
                      <Link className="" to={'/programs/' + this.props.params.programId + '/courses'}>Courses</Link>
                    </li>
                    <li className="active">
                      Files
                    </li>
                  </ol>
                </div>
              </div>

            <Link className="btn" to={'/programs/' + this.props.params.programId + '/courses/' +this.props.params.courseId }>
              <i className="fa fa-plus fa-2x btn">
                <span id="add">Add File</span>
              </i>
            </Link>

            <div className="row">

                    {this.state.files.map(file => {
                        return <File key={file._id} file={file}/>
                    })}

              </div>
            </div>
    )
  }
}
// export default Files;
export default AppContainer = createContainer(({params})=>{
  console.log(params.fileId);
  let files = FilesMongo.find({file_id: new Mongo.ObjectID(params.fileId)});
  console.log(files.fetch());
	return {
		files:files.fetch()
	};
}, Files);

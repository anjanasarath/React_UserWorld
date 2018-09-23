import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';

const Profile = (props) => (
  <div className="row">
    <div className="col-2">
      <img className="rounded-circle user-profile-image" src={props.user.img}/>
    </div>
    <div className="col-10">
      <div className="row">
        <div className="col-4">Name</div>
        <div className="col-8"><TextField id="user-name" value={props.user.name} /></div>
      </div>
      <div className="row">
        <div className="col-4">id</div>
        <div className="col-8"><TextField id="user-id" value={props.user.id} /></div>
      </div>
      <div className="row">
        <div className="col-4">Description</div>
        <div className="col-8"><TextField id="user-desc" rowsMax={4} multiLine={true} value={props.user.Description} /></div>
      </div>
    </div>
  </div>
)
export default Profile;

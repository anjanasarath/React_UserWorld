import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { add_user_action } from '../actions';

const style = {
  buttonLabel: {
    textTransform: 'normal',
  }
}

class AddUser extends React.Component{
  constructor(props){
  super(props);
  this.state = {
  open: true
  }
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleClose=this.handleClose.bind(this);
  }

  handleSubmit(event){
    this.setState({open: false});
    this.props.newUser(
    {"id":event.target.elements['user-id'].value,
    "name": event.target.elements['user-name'].value,
    "img": "http://www.fillmurray.com/200/200",
    "Description": event.target.elements['user-desc'].value
    }
  );
}
  handleClose(event){
  this.setState({open: false});
}

  render(){
      return(
        <Dialog modal={true} open={this.state.open} title={<div className="row"><i className="fa fa-window-close ml-auto mr-0" onClick={this.handleClose} aria-hidden="true"></i></div>}>
          <form onSubmit={(e) => { e.preventDefault(); this.handleSubmit(e); this.handleClose(); } }>
            <div className="row">
              <div className="col-2">
                <i className="fa fa-user-circle plus-circle-icon"></i>
              </div>
              <div className="col-10">
                <div className="row">
                  <div className="col-4">Name</div>
                  <div className="col-8"><TextField key="user-name" id="user-name" name="user-name"/></div>
                </div>
              <div className="row">
                <div className="col-4">id</div>
                <div className="col-8"><TextField key="user-id" id="user-id" name="user-id"/></div>
              </div>
              <div className="row">
                <div className="col-4">Description</div>
                <div className="col-8"><TextField key="user-desc" id="user-desc" name="user-desc" rows={4} rowsMax={4} multiLine={true}/></div>
              </div>
            </div>
            </div>
            <div className="row float-right">
              <RaisedButton
              key="cancel"
              label="Cancel"
              labelStyle={style.buttonLabel}
              onClick={this.handleClose}/>
              <RaisedButton
              key="adduser"
              type="submit"
              backgroundColor="#6f42c1"
              labelColor="#FFFF"
              label="Add User"
              labelStyle={style.buttonLabel}/>
            </div>
          </form>
        </Dialog>
    )
  }
}

const mapDispatchToProps= (dispatch) => ({
  newUser:(user)=> {
    dispatch(add_user_action(user));
  }
})
export default connect(undefined,mapDispatchToProps)(AddUser);

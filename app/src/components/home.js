import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import UserList from './userList';
import Profile from './userProfile';
import AddUser from './addUser';

class AddUserIcon extends React.Component{
  constructor(props){
    super(props);
    this.state={
      openDialog: false
    }
    this.handleAddUser=this.handleAddUser.bind(this);
  }

  handleAddUser(){
    this.setState({
      openDialog: !this.state.openDialog
    });
  }
  render(){
    return(
      <div>
        <div className="w-100 text-right">
          <i className="fa fa-plus-circle mr-2 plus-circle-icon text-primary" onClick={this.handleAddUser} aria-hidden="true"></i>
        </div>
        {this.state.openDialog && <AddUser/>}
      </div>
    )
  }
}

const Home = (props)=> (
  <div>
    <AddUserIcon/>
      <div className="row">
        <div className="col-2">
          <UserList/>
        </div>
        <div className="col-10 border">
          { props.selectedUser.id != undefined &&
          <Profile user={props.selectedUser}/>
          }
        </div>
      </div>
  </div>
)

const mapStateToProps = (state) =>(
  {
  selectedUser: state.selectedUser,
  }
)
export default connect(mapStateToProps)(Home);

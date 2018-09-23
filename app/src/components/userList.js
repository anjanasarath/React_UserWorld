import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { select_user_action } from '../actions';

const style = {
  checkbox: {
    maxWidth: '25px'
  }
}
class User extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.props.selectUser(this.props.user);
  }
  render(){
    const { user } = this.props;
    return(
        <Card className="mt-3" onClick={this.handleClick}>
          <div className="d-flex">
            <Checkbox style={style.checkbox}/>
            <i className="fa fa-user pr-2" aria-hidden="true"></i>
            <span>{user.name}</span>
          </div>
        </Card>
      );
    }
  }

const UserList = (props) => (
          <div>
            <div className="d-flex">
              <Checkbox style={style.checkbox}/>
              <span>People</span>
              <div className="w-100 text-right">
              <i className="fa fa-trash" aria-hidden="true"></i>
              </div>
            </div>
              { props.users.map((usr)=>(
                <User
                key={usr.id}
                user={usr}
                selectUser={props.selectUser}
                />
            ))}
          </div>
        )

const mapStateToProps = (state) => (
  {
    users : state.users,
  }
);

const mapDispatchToProps = (dispatch) => ({
    selectUser: (user) => {
      dispatch(select_user_action(user));
}});
export default connect(mapStateToProps, mapDispatchToProps)(UserList);

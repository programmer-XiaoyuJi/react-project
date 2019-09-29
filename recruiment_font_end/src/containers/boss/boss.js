import React, {Component} from 'react';
import { getUserList } from '../../redux/chatuser.redux'
import { connect } from 'react-redux';
import UserCard from '../../components/usercard/usercard'
@connect(
    state=>state,
    {getUserList}

)
class Boss extends Component {

    componentDidMount(){
        this.props.getUserList('seeker')
    }
    render() {
        return (
            <UserCard userList = {this.props.chatuser.userList}></UserCard>
        )
    }
}
export default Boss
import React from "react";
import UserServices from "../services/UserServices";

class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserServices.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

    render (){
        return (
            <div>
                <h1 className="text-center">User list</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <td>User ID</td>
                            <td>NAME</td>
                            <td>PROFESSION</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key ={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.profession}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent
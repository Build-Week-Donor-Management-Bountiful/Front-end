import React from 'react'; 
import { connect } from 'react-redux'; 


const mapStateToProps = state => {
    return {
        username: username, 
        password: password
    }
}

const Account = props => {
    return (
        <div className="account">
            <h3>Account Settings</h3>
            <form>
                <input name="username" value={props.username} onChange={handleChanges} />
                <input name="password" value={props.password} onChange={handleChanges} />
                <button onClick={updateUser}>Update Account</button>
                <button onClick={deleteUser}>Delete Your Account</button>

            </form>
        </div>
    )
}

export default connect(mapStateToProps, {})(Account)
import './nav.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
}    from 'react-router-dom';
import MyPosts from '../myPosts/MyPosts';
import Posts from '../Posts';
import { connect } from 'react-redux'
import { actions } from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        userName: state.userReducer.user.userName
    }
}

const mapDispatchToProps = (dispatch) => ({
    setUserName: (name) => dispatch(actions.setUserName(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function Nav(props) {
    const { userName, setUserName } = props;
    const history = useHistory();

    const clear = () => {
        setUserName("")
        history.push("/")
        localStorage.clear();
    }
    return (

        <Router>
            { userName ?

                <nav class="navbar navbar-expand-lg navbar-light bg-light" >

                    <Link class="navbar-brand " id="NavuserName" >{userName}</Link>
                    <Link to="/posts" class="navbar-brand active">Posts</Link>
                    <Link to="/myPosts" class="navbar-brand">My posts</Link>
                    <Link to="/signout" class="navbar-brand" onClick={clear}>Sign out</Link>

                </nav>

                : history.push('/')}

            <Switch>

                <Route component={Posts} path="/posts" />
                <Route component={MyPosts} path="/myPosts" />
                
            </Switch>

        </Router>


    )
})
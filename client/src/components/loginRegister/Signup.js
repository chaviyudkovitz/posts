import './LoginRegister.css';
import React from 'react';
import {
    Form,
    Field,
    Formik,
    ErrorMessage
} from 'formik';
import { signup as serviceSignup } from '../../services/userService'
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import * as Yup from 'yup'

import { useHistory, Link } from 'react-router-dom'

const signupSchema = Yup.object().shape({
    userName: Yup.string()
        .required("this field is require"),
    email: Yup.string()
        .required("this field is require")
        .email("invalid email"),
    password: Yup.string()
        .required("this field is require")
        .min(6, "minimum length is 6"),
});

const mapDispatchToProps = (dispatch) => ({
    setUserName: (name) => dispatch(actions.setUserName(name)),
});

export default connect(null, mapDispatchToProps)(function Signup(props) {

    const { setUserName } = props;
    const history = useHistory();

    const signup = async (values) => {
        try {
            debugger;
            const { user, token } = await serviceSignup(values);
            localStorage.setItem('token', token);
            setUserName(user.userName);
            history.push('/posts');
        }
        catch (err) {
            alert(err);
        }
    }

    return (
        <Formik
            initialValues={{
                userName: '',
                email: '',
                password: '',
            }}
            onSubmit={signup}
            validationSchema={signupSchema}
        >
            <Form className="login-box">
                <img class="user"
                    src="https://i.ibb.co/yVGxFPR/2.png"
                    height="100px"
                    width="100px">
                </img>
                <h4>Sign Up</h4>
                <h5>Register to uor websit</h5>

                <div>
                    <Field name="userName"
                        className="form-control"
                        placeholder="name"
                    />
                    <ErrorMessage
                        name="name"
                        component="div"
                        className="alert alert-danger"
                    />
                </div>
                <div>
                    <Field name="email"
                        className="form-control"
                        placeholder="email"
                    />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className="alert alert-danger"
                    />
                </div>

                <Field name="password"
                    className="form-control"
                    placeholder="password"
                    type="password"
                />
                <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                />
                <button type="submit" className="btn btn-primary">Submit</button>

                <Link to='/'>sign in</Link>

            </Form>

        </Formik>
    )



});

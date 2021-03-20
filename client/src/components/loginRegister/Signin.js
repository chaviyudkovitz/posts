import './LoginRegister.css';
import React from 'react';
import {
    Form,
    Field,
    Formik,
    ErrorMessage
} from 'formik';
import { signin as serviceSignin } from '../../services/userService';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import { useHistory, Link } from 'react-router-dom'
import { useState } from 'react';
import ErrorAlert from './ErrorAlert'
import * as Yup from 'yup'

const signinSchema = Yup.object().shape({
    email: Yup.string()
        .required("this field is required!")
        .email("invalid email!"),
    password: Yup.string().
        required("this field is required!"),
});


const mapDispatchToProps = (dispatch) => ({
    setUserName: (name) => dispatch(actions.setUserName(name)),
})


export default connect(null, mapDispatchToProps)(function Signin(props) {
    const history = useHistory();
    const { setUserName } = props;
    const [isFaild, setIsFaild] = useState(false)

    const signin = async (values) => {
        try {
            debugger;
            const { user, token } = await serviceSignin(values);
            localStorage.setItem('token', token);
            setUserName(user.userName);
            history.push('/posts');
        }
        catch (err) {
            setIsFaild(true)
            alert(err);
        }
    }
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={signinSchema}
                onSubmit={signin}
            >

                <div className="login-box">
                    <img class="user"
                        src="https://i.ibb.co/yVGxFPR/2.png"
                        height="100px"
                        width="100px">
                    </img>

                    <h4>Login</h4>

                    <h5>login to your account</h5>

                    <Form >
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
                        <div>
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
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>

                        <Link to='/signup'>sign up</Link>

                    </Form>

                </div>

            </Formik>
            <ErrorAlert
                isFail={isFaild}
                content={"Incorrect username or password"}
            />
        </>
    )
})
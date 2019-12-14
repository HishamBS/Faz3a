import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Container, Navbar, FormControl, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Login extends Component {
    state = {
        data: {},
        user: "",
        message: '',
        isAuthenticated: false,
    }

    addDataToState(data) {
        this.setState({ data: data, message: "Your successfully login" })
        console.log(this.state.message);

        this.props.change(this.state.data)
        this.props.login()
    }
    render() {
        return (
            <div>
                <Container>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('Email is invalid')
                                .required('Email is required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 numbers')
                                .required('Password is required')
                        })}
                        onSubmit={fields => {
                            console.log(fields)
                            this.addDataToState(fields)
                        }}
                        render={({ errors, status, touched }) => (
                            <Form>
                                <h1>Login Form</h1>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mr-2">Login</button>
                                </div>
                            </Form>
                        )}
                    />
                    <Link to='/password'>Forget your password ?</Link>
                </Container>
            </div>
        )
    }
}    

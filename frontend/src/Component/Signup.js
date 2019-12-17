import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import { Container, Navbar, FormControl, Nav } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { register } from "../Component/functionAuth";
import NavBarComp from './main/NavBarComp'
import MapContainer from "./MapContainer";
export default class Signup extends Component {
  state = {
    data: {},
    message: ""
  };
  componentDidMount() {

    navigator.geolocation.getCurrentPosition(position => {
        this.setState({
            latitude : position.coords.latitude ,
            longitude : position.coords.longitude,
            data : this.props.data
        })
        register(this.state.data, this.state.latitude, this.state.longitude);
        
    }, error => {
        console.error(error)
    })
}
  addDataToState(data) {
    let temp = {...this.s}
    this.setState({ data: data, message: "Your message has been Sent"});
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <NavBarComp />
        <br />
        <br />
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              nickname: "",
              email: "",
              password: "",
              confirmPassword: ""
            }}
            validationSchema={Yup.object().shape({
              first_name: Yup.string().required("First Name is required"),
              last_name: Yup.string().required("Last Name is required"),
              nickname: Yup.string().required("Nickname is required"),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 numbers")
                .required("Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required")
            })}
            onSubmit={fields => {
              swal({
                title: "Registered successfully",
                icon: "success",
                button: "ok"
              });
              this.addDataToState(fields);
              console.log(this.state.data);
              this.props.history.push("/login");
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <h1>Register Form</h1>
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <Field
                    name="first_name"
                    type="text"
                    className={
                      "form-control" +
                      (errors.first_name && touched.first_name
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <Field
                    name="last_name"
                    type="text"
                    className={
                      "form-control" +
                      (errors.last_name && touched.last_name
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="last_Name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nickname">Nickname</label>
                  <Field
                    name="nickname"
                    type="text"
                    className={
                      "form-control" +
                      (errors.nickname && touched.nickname ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="nickname"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="text"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <MapContainer />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Register
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </Form>
            )}
          />
        <h4> {this.state.message}</h4>
      </div>
    );
  }
}

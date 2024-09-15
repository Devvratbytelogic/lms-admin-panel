import React, { useState, Fragment } from 'react'
import { Alert, Card, Col, Nav, Row, Tab } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebaseapi/firebaseapi'
import { Imagesdata } from "../../../commondata/commonimages";

function Authlogin() {

  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [passwordshow, setpasswordshow] = useState(false);
  const [data, setData] = useState({
    "email": "adminreact@gmail.com",
    "password": "1234567890",
  })
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  const Login = (e) => {
    setLoader(true)
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => { console.log(user); RouteChange(); setLoader(false) }).catch(err => { setError(err.message); setLoader(false) })
  }
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `${import.meta.env.BASE_URL}academics/`;
    navigate(path);
  }
  document.querySelector("body").classList.add("login-img")

  const Login1 = (_e) => {

    if (data.email == "adminreact@gmail.com" && data.password == "1234567890") {
      RouteChange();
    }
    else {
      setError("The Auction details did not Match")
      setData({
        "email": "adminreact@gmail.com",
        "password": "1234567890",
      })
    }
  }
  return (
    <Fragment>
      <div className="page_content">
        <div className="">
          <Row>

            <Col lg={4} className="d-block mx-auto">

              <div className="text-center">
                <img
                  src={Imagesdata("logo")}
                  className="header-brand-img"
                  alt=""
                />
              </div>
              <div className="container-login100 ">

                <div className="wrap-login100 px-6 py-3">
                  <div className="d-block my-auto">

                    <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                      <Nav variant="pills" className="justify-content-center authentication-tabs my-5">
                        <Nav.Item>
                          <Nav.Link eventKey="react"><img src={Imagesdata('react')} className="br-5" alt='logo2' /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="firebase"> <img src={Imagesdata('firebase')} className="br-5" alt='logo1' /></Nav.Link>
                        </Nav.Item>

                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="react">
                          <form className="login100-form validate-form p-3">
                            <span className="login100-form-title">Login</span>
                            <div className="wrap-input100 validate-input">
                              <input
                                className="input100"
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={changeHandler}
                              />
                              <span className="focus-input100"></span>
                              <span className="symbol-input100">
                                <i className="zmdi zmdi-email" aria-hidden="true"></i>
                              </span>
                            </div>
                            <div className="wrap-input100 validate-input">
                              <input
                                className="input100"
                                onClick={() => setpasswordshow(!passwordshow)}
                                type={(passwordshow) ? 'text' : "password"} name="password" placeholder="Password" value={password}
                                onChange={changeHandler} required
                              />
                              <span className="focus-input100"></span>
                              <span className="symbol-input100" >
                                <i className="zmdi zmdi-lock" aria-hidden="true"></i>

                              </span>
                            </div>
                            <div className="text-end pt-1">
                              <p className="mb-0">
                                <Link
                                  to={`${import.meta.env.BASE_URL}custompages/forgotPassword/`}
                                  className="text-primary ms-1"
                                >
                                  Forgot Password?
                                </Link>
                              </p>
                            </div>
                            <div className="container-login100-form-btn">
                              <Link onClick={Login1}
                                to={`${import.meta.env.BASE_URL}academics/`}
                                className="login100-form-btn btn-primary"
                              >
                                Login
                              </Link>
                            </div>
                            <div className="text-center pt-3">
                              <p className="text-dark mb-0">
                                Not a member?
                                <Link
                                  to={`${import.meta.env.BASE_URL}firebaseauth/signup/`}
                                  className="text-primary ms-1"
                                >
                                  Sign Up
                                </Link>
                              </p>
                            </div>
                          </form>
                          <Card.Footer>
                            <div className="d-flex justify-content-center my-3">
                              <Link to="#" className="social-login  text-center me-4">
                                <i className="fa fa-google"></i>
                              </Link>
                              <Link to="#" className="social-login  text-center me-4">
                                <i className="fa fa-facebook"></i>
                              </Link>
                              <Link to="#" className="social-login  text-center">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </div>
                          </Card.Footer>
                        </Tab.Pane>
                        <Tab.Pane eventKey="firebase">
                          <form className="login100-form validate-form p-3">
                            <span className="login100-form-title">Login</span>
                            {err && <Alert variant="danger">{err}</Alert>}
                            <div className="wrap-input100 validate-input">
                              <input
                                className="input100"
                                type="text"
                                name="email"
                                placeholder="Email" value={email}
                                onChange={changeHandler} required
                              />
                              <span className="focus-input100"></span>
                              <span className="symbol-input100">
                                <i className="zmdi zmdi-email" aria-hidden="true" ></i>
                              </span>
                            </div>
                            <div className="wrap-input100 validate-input">
                              <input
                                className="input100" type={(passwordshow) ? 'text' : "password"} name="password" placeholder="Password" value={password}
                                onChange={changeHandler} required
                              />
                              <span className="focus-input100"></span>
                              <span className="symbol-input100">
                                <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                              </span>
                            </div>
                            <div className="text-end pt-1">
                              <p className="mb-0">
                                <Link
                                  to={`${import.meta.env.BASE_URL}custompages/forgotPassword/`}
                                  className="text-primary ms-1"
                                >
                                  Forgot Password?
                                </Link>
                              </p>
                            </div>
                            <div className="container-login100-form-btn">
                              <Link onClick={Login}
                                to={`${import.meta.env.BASE_URL}academics/`}
                                className="login100-form-btn btn-primary"
                              >
                                Login
                              </Link>
                            </div>
                            <div className="text-center pt-3">
                              <p className="text-dark mb-0">
                                Not a member?
                                <Link
                                  to={`${import.meta.env.BASE_URL}firebaseauth/signup/`}
                                  className="text-primary ms-1"
                                >
                                  Sign Up
                                </Link>
                              </p>
                            </div>
                          </form>
                          <Card.Footer>
                            <div className="d-flex justify-content-center my-3">
                              <Link to="#" className="social-login  text-center me-4">
                                <i className="fa fa-google"></i>
                              </Link>
                              <Link to="#" className="social-login  text-center me-4">
                                <i className="fa fa-facebook"></i>
                              </Link>
                              <Link to="#" className="social-login  text-center">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </div>
                          </Card.Footer>


                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  )
}

export default Authlogin
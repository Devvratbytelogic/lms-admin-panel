import React, {useState, useEffect} from "react";
import { Tabs, Tab, Breadcrumb, Row, Col, Card, FormGroup, InputGroup, Form, FormControl,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Imagesdata } from "../../../../commondata/commonimages";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import {optionCounteryout} from '../../../../commondata/commondata';
import { connect } from 'react-redux';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";

 function Checkout({ local_varaiable }) {
  //Counrtcheckout
  const [value, setvalue] = useState("");
  const handleOnchange = () => {
    setvalue(value);
  };

  const [FiltercartData, setCartData] = useState([]);
  const [Price, setPrice] = useState("$4360");
  
  let checkOutData = [
    {
      id: 1,
      preview: Imagesdata("pngs9"),
      heading: 'Bracelets',
      price1: '$438'
    },
    {
      id: 2,
      preview: Imagesdata("pngs1"),
      heading: 'Cup',
      price1: '$765'
    },
    {
      id: 3,
      preview: Imagesdata("pngs6"),
      heading: 'Goggles',
      price1: '$543'
    },
  ]
  useEffect(() => {
    console.log("helloo from header");
    
    if (local_varaiable == undefined) {

      setCartData(checkOutData)
      FiltercartData.filter((ele) => {
        setPrice(Number(ele.price1) + Price);
      })
    }
    else if (local_varaiable.length == 0) {

      setCartData(checkOutData)
      FiltercartData.filter((ele) => {
        setPrice(Number(ele.price1) + Price);
      })
    }
    else {
      console.log(local_varaiable);
      setCartData(local_varaiable)
      local_varaiable.filter((ele) => {
        setPrice(ele.price1);
      })
    }
  }, [local_varaiable]);
  return (
    <div>
             <PageHeader titles="Checkout" active="Checkout" items={['Ecommerce']} />


      <Row>
        <Col xl={8} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Billing Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6} md={6}>
                  <FormGroup>
                    <Form.Label>
                      First Name <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </FormGroup>
                </Col>
                <Col sm={6} md={6}>
                  <FormGroup>
                    <Form.Label>
                      Last Name <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Form.Label>
                      Company Name <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Company name"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Form.Label>
                      Email address <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Form.Label>
                      Country <span className="text-red">*</span>
                    </Form.Label>
                    <MultiSelect name="beast"  className=" farm" options={optionCounteryout} onChange={handleOnchange}  placeholder="--Select--" singleSelect="true"/>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Form.Label>
                      Address <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="Home Address"/>
                  </FormGroup>
                </Col>
                <Col sm={6} md={6}>
                  <FormGroup>
                    <Form.Label>
                      City <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </FormGroup>
                </Col>
                <Col sm={6} md={6}>
                  <FormGroup>
                    <Form.Label>
                      Postal Code <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="ZIP Code"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Payment Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="card-pay">
                <Tabs defaultActiveKey="tab20" id="checkout" className="mb-3 tabs-menu nav">
                  <Tab eventKey="tab20" title="CreditCard" className="">
                    <div className="tab-pane active show" id="tab20">
                      <div
                        className="bg-danger-transparent-2 text-danger px-4 py-2 br-3 mb-4"
                        role="alert"
                      >
                        Please Enter Valid Details
                      </div>
                      <FormGroup>
                        <Form.Label>Card Holder Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Form.Label>Card number</Form.Label>
                        <InputGroup>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search for..."
                          />
                          <span className="input-group-text btn btn-success shadow-none">
                            <i className="fa fa-cc-visa"></i> &nbsp;
                            <i className="fa fa-cc-amex"></i> &nbsp;
                            <i className="fa fa-cc-mastercard"></i>
                          </span>
                        </InputGroup>
                      </FormGroup>
                      <Row>
                        <Col sm={8}>
                          <FormGroup>
                            <Form.Label>Expiration</Form.Label>
                            <InputGroup>
                              <FormControl
                                type="number"
                                className="form-control"
                                placeholder="MM"
                                name="Month"
                              />
                              <FormControl
                                type="number"
                                className="form-control"
                                placeholder="YY"
                                name="Year"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup>
                            <Form.Label>
                              CVV <i className="fa fa-question-circle"></i>
                            </Form.Label>
                            <FormControl
                              type="number"
                              className="form-control"
                            
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Link to="#" className="btn btn-lg btn-primary mt-2">
                        Confirm
                      </Link>
                    </div>
                  </Tab>
                  <Tab eventKey="tab21" title=" Paypal">
                    <div className="tab-pane" id="tab21">
                      <p>Paypal is easiest way to pay online</p>
                      <p>
                        <Link to="#" className="btn btn-primary">
                          <i className="fa fa-paypal"></i> Log in my Paypal
                        </Link>
                      </p>
                      <p className="mb-0">
                        <strong>Note:</strong> Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="tab22" title="Bank Transfer">
                    <div className="tab-pane" id="tab22">
                      <p>Bank account details</p>
                      <dl className="card-text">
                        <dt>BANK: </dt>
                        <dd> THE UNION BANK 0456</dd>
                      </dl>
                      <dl className="card-text">
                        <dt>Account Number: </dt>
                        <dd> 67542897653214</dd>
                      </dl>
                      <dl className="card-text">
                        <dt>IBAN: </dt>
                        <dd>543218769</dd>
                      </dl>
                      <p className="mb-0">
                        <strong>Note:</strong> Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt.
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card className="cart">
            <Card.Header>
              <Card.Title as="h3">Your Order</Card.Title>
            </Card.Header>
            <Card.Body>
            {FiltercartData.map((idx) => (
              <div key={Math.random()}>
              <div className="d-md-flex">
                <div className="d-flex">
                  <img
                    className="img-fluid avatar-xl border p-0 br-7 mb-3"
                    src={idx.preview}
                    alt="img"
                  />

                  <div className="ms-3 mt-2">
                    <h4 className="mb-1 fw-semibold fs-14">
                    <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productdetails/`}>{idx.heading}</Link>
                    </h4>
                    <div className="mb-2 text-warning fs-14">
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star-half-o"></i>
                      <i className="me-1 fa fa-star-o"></i>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                  <span className="me-4 my-auto fs-16 fw-semibold">{idx.price}</span>
                </div>
                </div>
              </div>  
              </div>
            ))}
              <table className="table mt-5">
                <tbody>
                  <tr>
                    <td className="border-top-0">Sub Total</td>
                    <td className="text-end fw-bold border-top-0">$4,360</td>
                  </tr>
                  <tr>
                    <td className="border-top-0">Discount</td>
                    <td className="text-end fw-bold border-top-0">5%</td>
                  </tr>
                  <tr>
                    <td className="border-top-0">Shipping</td>
                    <td className="text-end fw-bold border-top-0">Free</td>
                  </tr>
                  <tr>
                    <td className="fs-20 fw-bold border-top-0">Total</td>
                    <td className="text-end fs-20 fw-bold border-top-0">
                      $3,976
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <Card.Footer className="text-end">
              <Link to="#" className="btn btn-primary">
                Place Order
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps)(Checkout);

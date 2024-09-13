import React, {useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import {Datacard} from '../../../../commondata/commondata';
import { Row, Card, Col, Form, FormGroup, InputGroup, FormControl, Table, Breadcrumb, OverlayTrigger, Tooltip, Button} from "react-bootstrap";
import { connect } from 'react-redux';
import { AddToCart, ProductReduxData } from '../../../../redux/action';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";

const ShoppingCarts = ({ local_varaiable}) => { 

  const [FiltershopingData, sethopingData] = useState([])
	const [Price, setPrice] = useState(0)
  let containerRef = useRef(null);

  useEffect(() => {
    
		if (local_varaiable == undefined) {
			sethopingData(Datacard)
			Datacard.filter((ele) => {
				setPrice((ele.newprice) + Price);
			})
		}
		else if (local_varaiable.length == 0) {
			sethopingData(Datacard)
			Datacard.filter((ele) => {
				setPrice((ele.newprice) + Price);
			})
		}
		else {
			sethopingData(local_varaiable)
			local_varaiable.filter((ele)  => {
				setPrice((ele.newprice) + Price);
			})
		}

	}, [local_varaiable])
  
  //Counting
  function dec(el) {
    let unit = el.currentTarget.parentElement.querySelector("input").value;

    if ((unit) > 0) {
      el.currentTarget.parentElement.querySelector("input").value--;
    }
  }
  function inc(el) {
    let unit1 = el.currentTarget.parentElement.querySelector("input").value;

    if ((unit1) < 10) {
      el.currentTarget.parentElement.querySelector("input").value++;
    }
  }
  return (
    <div>
             <PageHeader titles="ShoppingCart" active="ShoppingCart" items={['Ecommerce']} />


      <Row>
        <Col xl={8} md={12}>
          <Card className="cart">
            <Card.Header>
              <Card.Title as="h3">Shopping Cart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
              <Table className="table table-bordered table-vcenter text-nowrap mb-0 border-top">
      <thead>
        <tr>
          <th className="w-5">PRODUCT</th>
          <th>TITLE</th>
          <th>PRICE</th>
          <th className="w-15">QUANTITY</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
      {FiltershopingData !== "" ? FiltershopingData.map((idx) => (
      <tr key={Math.random()}  className="border-bottom">
            <td>
              <img src={idx.PREVIEW} className="cart-img" alt="" />
            </td>
            <td>{idx.TITLE}</td>
            <td className="fw-bold">{idx.PRICE} </td>
            <td >
              <div className="input-group input-indec">
                <Button variant="" className="counter-minus btn btn-default" onClick={dec}>
                  -
                </Button>
                <input
                  type="text"
                  defaultValue="2"
                  className="form-control text-center qty"
                />
                <Button variant="" className="counter-plus btn btn-default" onClick={inc}>
                  +
                </Button>
              </div>
            </td>
            <td ref={containerRef} > 
              <div className="button-list">
              <OverlayTrigger placement="top" overlay={<Tooltip >Save for Wishlist</Tooltip>}>
              <i
                  className="btn btn-square btn-danger-light me-1"
                  title="Save for Wishlist"
                >
              <i className="icon icon-heart  fs-13 mt-3"></i>
              </i>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip >Remove</Tooltip>} onClick={() => { handleRemove(idx.id) }}>
                <i
                  className="btn btn-square btn-info-light me-1"
                  title="Remove"
                >
                  <i className="icon icon-trash fs-13"></i>
                </i>
                </OverlayTrigger>
              </div>
            </td>
          </tr>
      )) :<tr></tr> }
      </tbody>
    </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Have coupon?</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <FormGroup>
                  <InputGroup>
                    <FormControl
                      type="text"
                      className="form-control coupon"
                      placeholder="Coupon code"
                    />
                    <span className="input-group-btn">
                      <Button variant="" className="btn btn-primary btn-apply coupon" onClick={() => { sethopingData }}>
                        Apply
                      </Button>
                    </span>
                  </InputGroup>
                </FormGroup>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Price Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table className="border-top-0">
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
              </Table>
            </Card.Body>
            <Card.Footer>
              <div className="step-footer btn-list">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/e-commerce/shop/`}
                  className="btn btn-primary me-2 mb-1"
                >
                  <i className="fa fa-arrow-left me-1"></i>Continue Shopping
                </Link>
                <Link
                  to={`${import.meta.env.BASE_URL}pages/e-commerce/checkout/`}
                  className="btn btn-success me-2 mb-1 float-sm-end"
                >
                  Check out<i className="fa fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => ({
	local_varaiable: state
})
export default  connect(mapStateToProps, { AddToCart, ProductReduxData })(ShoppingCarts);
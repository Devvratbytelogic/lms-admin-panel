import React,{useState} from "react";
import { Link } from "react-router-dom";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { Pagination, Row, Card, FormGroup, InputGroup, FormControl, Form, Breadcrumb,Col, Button,} from "react-bootstrap";
import {Optioncategory,Optioncategory1,Optioncategory2,Optioncategory3} from '../../../../commondata/commondata';
import { AddToCart } from "../../../../redux/action";
import {ItemData } from '../../../../commondata/redux'
import { connect } from 'react-redux';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";

 function Shop({  AddToCart }) {

  const [allData, setAllData] = React.useState(ItemData)

  let allElement2 ;

  // let myfunction = (InputData) => {
  //   let allElement
  //   for (allElement of ItemData) {
  //     if (allElement.TITLE[0] == " ") {
  //       allElement.TITLE = allElement.TITLE.trim()
  //     }
  //     if (allElement.TITLE.toLowerCase().includes(InputData.toLowerCase())) {
  //       if (allElement.TITLE.toLowerCase().startsWith(InputData.toLowerCase())) {
  //         allElement2.push(allElement);
  //       }
  //     }

  //   }
  //   setAllData(allElement2);
  // };
  //Category
  const [value, setvalue] = useState("");
  const handleOnchange = () => {
    setvalue(value);
  };
  //Brand
  const [value1, setvalue1] = useState("");
  const handleOnchange1 = () => {
    setvalue1(value1);
  };
  //Type
  const [value2, setvalue2] = useState("");
  const handleOnchange2 = () => {
    setvalue2(value2);
  };

  //Color
  const [value3, setvalue3] = useState("");
  const handleOnchange3 = () => {
    setvalue3(value3);
  };
  return (
    <div>
             <PageHeader titles="Shop" active="Shop" items={['Ecommerce']} />


      <Row className="row-cards">
        <Col xl={3} lg={4}>
          <Row>
            <Col md={12} lg={12}>
              <form className="shop__filter card">
                <Card.Header>
                  <Card.Title as="h3">Colors</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row className="gutters-xs">
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="azure"
                          className="colorinput-input"
                          defaultChecked="checked"
                        />
                        <span className="colorinput-color bg-azure"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="indigo"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-indigo"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="purple"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-purple"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="pink"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-pink"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="red"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-red"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="orange"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-orange"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="yellow"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-yellow"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="lime"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-lime"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="green"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-green"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="teal"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-teal"></span>
                      </label>
                    </div>
                  </Row>
                </Card.Body>
              </form>
              <Card>
                <Card.Header>
                  <Card.Title> Categories &amp; Fliters</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-1"
                      defaultChecked="checked"
                    />
                    <label
                      htmlFor="checkbox-1"
                      className="custom-control-label"
                    >
                      Mens
                    </label>
                  </div>
                  <div className="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-2"
                    />
                    <label
                      htmlFor="checkbox-2"
                      className="custom-control-label"
                    >
                      Womens
                    </label>
                  </div>
                  <div className="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-3"
                    />
                    <label
                      htmlFor="checkbox-3"
                      className="custom-control-label"
                    >
                      Kids
                    </label>
                  </div>
                  <div className="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-4"
                    />
                    <label
                      htmlFor="checkbox-4"
                      className="custom-control-label"
                    >
                      Others
                    </label>
                  </div>
                  <FormGroup className="mt-3">
                    <Form.Label className="form-label">Category</Form.Label>
                    <MultiSelect
      name="beast"
      // id="select-beasts"
      
      options={Optioncategory}
      onChange={handleOnchange}
     singleSelect="true"
    />
                  </FormGroup>
                  <FormGroup>
                    <Form.Label className="form-label">Brand</Form.Label>
                    <MultiSelect
      id="select-beasts"
      name="beast"
      
      options={Optioncategory1}
      onChange={handleOnchange1}
    />
                  </FormGroup>
                  <FormGroup>
                    <Form.Label className="form-label">Type</Form.Label>
                    <MultiSelect
      id="select-beasts"
      name="beast"
      className=" farm"
      onChange={handleOnchange2}
     singleSelect="true"
      options={Optioncategory2}
    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <Form.Label className="form-label">Color</Form.Label>
                    <MultiSelect
      id="select-beasts"
      name="beast"
      className=" farm"
      onChange={handleOnchange3}
     singleSelect="true"
      options={Optioncategory3}
    />
                  </FormGroup>
                  <Link className="btn btn-primary me-2  mb-1 mt-1" to="#">
                    Apply Filter
                  </Link>
                  <Link className="btn btn-danger me-2 mb-1 mt-1" to="#">
                    Search Now
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={9} lg={8}>
          <Card>
            <Row className="card-body p-2">
              <Col sm={12} className="p-0">
                <InputGroup>
                  <FormControl  
                  // onChange={(ele) => { myfunction(ele.target.value) }} 
                    type="text"
                    className=""
                    placeholder="Search ..."
                  />
                  <Button className="input-group-text btn btn-primary">
                    Search
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Card>
          <Row>
          {allData.map((idx) => (
        <div className="col-md-6 col-xl-4" key={Math.random()}>
          <div className="card item-card">
            <div className="ribbone">
              <div className={` ${idx.RIBBON}`}>
                <span>{idx.NEW}</span>
              </div>
            </div>
            <div className="product-grid6 card-body ">
              <div className="product-image6 ">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`}
                >
                  <img src={idx.PREVIEW} className="img-fluid" alt="" />
                </Link>
                <div className="product-content text-center">
                  <div className="mb-2 text-warning">
                    <i className="me-1 fa fa-star"></i>
                    <i className="me-1 fa fa-star"></i>
                    <i className="me-1 fa fa-star"></i>
                    <i className="me-1 fa fa-star"></i>
                    <i className="me-1 fa fa-star"></i>
                  </div>
                  <h4 className="title">{idx.TITLE}</h4>
                  <div className="price">
                    {idx.PRICE}
                    <span className="ms-4">{idx.PRICES}</span>
                  </div>
                </div>
                <ul className="icons">
                  <li>
                    <Link className="btn"
                      to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`}
                      data-tip="Quick View"
                    >
                      <i className="fe fe-eye "></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn"
                      to={`${import.meta.env.BASE_URL}pages/e-commerce/wishlist/`}
                      data-tip="Add to Wishlist"
                    >
                      <i className="fa fa-heart-o"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn"
                      to={`${import.meta.env.BASE_URL}pages/e-commerce/shoppingCart/`} onClick={() => { AddToCart(idx.id) }}
                      data-tip="Add to Cart"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
          </Row>
          <div className="mb-5">
            <div className="float-end">
              <Pagination>
                <Pagination.Prev disabled>Prev </Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Next>Next </Pagination.Next>
              </Pagination>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => ({
  local_varaiable: state
})
export default connect(mapStateToProps, { AddToCart })(Shop);
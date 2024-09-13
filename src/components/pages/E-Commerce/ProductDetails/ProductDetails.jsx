import React, {useState, useEffect} from "react";
import { Tabs, Tab, Breadcrumb, Row, Col, Card, FormGroup, Form, Carousel} from "react-bootstrap";
import { Link , useParams} from "react-router-dom";
import {Carouseldata,Optioncategorydetaildd,Optioncategorydetail,Optioncategorydetails,Optioncategorydetaild} from '../../../../commondata/commondata';
import { Imagesdata } from "../../../../commondata/commonimages";
import MultiSelect from "react-multiple-select-dropdown-lite";
import { AddToCart } from "../../../../redux/action";
import { connect } from 'react-redux';
import shirt1 from '../../../../assets/images/pngs/7.png';
import shirt2 from '../../../../assets/images/pngs/8.png';
import shirt3 from '../../../../assets/images/pngs/6.png';
import shirt4 from '../../../../assets/images/pngs/5.png';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";
 function ProductDetails({ AddToCart }) {
  

  const [allData, setAllData] = useState(Carouseldata)
  let { id } = useParams();

  const [defaultData, setdefaultData] = useState();

  useEffect(() => {
    if (id !== undefined) {
      let data = ItemData.filter((ele) => {
        return ele.id === id;
      });
      setdefaultData(data[0]);
    } else {
      setdefaultData({
        id: Math.random(),
        preview: shirt1,
        imges:[
          { img: shirt1 },
          { img: shirt2 },
          { img: shirt3 },
          { img: shirt4 },
        ],
        heading: "Trending Half Hands Tshirt (Best Fabric Premium made T-shirt for Casual wear.)",
        price2: "$599",
        price1: "$299 USD/",
        status: 'In Stock',
        bg: 'success'
      }); 
    }
  }, [id]);

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
             <PageHeader titles="Product Details" active="Product Details" items={['Ecommerce']} />


      <Row>
        <Col lg={8} md={12}>
          <Card className="productdesc">
            <Card.Body>
              <div className="productdec text-center">
                <div className="bg-light-gray p-6 text-center br-5">
                  <img
                    alt="Product"
                    src={Imagesdata("pngs31")}
                  />
                </div>
              </div>
              <div className="text-center mt-5 pb-5 border-bottom">
                <Link
                  to={`${import.meta.env.BASE_URL}pages/e-commerce/shoppingCart/`}
                  className="btn btn-primary me-2"
                >
                  <i className="ti-shopping-cart"> </i> Add to cart
                </Link>
                <Link to="#" className="btn btn-secondary me-2">
                  <i className="ti-shopping-cart"> </i> Buy Now
                </Link>
              </div>

              <div className="mt-4 mb-4">
                <h3>Lenovo Headset 330 Pentium Quad Core </h3>
                <h5 className="mb-3 mt-2">Description</h5>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized .
                </p>
              </div>
              <div className="panel panel-primary">
                <div className="tab-menu-heading border ">
                  <div className="tabs-menu ">
                    <Tabs
                      variant="info"
                      defaultActiveKey="Specification"
                      id="uncontrolled-tab-example"
                      className="nav panel-tabs "
                    >
                      <Tab
                        eventKey="Specification"
                        title="Specification"
                        className="me-2"
                      >
                        <div className="tab-pane active" id="tab1">
                          <h4 className="mb-5 mt-3">General</h4>
                          <ul className="list-unstyled mb-0">
                            <li className="row">
                              <Col sm={3} lg={4} xl={3} className="text-muted ">
                                Brand
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                CASAMOTION
                              </Col>
                            </li>
                            <li className="row">
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Model Number
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                AHLF016
                              </Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Model Name
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                casamotion
                              </Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Suitable For
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                Table, Floor
                              </Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Material
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                Wood
                              </Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Color
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                Brown
                              </Col>
                            </li>
                          </ul>
                        </div>
                      </Tab>
                      <Tab
                        eventKey="Dimensions"
                        title="Dimensions"
                        className=" me-2"
                      >
                        <div className="tab-pane" id="tab2">
                          <ul className="list-unstyled mb-0">
                            <li className="row" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Width
                              </Col>
                              <Col sm={3}>6.1 inch</Col>
                            </li>
                            <li className="row" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Height
                              </Col>
                              <Col sm={3}>24 inch</Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Depth
                              </Col>
                              <Col sm={3}>6.1 inch</Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Other Dimensions
                              </Col>
                              <Col sm={3}>15.5*15.5*24CM</Col>
                            </li>
                          </ul>
                        </div>
                      </Tab>
                    
                      <Tab eventKey="Reviews" title="Reviews " className="me-2">
                     
                        <div className="tab-pane" id="tab3">
                          <div className="media mb-5">
                            <div className=" me-3">
                              <Link to="#">
                                <img
                                  className="media-object rounded-circle thumb-sm"
                                  alt="64x64"
                                  src={Imagesdata("users5")}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 mb-0">Gavin Murray</h5>
                              <div className="text-warning mb-0">
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star-o"></i>
                              </div>
                              <p className="font-13 text-muted mb-0">
                                Good Looking.........
                              </p>
                              <Link to="#">
                                <span className="badge btn-custom rounded-pill me-2">
                                  Reply
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="media mb-5">
                            <div className="me-3">
                              <Link to="#">
                                <img
                                  className="media-object rounded-circle thumb-sm"
                                  alt="64x64"
                                  src={Imagesdata("users15")}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 mb-0">Paul Smith</h5>
                              <div className="text-warning mb-0">
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star-o"></i>
                                <i className="me-1 fa fa-star-o"></i>
                              </div>
                              <p className="font-13 text-muted mb-0">
                                Very nice ! On the other hand, we denounce with
                                righteous indignation and dislike men who are so
                                beguiled and demoralized by the
                              </p>
                              <Link to="#">
                                <span className="badge btn-custom rounded-pill me-2" >
                                  Reply
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h5 className="mb-3">Add Review</h5>
                          <Form
                            className="form-horizontal  m-t-20"
                            action="index.html"
                          >
                            <FormGroup>
                              <Col xs={12}>
                                <Form.Control
                                  className="form-control mb-2"
                                  type="text"
                                 
                                  placeholder="Username*"
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Col xs={12}>
                                <Form.Control
                                  className="form-control mb-2"
                                  type="email"
                                 
                                  placeholder="Email*"
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Col xs={12}>
                                <textarea
                                  className="form-control mb-2"
                                  rows="5"
                                  defaultValue="Your Review*"
                                ></textarea>
                              </Col>
                            </FormGroup>
                            <div className="">
                              <Link
                                to="#"
                                className="btn btn-primary btn-rounded  waves-effect waves-light"
                              >
                                Submit
                              </Link>
                            </div>
                          </Form>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12}>
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
                <label htmlFor="checkbox-1" className="custom-control-label">
                  Mens
                </label>
              </div>
              <div className="custom-checkbox custom-control">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox-2"
                />
                <label htmlFor="checkbox-2" className="custom-control-label">
                  Womens
                </label>
              </div>
              <div className="custom-checkbox custom-control">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox-3"
                />
                <label htmlFor="checkbox-3" className="custom-control-label">
                  Kids
                </label>
              </div>
              <div className="custom-checkbox custom-control">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox-4"
                />
                <label htmlFor="checkbox-4" className="custom-control-label">
                  Others
                </label>
              </div>
              <div className="form-group mt-3">
                <label className="form-label">Category</label>
                <MultiSelect name="beast" id="select-beasts" className=" farm" options={Optioncategorydetail} onChange={handleOnchange}  placeholder="--Select--" singleSelect="true"/>
              </div>
              <FormGroup>
                <label className="form-label">Brand</label>
                <MultiSelect id="select-beasts" name="beast" className=" farm" options={Optioncategorydetails} onChange={handleOnchange1}  placeholder="--Select--"singleSelect="true"/>
              </FormGroup>
              <FormGroup>
                <label className="form-label">Type</label>
                <MultiSelect id="select-beasts" name="beast" className=" farm" onChange={handleOnchange2}  placeholder="--Select--" options={Optioncategorydetaild} singleSelect="true"/>
              </FormGroup>
              <FormGroup>
                <label className="form-label">Color</label>
                <MultiSelect id="select-beasts" name="beast" className=" farm" onChange={handleOnchange3}  placeholder="--Select--" options={Optioncategorydetaildd} singleSelect="true"/>
              </FormGroup>
              <Link className="btn btn-primary me-2 my-4" to="#">
                Apply Filter
              </Link>
              <Link className="btn btn-danger me-2 my-4" to="#">
                Search Now
              </Link>
            </Card.Body>
          </Card>
          <Card className="productdesc-1">
            <Card.Body className="bg_gray">
              <div id="carouselExampleControls" className="carousel slide  p-2 border br-5">
      <Carousel indicators={false}>
        {Carouseldata.map((playerData, k) => (
          <Carousel.Item key={k}>
            <img className="pro_img br-5" alt="Product" src={playerData.IMG} />
            <div className="carouselproduct mt-4 text-center pb-4">
              <h5 className="">
                <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/shoppingcart/`}>
                  {playerData.TITLE}
                </Link>
              </h5>
              <ul className="product_price list-unstyled">
                <li className="old_price">{playerData.PRICE}</li>
                <li className="new_price">{playerData.PRICE2}</li>
              </ul>
              <div className="mb-3 mt-2 text-warning">
                <i className=" me-1 fa fa-star"></i>
                <i className="me-1 fa fa-star"></i>
                <i className="me-1 fa fa-star"></i>
                <i className="me-1 fa fa-star-o"></i>
                <i className="me-1 fa fa-star-o"></i>
              </div>
              <Link
                to={`${import.meta.env.BASE_URL}pages/e-commerce/shoppingCart/`} onClick={() => { AddToCart(idx.id) }}
                className={`btn btn-${playerData.BUY}`}
              >
                <i className="ti-shopping-cart"></i> Buy Now
              </Link>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { AddToCart })(ProductDetails);
import React, {useState} from "react";
import { Breadcrumb, Col, Pagination, Row, Card } from "react-bootstrap";
import {Datawishlist } from '../../../../commondata/commondata';
import { Link } from "react-router-dom";
import { AddToCart, ProductReduxData } from '../../../../redux/action';
import { connect } from 'react-redux';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";

 function Wishlist({ AddToCart}) {

  //Delete Functionality
  
  const [show, setshow] = useState(Datawishlist);
  function handleRemove(id) {
		const RemoveData = show.filter((idx) => idx.id !== id);
		setshow(RemoveData);
	}
  return (
    <div>
             <PageHeader titles="Wishlist" active="Wishlist" items={['Ecommerce']} />


      <Row>
        <Col xl={12} md={12}>
          <Card className="cart">
            <Card.Header>
              <Card.Title as="h3">My Wishlist</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive mb-sm-0 mb-3">
              <table className="table table-bordered border table-vcenter text-nowrap">
      <thead>
        <tr className="border-top">
          <th className="w-15">Product</th>
          <th className="w-5">Title</th>
          <th className="w-15">Price</th>
          <th className="w-10">Status</th>
          <th className="w-10">Action</th>
        </tr>
      </thead>

        <tbody>
        {show.map((idx) => (
          <tr  key={Math.random()}>
            <td><img src={idx.IMG} alt="" className="cart-img"/></td>
            <td>{idx.TITLE}</td>
            <td className="fw-bold">{idx.PRICE}</td>
            <td><span className={`badge bg-${idx.bgColor}`}>{idx.STATUS}</span></td>
            <td>
              <Link to={`${import.meta.env.BASE_URL}pages/e-commerce/productDetails/`} className="btn btn-primary-light btn-square  br-50 m-1" title="">
                <i className="fe fe-eye fs-13"></i>
              </Link>
              <Link  onClick={() => { AddToCart(idx.id) }} to={`${import.meta.env.BASE_URL}pages/e-commerce/shoppingCart/`} className="btn btn-info-light btn-square  br-50 m-1"title="">
                <i className="fe fe-shopping-cart fs-13"></i>
              </Link>
              <Link to="#" onClick={() => { handleRemove(idx.id) }} className="btn btn-danger-light btn-square  br-50 m-1" title=""> <i className="fe fe-trash fs-13"></i></Link>
            </td>
          </tr>
            ))}
        </tbody>

    </table>
              </div>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  local_varaiable: state
})
export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);

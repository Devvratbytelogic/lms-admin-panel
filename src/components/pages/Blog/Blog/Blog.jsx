import React from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Imagesdata } from "../../../../commondata/commonimages";
import {blog,blog1} from '../../../../commondata/commondata';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";

export default function Blog() {

  return (
    <div>
             <PageHeader titles="Blog" active="Blog" items={['Blog']} />

      <Row className="row-cards ">
        {blog.map((blogs)=>(
        <Col md={4} key={Math.random()}>
          <Card>
            <img className="card-img-top br-tr-7 br-tl-7" src={blogs.src1} alt="Card cap"
            />
            <Card.Header>
              <Card.Title as="h5">Blog title </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`${import.meta.env.BASE_URL}pages/Blog/blogdetails/`} className={`float-end text-${blogs.color}`}>
                Read more <i className="fa fa-angle-double-right"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        ))}
        {blog1.map((blog)=>(
        <Col md={4} key={Math.random()}>
          <Card>
            <img className="card-img-top br-tr-7 br-tl-7 " src={blog.src1} alt="Card cap"/>
            <Card.Header>
              <Card.Title as="h5">Blog title</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`${import.meta.env.BASE_URL}pages/Blog/blogdetails/`} className={`btn btn-${blog.color} btn-md`}>
                Read more
              </Link>
            </Card.Body>
          </Card>
        </Col>
        ))}
        <Col sm={6} xxl={3}>
          <Card>
            <Link to="#">
              <img
                className="card-img-top br-tr-7 br-tl-7"
                src={Imagesdata("media23")}
                alt="And this isn&#39;t my nose. This is a false one."
              />
            </Link>
            <Card.Body className="d-flex flex-column">
              <h4>
                <Link to="#">voluptatem quia voluptas.</Link>
              </h4>
              <div className="text-muted">
                To take a trivial example, which of us ever undertakes laborious
                physical exerciser , except to obtain some advantage from it...
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img className="avatar brround avatar-md me-3 cover-image" src={Imagesdata("media22")} alt=""/>
                <div>
                  <Link  to={`${import.meta.env.BASE_URL}/pages/profile/`}  className="text-default">
                    Megan Peters
                  </Link>
                  <small className="d-block text-muted">1 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-2">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xxl={3}>
          <Card>
            <Link to="#">
              <img
                className="card-img-top br-tr-7 br-tl-7"
                src={Imagesdata("media14")}
                alt="Well, I didn&#39;t vote for you."
              />
            </Link>
            <Card.Body className="d-flex flex-column">
              <h4>
                <Link to="#">voluptatem quia voluptas.</Link>
              </h4>
              <div className="text-muted">
                Who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces.
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar brround avatar-md me-3 cover-image"
                  src={Imagesdata("media15")}
                  alt=""
                />
                <div>
                  <Link
                    to={`${import.meta.env.BASE_URL}pages/profile/`}
                    className="text-default"
                  >
                    Anna Ogden
                  </Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xxl={3}>
          <Card>
            <Card.Body className="d-flex flex-column">
              <h4>
                <Link to="#">voluptatem quia voluptas</Link>
              </h4>
              <div className="text-muted">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque...
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar brround avatar-md me-3 cover-image"
                  src={Imagesdata("media14")}
                  alt=""
                />
                <div>
                  <Link
                    to={`${import.meta.env.BASE_URL}pages/profile/`}
                    className="text-default"
                  >
                    Carol Paige
                  </Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
            <Link to="#">
              <img
                className="card-img-top br-br-0 br-bl-0"
                src={Imagesdata("media15")}
                alt="How do you know she is a witch?"
              />
            </Link>
          </Card>
        </Col>
        <Col sm={6} xxl={3}>
          <Card>
            <Card.Body className="d-flex flex-column">
              <h4>
                <Link to="#">voluptatem quia voluptas..</Link>
              </h4>
              <div className="text-muted">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut ..
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar brround avatar-md me-3 cover-image"
                  src={Imagesdata("media12")}
                  alt=""
                />
                <div>
                  <Link
                    to={`${import.meta.env.BASE_URL}pages/profile/`}
                    className="text-default"
                  >
                    Fiona Hodges
                  </Link>
                  <small className="d-block text-muted">5 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-2">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
            <Link to="#">
              <img
                className="card-img-top br-br-0 br-bl-0"
                src={Imagesdata("media16")}
                alt="Shut up!"
              />
            </Link>
          </Card>
        </Col>
        <Col lg={12} xl={6}>
          <Card className="card-aside">
            <img
              to="#"
              className="card-aside-column br-bl-0 br-tl-0 cover-image"
              alt=""
              src={Imagesdata("media19")}
            />
            <Card.Body className="flex-column">
              <h4>
                <Link to="#">Generator on the Internet..</Link>
              </h4>
              <div className="text-muted">
                Excepteur sint occaecat cupidatat non proident, accusantium sunt
                in culpa qui officia deserunt mollit anim id est laborum....
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar  brround avatar-md me-3 cover-image"
                  alt=""
                  src={Imagesdata("users18")}
                />
                <div>
                  <Link
                    to={`${import.meta.env.BASE_URL}pages/profile/`}
                    className="text-default"
                  >
                    Anna Ogden
                  </Link>
                  <small className="d-block text-muted">1 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} xl={6}>
          <Card className="card-aside overflow-hidden">
            <Card.Body className="flex-column">
              <h4>
                <Link to="#" >Nihil molestiae consequatur.</Link>
              </h4>
              <div className="text-muted">
                Many desktop publishing packages and web page editors now use
                default model text, and a search for will uncover...
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar  brround avatar-md me-3 cover-image"
                  alt=""
                  src={Imagesdata("media12")}
                ></img>
                <div>
                  <Link
                    to={`${import.meta.env.BASE_URL}pages/profile/`}
                    className="text-default"
                  >
                    Irene Scott
                  </Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
            <img
              to="#"
              className="card-aside-column br-br-0 br-tr-0 cover-image"
              alt=""
              src={Imagesdata("media16")}
            ></img>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Row, Breadcrumb, Col, Card , Form} from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { Imagesdata } from "../../../../commondata/commonimages";
import {Categorys} from '../../../../commondata/commondata';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";
import SunEditor from 'suneditor-react';

export default function BlogPost() {
  
  return (
    <div>
             <PageHeader titles="Blog post" active="Blog post" items={['Pages']} />

        <Row>
          <Col xl={8}>
            <Card>
              <Card.Header>
                <Card.Title>Add New Post</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row className="mb-4">
                  <label className="col-md-3 form-label">Post Title :</label>
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Typing....."
                    />
                  </div>
                </Row>
                <Row className="mb-4">
                  <label className="col-md-3 form-label">Categories :</label>
                  <div className="">
                    <Categorys />
                  </div>
                </Row>
                <Row>
                  <label className="col-md-3 form-label mb-4">
                    Post Description :
                  </label>
                  <div className="mb-4">
                  <SunEditor />
                  </div>
                </Row>
                <FormGroup className="mb-0 file">
                  <label className="col-md-3 form-label mb-4">
                    File Upload :
                  </label>

              <Form.Label>Multiple files input Upload</Form.Label>
              <Form.Control type="file" id="formFileMultiple" multiple />

                </FormGroup>
              </Card.Body>
              <Card.Footer>
                <Link to="#" className="btn btn-primary">
                  Post
                </Link>
                <Link to="#" className="btn btn-default float-end">
                  Discard
                </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <Card.Header>
                <Card.Title>Recent Posts</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="d-flex overflow-visible blogimg">
                    <Link
                      to={`${import.meta.env.BASE_URL}pages/Blog/blogDetails/`}
                      className="card-aside-column br-5 cover-image  me-3"
                    >
                      <img
                        className=" br-5 "
                        src={Imagesdata("media19")}
                        alt=""
                      />
                    </Link>
                    <div className="ps-0 flex-column">
                      <span className="badge bg-danger me-1 mb-1 mt-2">
                        Lifestyle
                      </span>
                      <h4>
                        <Link
                          to={`${import.meta.env.BASE_URL}pages/Blog/blogDetails/`}
                        >
                          Generator on the Internet..
                        </Link>
                      </h4>
                      <div className="text-muted">
                        Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit
                        anim id est laborum....
                      </div>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5 blogimg">
                    <Link
                      to={`${import.meta.env.BASE_URL}pages/Blog/blogDetails/`}
                      className="card-aside-column br-5 cover-image  me-3"
                    >
                      <img
                        className=" br-5 "
                        src={Imagesdata("media22")}
                        alt=""
                      />
                    </Link>
                    <div className="ps-0 flex-column">
                      <span className="badge bg-primary me-1 mb-1 mt-2">
                        Business
                      </span>
                      <h4>
                        <Link
                          to={`${import.meta.env.BASE_URL}pages/Blog/blogDetails/`}
                        >
                          Voluptatem quia voluptas...
                        </Link>
                      </h4>
                      <div className="text-muted">
                        Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit
                        anim id est laborum....
                      </div>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5 blogimg">
                    <Link
                      to={`${import.meta.env.BASE_URL}pages/Blog/blogDetails/`}
                      className="card-aside-column br-5 cover-image me-3"
                    >
                      <img
                        className=" br-5 "
                        src={Imagesdata("media12")}
                        alt=""
                      />
                    </Link>
                    <div className="ps-0 flex-column">
                      <span className="badge bg-secondary me-1 mb-1 mt-2 ">
                        Travel
                      </span>
                      <h4>
                        <Link
                          to={`${import.meta.env.BASE_URL}pages/Blog/blogDetails/`}
                        >
                          Generator on the Internet..
                        </Link>
                      </h4>
                      <div className="text-muted">
                        Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit
                        anim id est laborum....
                      </div>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5 blogimg">
                    <Link
                      to={`${import.meta.env.BASE_URL}pages/Blog/blogDetails/`}
                      className="card-aside-column br-5 cover-image  me-3"
                    >
                      <img
                        className=" br-5 "
                        src={Imagesdata("media25")}
                        alt=""
                      />
                    </Link>
                    <div className="ps-0 flex-column">
                      <span className="badge bg-success me-1 mb-1 mt-2">
                        Meeting
                      </span>
                      <h4>
                        <Link
                          to={`${import.meta.env.BASE_URL}pages/Blog/blogDetails/`}
                        >
                          Voluptatem quia voluptas...
                        </Link>
                      </h4>
                      <div className="text-muted">
                        Excepteur sint occaecat cupidatat non proident,
                        accusantium sunt in culpa qui officia deserunt mollit
                        anim id est laborum....
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Professional Blog Writers</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="d-flex overflow-visible">
                    <img
                      className="avatar bradius avatar-xl me-3"
                      src={Imagesdata("users12")}
                      alt="avatar-img"
                    />
                    <div className="media-body valign-middle">
                      <Link
                        to={`${import.meta.env.BASE_URL}pages/profile/`}
                        className="fw-semibold text-dark"
                      >
                        John Paige
                      </Link>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available ...
                      </p>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5">
                    <img
                      className="avatar bradius avatar-xl me-3"
                      src={Imagesdata("users2")}
                      alt="avatar-img"
                    />
                    <div className="media-body valign-middle">
                      <Link
                        to={`${import.meta.env.BASE_URL}pages/profile/`}
                        className="fw-semibold text-dark"
                      >
                        Peter Hill
                      </Link>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available ...
                      </p>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5">
                    <img
                      className="avatar bradius avatar-xl me-3"
                      src={Imagesdata("users9")}
                      alt="avatar-img"
                    />
                    <div className="media-body valign-middle">
                      <Link
                        to={`${import.meta.env.BASE_URL}pages/profile/`}
                        className="fw-semibold text-dark"
                      >
                        Irene Harris
                      </Link>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available ...
                      </p>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5">
                    <img
                      className="avatar bradius avatar-xl me-3"
                      src={Imagesdata("users4")}
                      alt="avatar-img"
                    />
                    <div className="media-body valign-middle">
                      <Link
                        to={`${import.meta.env.BASE_URL}pages/profile`}
                        className="fw-semibold text-dark"
                      >
                        Harry Fisher
                      </Link>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available ...
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  );
}

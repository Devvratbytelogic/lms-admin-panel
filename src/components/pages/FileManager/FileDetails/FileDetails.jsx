import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {LightboxGalleryChat} from '../../../../commondata/gallerydata';
import { Col, Row, Table, Button, Breadcrumb,Card } from "react-bootstrap";
import { Imagesdata } from "../../../../commondata/commonimages";
import "yet-another-react-lightbox/styles.css";
import {relatedfiles} from '../../../../commondata/commondata';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";

export default function FileDetails() {
    //Related Files
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      autoplay: true,
      slidesToShow: 4,
      afterChange: function (index) {
          console.log(
              `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
      },
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  };
  return (
    <div>
             <PageHeader titles="File Details" active="File Details" items={['Pages']} />


      <Row className="row-sm">
        <Col xl={8} lg={12} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="p-3">
              <Link to="#">
                <img
                  src={Imagesdata("imgs3")}
                  alt="img"
                  className="br-5 w-100"
                />
              </Link>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0">Related Files</Card.Header>
            <Card.Body className="pt-0 h-100">
            <Slider {...settings}>
                                        {relatedfiles.map((relatedfile) => (
                                            <div className="item" key={Math.random()}>
                                                <Card className="overflow-hidden border p-0 mb-0 bg-white">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails/`}><img 
                                                        src={relatedfile.src1} alt="img"
                                                        height="124" className="w-100 " /></Link>
                                                    <Card.Footer className="card-footer">
                                                        <div className="d-flex flex-wrap justify-content-between">
                                                            <div>
                                                                <h5 className="mb-0 fw-semibold text-break">{relatedfile.class}</h5>
                                                            </div>
                                                            <div className="my-auto">
                                                                <span className="text-muted mb-0">{relatedfile.class1}</span>
                                                            </div>
                                                        </div>

                                                    </Card.Footer>
                                                </Card>
                                            </div>
                                        ))}
                                    </Slider>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <h5 className="mb-3">File details</h5>
              <div className="">
                <Row>
                  <Col xl={12}>
                    <div className="table-responsive">
                      <Table className="mb-1 table-bordered border text-nowrap">
                        <tbody>
                          <tr>
                            <th>File Name</th>
                            <td>image.jpg</td>
                          </tr>
                          <tr>
                            <th>Uploaded</th>
                            <td>10-10-2021</td>
                          </tr>
                          <tr>
                            <th>Size</th>
                            <td>25 MB</td>
                          </tr>
                          <tr>
                            <th>Dimensions</th>
                            <td>1000 x 350</td>
                          </tr>
                          <tr>
                            <th>Resolution Unit</th>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th>File Type</th>
                            <td>jpg</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="mt-5 text-center">
                      <Button
                        type="button"
                        className="btn btn-icon  btn-info-light me-2 bradius"
                        variant=""
                      >
                        <i className="fe fe-edit" />
                      </Button>
                      <Button
                        type="button"
                        variant=""
                        className="btn btn-icon  btn-danger-light me-2 bradius"
                      >
                        <i className="fe fe-trash" />
                      </Button>
                      <Button
                        type="button"
                        variant=""
                        className="btn btn-icon  btn-success-light me-2 bradius"
                      >
                        <i className="fe fe-download fs-14" />
                      </Button>
                      <Button
                        type="button"
                        variant=""
                        className="btn btn-icon  btn-warning-light bradius"
                      >
                        <i className="fe fe-share-2 fs-14" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="pb-0">
              <h5 className="mb-3">Recent Files</h5>
              <LightboxGalleryChat />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import { Row,  Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {files,fileattachment,filesdata} from '../../../../commondata/commondata';
import PageHeader from "../../../../layouts/layoutcomponents/pageheader";
export default function FileAttachments() {
  return (
    <div className="main-container container-fluid">
             <PageHeader titles="File Attachment" active="File Attachment" items={['Pages']} />
      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="pb-3">
              <Card.Title>Rounded File Attachment</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="tags">
            {files.map((file)=>(
            <div className="btn-group file-attach m-2" role="group" aria-label="Basic example" key={Math.random()}> 
            <Button type="button" className="btn  text-white" variant={file.color}>
              <i className={`mdi ${file.icon}`}></i>
               Image_file.jpg </Button>
             <Button type="button" className="btn btn-close  text-white" aria-label="Close" variant={file.color}> 
             <span aria-hidden="true">×</span>
              </Button> 
              </div>
            ))}
            </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="pb-3">
              <Card.Title>Radius File Attachment</Card.Title>
            </Card.Header>
            <Card.Body>
            <div className="tags">
            {files.map((file)=>(
            <div className="btn-group file-attach m-2" role="group" aria-label="Basic example" key={Math.random()}> 
            <Button type="button" className="btn btn-pill  text-white" variant={file.color}>
              <i className={`mdi ${file.icon}`}></i>
               Image_file.jpg </Button>
             <Button type="button" className="btn btn-close btn-pill text-white" aria-label="Close" variant={file.color}> 
             <span aria-hidden="true">×</span>
              </Button> 
              </div>
            ))}
            </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="pb-3">
              <Card.Title>Rounded With Transparent Background</Card.Title>
            </Card.Header>
            <Card.Body>
            <div className="tags">
            {files.map((file)=>(
            <div className="btn-group file-attach m-2" role="group" aria-label="Basic example" key={Math.random()}> 
            <Button type="button" className={`btn btn-outline-${file.color}  text-${file.color}`} variant="">
              <i className={`mdi ${file.icon}`}></i>
               Image_file.jpg </Button>
             <Button type="button" className={`btn btn-close btn-outline-${file.color}  text-white`} aria-label="Close" variant=""> 
             <span aria-hidden="true">×</span>
              </Button> 
              </div>
            ))}
            </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="pb-3">
              <Card.Title>Radius With Transparent Background</Card.Title>
            </Card.Header>
            <Card.Body>
            <div className="tags">
            {files.map((file)=>(
            <div className="btn-group file-attach m-2" role="group" aria-label="Basic example" key={Math.random()}> 
            <Button type="button" className={`btn btn-pill btn-outline-${file.color}  text-${file.color}`} variant="">
              <i className={`mdi ${file.icon}`}></i>
               Image_file.jpg </Button>
             <Button type="button" className={`btn btn-close btn-pill btn-outline-${file.color}  text-white`} aria-label="Close" variant=""> 
             <span aria-hidden="true">×</span>
              </Button> 
              </div>
            ))}
            </div>
            </Card.Body>
          </Card>
        </Col>

        <Row className="row-sm">
          <Col md={12} lg={6}>
            <Card className="custom-card">
              <Card.Header className="pb-3">
                <Card.Title>Rounded With Background Color</Card.Title>
              </Card.Header>
              <Card.Body>
              <div className="tags">
            {files.map((file)=>(
            <div className="btn-group file-attach m-2" role="group" aria-label="Basic example" key={Math.random()}> 
            <Button type="button" className={`btn btn-${file.color}-light  text-${file.color}`} variant="">
              <i className={`mdi ${file.icon}`}></i>
               Image_file.jpg </Button>
             <Button type="button" className={`btn btn-close btn-${file.color}-light`} aria-label="Close" variant=""> 
             <span aria-hidden="true" className={file.color}>×</span>
              </Button> 
              </div>
            ))}
            </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card className="custom-card">
              <Card.Header className="pb-3">
                <div className="card-title">Radius With Background Color</div>
              </Card.Header>
              <Card.Body>
              <div className="tags">
            {files.map((file)=>(
            <div className="btn-group file-attach m-2" role="group" aria-label="Basic example" key={Math.random()}> 
            <Button type="button" className={`btn btn-pill btn-${file.color}-light  text-${file.color}`} variant="">
              <i className={`mdi ${file.icon}`}></i>
               Image_file.jpg </Button>
             <Button type="button" className={`btn btn-close btn-pill btn-${file.color}-light `} aria-label="Close" variant=""> 
             <span aria-hidden="true" className={file.color}>×</span>
              </Button> 
              </div>
            ))}
            </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="row-sm">
          <Col md={12} lg={6}>
            <Card className="custom-card">
              <Card.Header className="pb-3">
                <Card.Title>Square File_Attachment With Link</Card.Title>
              </Card.Header>
              <Card.Body>
                <p>Square File_Attachment With <code>Link</code> tag</p>
              <div className="tags"> 
              <div className="btn-group file-attach m-2" role="group" aria-label="Basic example"> 
              <Link to="#" type="button" className="btn btn-primary text-white">
                <i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</Link>
                 <Link to="#" type="button" className="btn btn-close btn-primary text-white" aria-label="Close"> 
                 <span aria-hidden="true">×</span> </Link>
                  </div>
                   <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                     <Link to="#" type="button" className="btn btn-outline-success"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg  </Link>
                     <Link to="#" type="button" className="btn btn-close btn-outline-success" aria-label="Close"> 
                     <span aria-hidden="true">×</span> </Link>
                      </div>
                       <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                         <Link to="#" type="button" className="btn btn-secondary-light"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </Link>
                          <Link to="#" type="button" className="btn btn-close btn-secondary-light" aria-label="Close"> 
                          <span aria-hidden="true">×</span> </Link>
                           </div> 
                           </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card className="custom-card">
              <Card.Header className="pb-3">
                <Card.Title>Radius File Attachment Sizes</Card.Title>
              </Card.Header>
              <Card.Body>
              <p>Rounded File_Attachment With  <code>Link</code> tag</p>
              <div className="tags"> 
              <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                 <a type="button" className="btn btn-pill btn-danger text-white"><i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</a>
                  <a type="button" className="btn btn-pill btn-close btn-danger text-white" aria-label="Close">
                     <span aria-hidden="true">×</span> </a> </div> <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                       <a type="button" className="btn btn-pill btn-outline-warning"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg  </a>
                       <a type="button" className="btn btn-pill btn-close btn-outline-warning" aria-label="Close"> 
                       <span aria-hidden="true">×</span> </a>
                        </div>
                         <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                           <a type="button" className="btn btn-pill btn-success-light"><i className="mdi mdi-file-image me-2"></i> Image_file.jpg </a> 
                           <a type="button" className="btn btn-pill btn-close btn-success-light" aria-label="Close">
                             <span aria-hidden="true">×</span> </a>
                              </div>
                               </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
<div className="row row-sm">
   <div className="col-lg-6"> 
   <div className="card custom-card"> 
   <div className="card-header border-bottom"> 
   <h3 className="card-title">Square File Attachment Sizes</h3>
    </div> <div className="card-body p-4 p-sm-5"> 
    <div className="tags">
       <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
         <button type="button" className="btn btn-sm btn-primary text-white">
          <i className="mdi mdi-file-image mx-2"></i>Image01..._jpg</button> 
          <button type="button" className="btn btn-close btn-sm btn-primary text-white" aria-label="Close">
             <span aria-hidden="true">×</span>
              </button> 
              </div> 
              <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                 <button type="button" className="btn btn-secondary"><i className="mdi mdi-file-excel me-2"></i>Document.exl</button> 
                 <button type="button" className="btn btn-close btn-secondary text-white" aria-label="Close"> 
                 <span aria-hidden="true">×</span>
                  </button>
                   </div>
                    <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                       <button type="button" className="btn btn-lg btn-pink"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</button>
                        <button type="button" className="btn btn-close btn-lg btn-pink" aria-label="Close"> 
                        <span aria-hidden="true">×</span>
                         </button>
                          </div>
                           </div>
                            </div>
                             </div>
                              </div> 
                              <div className="col-lg-6">
                                 <div className="card custom-card"> 
                                 <div className="card-header border-bottom"> 
                                 <h3 className="card-title">Rounded File Attachment Sizes</h3>
                                  </div>
                                   <div className="card-body p-4 p-sm-5">
                                     <div className="tags">
                                       <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                                         <button type="button" className="btn btn-pill btn-sm btn-primary text-white"><i className="mdi mdi-file-image me-2"></i>Image01..._jpg</button> <button type="button" className="btn btn-pill btn-close btn-sm btn-primary text-white" aria-label="Close"> 
                                         <span aria-hidden="true">×</span>
                                          </button>
                                           </div> 
                                           <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                                             <button type="button" className="btn btn-pill btn-secondary"><i className="mdi mdi-file-excel me-2"></i>Document.exl</button> 
                                             <button type="button" className="btn btn-pill btn-close btn-secondary text-white" aria-label="Close"> 
                                             <span aria-hidden="true">×</span> 
                                             </button> 
                                             </div> 
                                             <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                                               <button type="button" className="btn btn-pill btn-lg btn-pink"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</button>
                                                <button type="button" className="btn btn-pill btn-close btn-lg btn-pink" aria-label="Close">
<span aria-hidden="true">×</span>
 </button> 
 </div> 
 </div> 
 </div>
  </div>
   </div> 
   </div>
   <div className="row row-sm"> 
   <div className="col-lg-6">
     <div className="card custom-card">
       <div className="card-header border-bottom"> 
       <h3 className="card-title">Square File Attachment Sizes with link</h3> 
       </div>
        <div className="card-body p-4 p-sm-5">
           <p>Square File_Attachment Sizes with <code className="highlighter-rouge">&lt;a&gt;</code> tag.</p>
           <div className="tags">
             <div className="btn-group file-attach m-2" role="group" aria-label="Basic example"> 
             <a className="btn btn-sm btn-primary text-white"><i className="mdi mdi-file-image me-2"></i>Image01..._jpg</a>
              <a className="btn btn-close btn-sm btn-primary text-white" aria-label="Close"> 
              <span aria-hidden="true">×</span>
               </a> 
               </div> 
               <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                 <a className="btn btn-secondary text-white"><i className="mdi mdi-file-excel me-2"></i>Document.exl</a>
                  <a className="btn btn-close btn-secondary text-white" aria-label="Close"> 
                  <span aria-hidden="true">×</span> </a>
                   </div> 
                   <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                     <a className="btn btn-lg btn-pink"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</a>
                      <a className="btn btn-close btn-lg btn-pink" aria-label="Close">
                         <span aria-hidden="true">×</span> </a>
                          </div>
                           </div>
                            </div>
                             </div> 
                             </div> 
                             <div className="col-lg-6">
                               <div className="card custom-card">
                                 <div className="card-header border-bottom"> 
                                 <h3 className="card-title">Rounded File Attachment Sizes with link</h3>
                                  </div>
                                   <div className="card-body p-4 p-sm-5"> <p>Riunded File_Attachment Sizes with <code className="highlighter-rouge">&lt;a&gt;</code> tag.</p>
                                   <div className="tags"> 
                                  <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                                     <a className="btn btn-pill btn-sm btn-primary text-white"><i className="mdi mdi-file-image me-2"></i>Image01..._jpg</a> 
                                     <a className="btn btn-pill btn-close btn-sm btn-primary text-white" aria-label="Close"> <span aria-hidden="true">×</span> </a>
                                      </div>
                                       <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                                         <a className="btn btn-pill btn-secondary text-white"><i className="mdi mdi-file-excel me-2"></i>Document.exl</a> 
                                         <a className="btn btn-pill btn-close btn-secondary text-white" aria-label="Close">
                                           <span aria-hidden="true">×</span> </a> 
                                           </div>
                                            <div className="btn-group file-attach m-2" role="group" aria-label="Basic example">
                                               <a className="btn btn-pill btn-lg btn-pink"><i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf</a> 
                                               <a className="btn btn-pill btn-close btn-lg btn-pink" aria-label="Close">
                                                 <span aria-hidden="true">×</span> </a>
                                                  </div> 
                                                  </div> 
                                                  </div> 
                                                  </div> 
                                                  </div>
                                                   </div>
        <Row className="row-sm">
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Image File_Attachment</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="">
                    <Row>
                      {fileattachment.map((fileattachments)=>(
                      <Col xl={2} lg={3} md={4} sm={4} key={Math.random()}>
                        <div className="file-image p-2">
                          <div className="product-image">
                            <Link
                              to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails`}
                            >
                              <img
                                src={fileattachments.src1}
                                alt=""
                                className="w-100"
                              />
                            </Link>
                            <ul className="icons">
                              <li>
                                <Link to="#" className="bg-danger btn">
                                  <i className="fe fe-trash"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="bg-secondary btn">
                                  <i className="fe fe-download"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails/`}
                                  className="bg-primary btn"
                                >
                                  <i className="fe fe-eye"></i>
                                </Link>
                              </li>
                            </ul>
                            <Link to="">
                              <span className="file-name">{fileattachments.heading}</span>
                            </Link>
                          </div>
                        </div>
                      </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Image File_Attachment Small Size
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  {filesdata.map((filesdatas)=>(
                  <div className="file-image-1" key={Math.random()}>
                    <div className="product-image">
                      <Link
                        to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails/`}
                      >
                        <img
                          src={filesdatas.src1}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger btn">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary btn">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link  className="bg-primary btn"
                            to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails/`}
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">{filesdatas.heading}</span>
                    </div>
                  </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Image File_Attachment Medium Size
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                {filesdata.map((filesdatas)=>(
                  <div className="file-image-1 file-image-md" key={Math.random()}>
                    <div className="product-image">
                      <Link
                        to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails/`}
                      >
                        <img
                          src={filesdatas.src1}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger btn">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary btn" >
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link  className="bg-primary btn"
                            to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails/`}
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">{filesdatas.heading}</span>
                    </div>
                  </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">
                  Image File_Attachment Large Size
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                {filesdata.map((filesdatas)=>(
                  <div className="file-image-1 file-image-lg" key={Math.random()}>
                    <div className="product-image">
                      <Link
                        to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails/`}
                      >
                        <img
                          src={filesdatas.src1}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger btn">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary btn">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link  className="bg-primary btn"
                            to={`${import.meta.env.BASE_URL}pages/FileManager/FileDetails/FileDetails/`}
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">{filesdatas.heading}</span>
                    </div>
                  </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

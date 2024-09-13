import React from "react";
import { Link } from "react-router-dom";
import {Row,Col, Card,Button } from "react-bootstrap";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import user18 from "../../../assets/images/users/18.jpg";
import user20 from "../../../assets/images/users/20.jpg";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import CardContent from "@mui/material/CardContent";
import { Imagesdata } from "../../../commondata/commonimages";
import { useState } from "react";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
import {FullScreenDialog,InitialCollapsedCard} from '../../../commondata/commondata';
export default function CardDesign() {
  
const [BasicExpanded, setBasicExpanded] = useState(true)

const BasicHandleExpandClick = () => {
  setBasicExpanded(!BasicExpanded)
}
const [Basicshow, setBasicshow] = useState(true)

//Basic Card Header
const [expanded1, setExpanded1] = useState(true);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const [show1, setShow1] = useState(true);

  //Basic Card Footer
  const [expanded2, setExpanded2] = useState(true);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const [show2, setShow2] = useState(true);

  //Card Alert Success
  const [expanded3, setExpanded3] = useState(true);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const [show3, setShow3] = useState(true);

  //Card Danger Alert
  const [expanded4, setExpanded4] = useState(true);

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const [show4, setShow4] = useState(true);

  //Full Screen
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded5, setExpanded5] = useState(true);

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const [show5, setShow5] = useState(true);

  //Card Collapsed
  const [expanded6, setExpanded6] = useState(false);

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  const [show6, setShow6] = useState(true);

  //Employee Card1
  const [expanded7, setExpanded7] = useState(true);

  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };
  const [show7, setShow7] = useState(true);

  //Employee Card2
  const [expanded8, setExpanded8] = useState(true);

  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };
  const [show8, setShow8] = useState(true);

  //Employee Card3
  const [expanded9, setExpanded9] = useState(true);

  const handleExpandClick9 = () => {
    setExpanded9(!expanded9);
  };
  const [show9, setShow9] = useState(true);

  //Card Wishlist
  const [expanded10, setExpanded10] = useState(true);

  const handleExpandClick10 = () => {
    setExpanded10(!expanded10);
  };
  const [show10, setShow10] = useState(true);

  //Backgrounding
  const [expanded11, setExpanded11] = useState(true);

  const handleExpandClick11 = () => {
    setExpanded11(!expanded11);
  };
  const [show11, setShow11] = useState(true);

  //Primary Card Title
  const [expanded12, setExpanded12] = useState(true);

  const handleExpandClick12 = () => {
    setExpanded12(!expanded12);
  };
  const [show12, setShow12] = useState(true);

  //Secondary Card Title
  const [expanded13, setExpanded13] = useState(true);

  const handleExpandClick13 = () => {
    setExpanded13(!expanded13);
  };
  const [show13, setShow13] = useState(true);

  //Success Alert Card
  const [expanded14, setExpanded14] = useState(true);

  const handleExpandClick14 = () => {
    setExpanded14(!expanded14);
  };
  const [show14, setShow14] = useState(true);

  //Card With Loader1
  const [expanded15, setExpanded15] = useState(true);

  const handleExpandClick15 = () => {
    setExpanded15(!expanded15);
  };
  const [show15, setShow15] = useState(true);

  //Card With Loader2
  const [expanded16, setExpanded16] = useState(true);

  const handleExpandClick16 = () => {
    setExpanded16(!expanded16);
  };
  const [show16, setShow16] = useState(true);

  //Card With Loader3
  const [expanded17, setExpanded17] = useState(true);

  const handleExpandClick17 = () => {
    setExpanded17(!expanded17);
  };
  const [show17, setShow17] = useState(true);

//Buit Card
const [expanded18, setExpanded18] = useState(true);

const handleExpandClick18 = () => {
  setExpanded18(!expanded18);
};
const [show18, setShow18] = useState(true);

//Card Blue
const [expanded19, setExpanded19] = useState(true);

const handleExpandClick19 = () => {
  setExpanded19(!expanded19);
};
const [show19, setShow19] = useState(true);

//Card Status On Left Side
const [expanded20, setExpanded20] = useState(true);

const handleExpandClick20 = () => {
  setExpanded20(!expanded20);
};
const [show20, setShow20] = useState(true);
// Simple Card
const [expanded21, setExpanded21] = useState(true);

const handleExpandClick21 = () => {
  setExpanded21(!expanded21);
};
const [show21, setShow21] = useState(true);

  //Full Screen
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [expanded22, setExpanded22] = useState(true);

  const handleExpandClick22 = () => {
    setExpanded22(!expanded22);
  };
  const [show22, setShow22] = useState(true);

  //Initial Collapsed
const [expanded23, setExpanded23] = useState(true);

const handleExpandClick23 = () => {
  setExpanded23(!expanded23);
};
const [show23, setShow23] = useState(true);
  return (
    <div>
        <PageHeader titles="Card design" active="Card design" items={['Components']} />
      <Row>
        <Col xl={4} md={12}>
          <Card>
            <Card.Body>
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Card-Header</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-primary">
                Go somewhere
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Body>
              <p className="">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-primary">
                Go somewhere
              </Link>
            </Card.Body>
            <Card.Footer>
              <Card.Title>Card-footer</Card.Title>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={4} >
          <Card className=" text-white bg-primary">
            <Card.Body>
              <h4 className="card-title">Primary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className=" text-white bg-secondary">
            <Card.Body>
              <h4 className="card-title">Secondary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4} >
          <Card className=" text-white bg-success">
            <Card.Body>
              <h4 className="card-title">Success card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4} >
          <Card className=" text-white bg-danger">
            <Card.Body>
              <h4 className="card-title">Danger card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className=" text-white bg-info">
            <Card.Body>
              <h4 className="card-title">Info card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className=" text-white bg-warning">
            <Card.Body>
              <h4 className="card-title">Warning card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
        {Basicshow?	<Card>
							<Card.Header>
								<Card.Title>Basic card</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={BasicHandleExpandClick} className="card-options-collapse me-2"
										data-bs-toggle="card-collapse"><i className={`fe ${BasicExpanded ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setBasicshow(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={BasicExpanded} timeout={500}>
								<Card.Body>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet
								</Card.Body>
                <div className="card-footer">This is Basic card footer</div>
							</Collapse>
						</Card>:null}
        </Col>
        <Col md={12} xl={4}>
      {show1 ?
      <Card>
							<Card.Header className="card-header bg-primary br-tr-3 br-tl-3">
								<Card.Title className="text-white" >Basic color card-header</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick1} className="card-options-collapse me-2 text-white"
										data-bs-toggle="card-collapse"><i className={` fe ${expanded1 ? 'fe fe-chevron-up text-white' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow1(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded1} timeout={500}>
								<Card.Body>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet
								</Card.Body>
                <div className="card-footer">This is Basic card footer</div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={4}>
        {show2 ?
      <Card>
							<Card.Header className="card-header">
								<Card.Title>Basic color card-header</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick2} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded2 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow2(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded2} timeout={500}>
								<Card.Body>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet
								</Card.Body>
                <div className="card-footer bg-danger br-br-3 br-bl-3 text-white">This is Basic card footer</div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={6}>
          <Card className="custom-buttons"> 
            <Card.Header>
              <h3 className="card-title">Panel with custom buttons</h3>
              <div className="card-options">
                <Link to="#" className="btn btn-primary btn-sm">
                  Action 1
                </Link>
                <Link to="#" className="btn btn-secondary btn-sm ms-2">
                  Action 2
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful
              actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header className="gap-2">
              <h3 className="card-title">Card with search form</h3>
              <div className="card-options">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Search something..."
                      name="s"
                    />
                    <span className="input-group-btn ms-0">
                      <Button className="btn btn-sm btn-primary" type="submit">
                        <span className="fe fe-search text-white"></span>
                      </Button>
                    </span>
                  </div>
                </form>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful
              actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
      {show3 ?
						<Card>
							<Card.Header>
								<Card.Title>Card with alert</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick3} className="card-options-collapse me-2"
										data-bs-toggle="card-collapse"><i className={`${expanded3 ? "fe fe-chevron-up" : "fe fe-chevron-down"}`}></i></Link>
									<Link to="#" onClick={() => setShow3(false)} className="card-options-remove"
										data-bs-toggle="card-remove"><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded3} timeout={500}>

								<div>

									<div className={`card-alert alert alert-success mb-0`}>
                  Adding action was successful
									</div>
									<Card.Body>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
									</Card.Body>

								</div>

							</Collapse>
						</Card>
						: null}
        </Col>
        <Col md={12} xl={6}>
        {show4 ?
						<Card>
							<Card.Header>
								<Card.Title>Card with alert</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick4} className="card-options-collapse me-2"
										data-bs-toggle="card-collapse"><i className={`${expanded4 ? "fe fe-chevron-up" : "fe fe-chevron-down"}`}></i></Link>
									<Link to="#" onClick={() => setShow4(false)} className="card-options-remove"
										data-bs-toggle="card-remove"><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded4} timeout={500}>

								<div>

									<div className={`card-alert alert alert-danger mb-0`}>
                  Adding action was successful
									</div>
									<Card.Body>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
									</Card.Body>

								</div>

							</Collapse>
						</Card>
						: null}
        </Col>
        <Col md={12} xl={4}>
        <FullScreenDialog />
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Card with switch</h3>
              <div className="card-options">
                <label className="custom-switch m-0">
                  <input
                    type="checkbox"
                    value="1"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </div>
            </Card.Header>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
        <InitialCollapsedCard />
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={4}>
       {show7 ?
      <Card>
							<Card.Header className="card-header">
								<Card.Title>Employee card</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick7} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded7 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow7(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded7} timeout={500}>
              <CardContent className="card-body text-center">
            <img
              className="avatar avatar-xxl brround cover-image cover-image mt-3 mb-3"
               src={Imagesdata('users18')} alt=""
            />
            <div className="mb-3">
              <span className="h4 mb-0 mt-3">James Thomas</span>
              <br />
              <span className="card-text">Web designer</span>
            </div>
            
          </CardContent>
          <div className="card-footer text-center">
              <div className="row user-social-detail">
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={4}>
        {show8 ?
      <Card>
							<Card.Header className="card-header">
								<Card.Title>Employee card</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick8} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded8 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow8(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded8} timeout={500}>
              <CardContent className="card-body text-center">
            <img
              className="avatar avatar-xxl brround cover-image cover-image mt-3 mb-3"
               src={Imagesdata('users18')} alt=""
            />
            <div className="mb-3">
              <span className="h4 mb-0 mt-3">James Thomas</span>
              <br />
              <span className="card-text">Web designer</span>
            </div>
            
          </CardContent>
          <div className="card-footer text-center">
              <div className="row user-social-detail">
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={4}>
       {show9 ?
      <Card>
							<Card.Header className="card-header">
								<Card.Title>Employee card</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick9} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded9 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow9(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded9} timeout={500}>
              <CardContent className="card-body text-center"> 
            <img
              className="avatar avatar-xxl brround cover-image cover-image mt-3 mb-3"
               src={Imagesdata('users8')} alt=""
            /> 
            <div className="mb-3">
              <span className="h4 mb-0 mt-3">Thomas symson</span>
              <br />
              <span className="card-text">Web designer</span>
            </div>
          
          </CardContent>
          <div className="card-footer text-center">
              <div className="row user-social-detail">
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="social-profile me-4 rounded text-center">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
							</Collapse>
						</Card>
            :null}
        </Col>
      </Row>
      <Row >
        <Col md={12} xl={4}>
          <Card>
            <Card.Body className=" text-start">
              <blockquote className="quote">
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <small className="text-muted">
                  so awesome this title
                  <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Body className=" text-center">
              <blockquote className="quote">
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <small className="text-muted">
                  so awesome this title
                  <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Body className=" text-end">
              <blockquote className="quote">
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <small className="text-muted">
                  so awesome this title
                  <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
       {show10 ?
      <Card>
							<Card.Header className="card-header">
								<Card.Title>Card With List</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick10} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded10 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow9(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded10} timeout={500}>
              <div className="card-body">
            <div className="visitor-list">
              <div className="media m-0 mt-0 border-bottom">
                <img
                  className="avatar brround avatar-md me-3"
                  alt="avatra-img"
                  src={user18}
                />
                <div className="media-body">
                  <Link to="#" className="text-default fw-semibold">
                    John Paige
                  </Link>
                  <p className="text-muted ">
                    Uploaded new invoices for RedBus
                  </p>
                </div>
              </div>
              <div className="media mt-2 border-bottom">
                <img
                  className="avatar brround avatar-md me-3"
                  alt="avatra-img"
                  src={user20}
                />
                <div className="media-body">
                  <Link to="#" className="text-default fw-semibold">
                    Lillian Quinn
                  </Link>
                  <p className="text-muted">
                    Created new work flow for the current
                  </p>
                </div>
              </div>
              <div className="media mt-2">
                <img
                  className="avatar brround avatar-md me-3"
                  alt="avatra-img"
                  src={user18}
                />
                <div className="media-body">
                  <Link to="#" className="text-default fw-semibold">
                    Irene Harris
                  </Link>
                  <p className="text-muted mb-0">
                    Submitted the project schedule to the manager
                  </p>
                </div>
              </div>
            </div>
          </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col xl={4} md={12}>
      {show21 ?
      <Card>
							<Card.Header className="card-header">
								<Card.Title>Sample card</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick21} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded21 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow21(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded21} timeout={500}>
              <div className="card-body">
            <p>
              Put toy mouse in food bowl run out of litter box at full speed
              drool but pee in Put toy mouse Put toy mouse the shoe purr when
              being pet but chew foot.
            </p>
            <p className="mb-0">
              Scratch the postman wake up lick paw Duis aute irure dolor in
              reprehenderit wake up owner meow meow lick plastic bags Scratch
              the postman wake up lick paw wake Duis aute irure dolor having
              their mate disturbing sleeping humans.
            </p>
          </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col xl={4} md={12}>
          <div className="card d-flex m-b-20">
            <Card.Header>
              <h3 className="card-title">Card with Toolbar</h3>
              <div className="card-options">
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-refresh"></i>
                </Link>
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-bookmark-outline"></i>
                </Link>
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-dots-vertical"></i>
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Put toy mouse in food bowl run out of litter box at full speed
                drool but pee in Put toy mouse Put toy mouse the shoe purr when
                being pet but chew foot.
              </p>
              <p className="mb-0">
                Duis aute irure dolor in reprehenderit in voluptate velit
                Scratch the postman wake up lick paw wake up owner meow meow
                lick plastic bags Scratch the postman wake up lick paw wake
                having their mate disturbing sleeping humans.
              </p>
            </Card.Body>
          </div>
        </Col>
      </Row>
      <Row >
        <Col md={12} xl={4}>
          <Card className=" card-blog-overlay1">
            <Card.Body className="card-body  text-white">
              <h3 className="card-title text-white">card-with image</h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
            <Card.Footer className="card-footer  text-white z-index2 border-transparent">
              This is Basic card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className=" card-blog-overlay2">
            <Card.Body className="card-body  text-white">
              <h3 className="card-title text-white">card-with image</h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
            <Card.Footer className="card-footer text-white z-index2 border-transparent">
              This is Basic card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col md={12} xl={4}>
      {show11 ?
      <Card className="card-blog-overlay">
							<Card.Header className=" z-index2  border-transparent">
								<Card.Title className="text-white">card-with image</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick11} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded11 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow11(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded11} timeout={500}>
              <div className="card-options">
                
              </div>
            <div className="card-body  text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col xl={6} mld={6} >
          <Card className=" card-aside">
            <Card.Body className="card-body d-flex flex-column">
              <h4>
                <Link to="#">Play Music</Link>
              </h4>
              <div className="text-muted">
                Some quick example text to build on the card title and make up
                the bulk of the card's
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto text-center ">
                <div className="text-primary ">
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-step-backward"></i>
                  </span>
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-play "></i>
                  </span>
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-step-forward"></i>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={6}>
          <Card className=" card-aside bg-primary">
            <Card.Body className="card-body d-flex flex-column">
              <h4>
                <Link to="#" className="text-white">
                  Play Music
                </Link>
              </h4>
              <div className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto text-center ">
                <div className="text-muted">
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-step-backward text-white"></i>
                  </span>
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-play text-white "></i>
                  </span>
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-step-forward text-white"></i>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
       {show12 ?
      <Card className="text-white bg-primary">
							<Card.Header className="border-primary">
								<Card.Title className="text-white">primary card title</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick12} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded12 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow12(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded12} timeout={500}>
              <div className="card-options">
                
              </div>
            <div className="card-body  text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={4}>
        {show13 ?
      <Card className="text-white bg-secondary">
							<Card.Header className="border-secondary">
								<Card.Title className="text-white">Secondary card title</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick13} className="card-options-collapse me-2 text-white"
										data-bs-toggle="card-collapse"><i className={` fe ${expanded13 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow13(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded13} timeout={500}>
              <div className="card-options">
                
              </div>
            <div className="card-body  text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={4}>
        {show14 ?
      <Card className="text-white bg-success">
							<Card.Header className="border-success">
								<Card.Title className="text-white">Success card title</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick14} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded14 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow14(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded14} timeout={500}>
              <div className="card-options">
                
              </div>
            <div className="card-body  text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={6}>
          <Card className="custom-buttons">
            <Card.Header>
              <h3 className="card-title">Panel with custom buttons</h3>
              <div className="card-options">
                <Link to="#" className="btn btn-primary btn-sm">
                  Action 1
                </Link>
                <Link to="#" className="btn btn-secondary btn-sm ms-2">
                  Action 2
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful
              actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header className="gap-2">
              <h3 className="card-title">Card with search form</h3>
              <div className="card-options">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Search something..."
                      name="s"
                    />
                    <span className="input-group-btn">
                      <Button className="btn btn-sm btn-primary" type="submit">
                        <span className="fe fe-search"></span>
                      </Button>
                    </span>
                  </div>
                </form>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful
              actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
       {show15 ?
      <Card>
							<Card.Header>
								<Card.Title>Card with loader</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick15} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded15 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow15(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded15} timeout={500}>
              <div className="card-body">
            <div className="dimmer active">
              <div className="spinner"></div>
            </div>
          </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={4}>
             {show16 ?
      <Card>
							<Card.Header>
								<Card.Title>Card with loader</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick16} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded16 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow16(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded16} timeout={500}>
              <div className="card-body">
            <div className="dimmer active">
              <div className="spinner1">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
							</Collapse>
						</Card>
            :null}
        </Col>
        <Col md={12} xl={4}>
                   {show17 ?
      <Card>
							<Card.Header>
								<Card.Title>Card with loader</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick17} className="card-options-collapse me-2 "
										data-bs-toggle="card-collapse"><i className={` fe ${expanded17 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow17(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded17} timeout={500}>
              <div className="card-body">
            <div className="dimmer active">
              <div className="spinner2">
                <div className="cube1"></div>
                <div className="cube2"></div>
              </div>
            </div>
          </div>
							</Collapse>
						</Card>
            :null}
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={6}>
        {show22?<Card className="card">
      <div className="card-header">
        <h3 className="card-title">Fullscreen button</h3>
        <div className="rtlcards ">
         <Link to="#" onClick={handleExpandClick22}><i className={`fe ${expanded22 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
        <FullscreenIcon variant="outlined" onClick={handleClickOpen1} />
        <Dialog
          fullScreen
          open={open1}
          onClose={handleClose1}
        >
          <List sx={{ position: "relative" }}>
            <Toolbar className="border-bottom">
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" >
                fullscreen button
              </Typography>
                 {/* <CloseIcon/> */}

            </Toolbar>
          </List>
          <List>
            <ListItem>
              <ListItemText secondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
            </ListItem>
          </List>
        </Dialog>
                      <Link to="#" onClick={() => setShow22(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            </div>
      </div>
      <Collapse in={expanded22} timeout="auto">
        <div className="card-body">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </div>
      </Collapse>
    </Card>:null}
        </Col>
        <Col md={12} xl={6} >
          <Card>
            <Card.Header>
              <h3 className="card-title">Card with switch</h3>
              <div className="card-options">
                <label className="custom-switch m-0">
                  <input
                    type="checkbox"
                    value="1"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </div>
            </Card.Header>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
        <InitialCollapsedCard />

        </Col>
        <Col md={12} xl={6}>
      {show18?	<Card>
							<Card.Header>
								<Card.Title>Built card</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick18} className="card-options-collapse me-2"
										data-bs-toggle="card-collapse"><i className={`fe ${expanded18 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow18(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded18} timeout={500}>
								<Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
								</Card.Body>
							</Collapse>
						</Card>:null}
        </Col>
        <Col md={12} xl={6}>
            {show19?	<Card>
        <div className="card-status bg-blue br-tr-7 br-tl-7"></div>
							<Card.Header>
								<Card.Title>Card Blue</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick19} className="card-options-collapse me-2"
										data-bs-toggle="card-collapse"><i className={`fe ${expanded19 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow19(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded19} timeout={500}>
								<Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
								</Card.Body>
							</Collapse>
						</Card>:null}
        </Col>
        <Col xl={6} md={12}>
         {show20?	<Card>
          <div className="card-status card-status-left bg-red br-bl-7 br-tl-7"></div>
							<Card.Header>
								<Card.Title>Card status on left side</Card.Title>
								<div className="card-options">
									<Link to="#" onClick={handleExpandClick20} className="card-options-collapse me-2"
										data-bs-toggle="card-collapse"><i className={`fe ${expanded20 ? 'fe fe-chevron-up' : 'fe fe-chevron-down'}`}></i></Link>
									<Link to="#" onClick={() => setShow20(false)}
										className="card-options-remove"
										data-bs-toggle="card-remove"
									><i className="fe fe-x"></i></Link>
								</div>
							</Card.Header>
							<Collapse in={expanded20} timeout={500}>
								<Card.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
								</Card.Body>
							</Collapse>
						</Card>:null}
        </Col>
      </Row>
    </div>
  );
}

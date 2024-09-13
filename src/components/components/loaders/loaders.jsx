import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Breadcrumb,Row,Col} from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function Loaders() {
  //Loader
  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);

  //Loader1
  const [expanded1, setExpanded1] = useState(true);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const [show1, setShow1] = useState(true);

  //Loader2
  const [expanded2, setExpanded2] = useState(true);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const [show2, setShow2] = useState(true);

  //Loader3
  const [expanded3, setExpanded3] = useState(true);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const [show3, setShow3] = useState(true);

  //Loader4
  const [expanded4, setExpanded4] = useState(true);

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const [show4, setShow4] = useState(true);

  //Loader5
  const [expanded5, setExpanded5] = useState(true);

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const [show5, setShow5] = useState(true);

  //Loader6
  const [expanded6] = useState(true);

  //Loader7
  const [expanded7] = useState(true);
  return (
    <div>
             <PageHeader titles="Loaders" active="Loaders" items={['Components']} />
      <Row>
        <Col md={12} lg={6} xl={4}>
        <>
      {show ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
            <div className="rtlcards ">
            <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              onClick={() => setShow(false)}
              aria-label="close"
            >
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto">
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
      ) : null}
    </>
        </Col>
        <Col md={12} lg={6} xl={4}>
        <>
      {show1 ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
            <div className="rtlcards ">
            <Link to="#" onClick={handleExpandClick1}><i className={`fe ${expanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow1(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              onClick={() => setShow1(false)}
              aria-label="close"
              
            >
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded1} timeout="auto">
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
      ) : null}
    </>
        </Col>
        <Col md={12} lg={6} xl={4}>
        <>
      {show2 ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
            <div className="rtlcards ">
            <Link to="#" onClick={handleExpandClick2}><i className={`fe ${expanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow2(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              onClick={() => setShow2(false)}
              aria-label="close"
            >
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded2} timeout="auto">
            <div className="card-body">
              <div className="dimmer active">
                <div className="spinner"></div>
              </div>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </>
        </Col>
        <Col md={12} lg={6} xl={4}>
        <>
      {show3 ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
            <div className="rtlcards ">
            <Link to="#" onClick={handleExpandClick3}><i className={`fe ${expanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow3(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              onClick={() => setShow3(false)}
              aria-label="close"
            >
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded3} timeout="auto">
            <div className="card-body">
              <div className="dimmer active">
                <div className="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </>
        </Col>
        <Col md={12} lg={6} xl={4}>
        <>
      {show4 ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
            <div className="rtlcards ">
            <Link to="#" onClick={handleExpandClick4}><i className={`fe ${expanded4 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow4(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              onClick={() => setShow4(false)}
              aria-label="close"
            >
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded4} timeout="auto">
            <div className="card-body">
              <div className="dimmer active">
                <div className="lds-hourglass"></div>
              </div>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </>
        </Col>
        <Col md={12} lg={6} xl={4}>
        <>
      {show5 ? (
        <Card className="card ">
          <CardActions className="card-header ">
            <h3 className="card-title">loaders</h3>
            <div className="rtlcards ">
            <Link to="#" onClick={handleExpandClick5}><i className={`fe ${expanded5 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                      <Link to="#" onClick={() => setShow5(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setShow5(false)}
            >
            </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded5} timeout="auto">
            <div className="card-body">
              <div className="dimmer active">
                <div className="lds-heart">
                  <div></div>
                </div>
              </div>
            </div>
          </Collapse>
        </Card>
      ) : null}
    </>
        </Col>
      </Row>

      <div className="row">
        <div className="col-md-6">
        <Card className="card ">
        <CardActions className="card-header lodaer">
          <h3 className="card-title">loaders big sizes</h3>
          
        </CardActions>
        <Collapse in={expanded6} timeout="auto">
          <div className="card-body">
            <div className="dimmer active">
              <div className="spinner-lg"></div>
            </div>
          </div>
        </Collapse>
      </Card>
        </div>
        <div className="col-md-6">
        <Card className="card ">
        <CardActions className="card-header lodaer">
          <h3 className="card-title">loaders big sizes</h3>
        </CardActions>
        <Collapse in={expanded7} timeout="auto">
          <div className="card-body">
            <div className="dimmer active">
              <div className="spinner1-lg">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        </Collapse>
      </Card>
        </div>
      </div>
    </div>
  );
}

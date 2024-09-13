import React from "react";
import { Link } from "react-router-dom";
import {Breadcrumb, Card,Row, Col} from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import ReactRating from "react-rating";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import {CustomizedRating6} from '../../../commondata/commondata';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";

export default function Ratings() {

  //CustomizedRating1
  const [value] = useState(4);

//CustomizedRating9
  const value1 = 3.5;
  const [value2, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  //CustomizeRating8
  const ColorExample = {
    size: 40,
    count: 7,
    isHalf: false,
    value: 4,
    color: "#6c757d",
    activeColor: "#ffc107",
    onChange: (newValue) => {
      console.log(`Example 3: new value is ${newValue}`);
    },
  };
  //CustomizedRating2
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});
  const [value3] = React.useState(4);
  return (
    <div>
             <PageHeader titles="Ratings" active="Ratings" items={['Components']} />


      <Row>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Static Star Rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-warning  fs-25">
              <Box sx={{"& > legend": { mt: 4 }, }}>
      <Rating name="read-only" className="Rating" value={value} readOnly />
    </Box>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Static Rating </h3>
            </Card.Header>
            <Card.Body>
              <div className="text-primary  fs-15">
 <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={value1}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }}className="Rating" fontSize="inherit" />}
      />
    </Box>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Fractional Star rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="star-ratings">
                <div className=" stars-example-fontawesome-o">
                <Box
      sx={{
        "& > legend": { mt: 1 },
      }}
    >
      <Rating name="customized-10" className="Rating" defaultValue={1} max={10} />
    </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Font Awesome Star Rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="star-ratings start-ratings-main clearfix">
                <div className=" stars-example-fontawesome">
                <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="customized-5" className="Rating" defaultValue={3} max={5} />
    </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Natural Behavior.</h3>
            </Card.Header>
            <Card.Body>
              <div className="box  box-example-1to10">
                <div className="box-body">
                <CustomizedRating6
    />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Opinion rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="box box-example-movie">
                <div className="box-body">
                <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value2}
        precision={0.5}
        className="Rating"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Color Rating </h3>
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="box  box-example-pill ">
                <div className="box-body">
                <ReactStars {...ColorExample} className="Rating"/>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Static Opinion Rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="box box-example-horizontal">
                <div className="box-body">
                <Box
      sx={{
        "& > legend": { mt: 4 },
      }}
    >
      <StyledRating
        name="customized-color"
        className="Rating"
        defaultValue={value3}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

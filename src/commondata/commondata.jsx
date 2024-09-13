import React, {Component} from 'react'
import Swal from "sweetalert2";
import Box from '@mui/material/Box';
import Slider,{ SliderThumb }  from '@mui/material/Slider';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from "react";
import TimeFormat from "hh-mm-ss";
import Countdown from 'react-countdown';
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import {Alert, Button} from 'react-bootstrap';
import {Imagesdata} from '../commondata/commonimages';
import { Modal, Row, Col, Container,Table, Tooltip, Card, Collapse, Badge} from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { Link } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import "react-data-table-component-extensions/dist/index.css";
import { OverlayTrigger } from "react-bootstrap";
import * as rating from '../commondata/rating';
       //*** RANGE SLIDER ***//

//CustomizedSlider
function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
  
  const marks12 = [
    {
      value: 0,
    },
    {
      value: 20,
    },
    {
      value: 37,
    },
    {
      value: 100,
    },
  ];
  
  const IOSSlider = styled(Slider)(({ theme }) => ({
    
    height: 2,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      '&:focus, &:hover, &.Mui-active': {
        boxShadow:
          '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&:before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    },
  }));
  

  
  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
  };
  
  export  function CustomizedSlider() {
    return (
      <Box md={{ width: 100 }}>
        <IOSSlider
          aria-label="ios slider"
          defaultValue={60}
          marks={marks12}
          valueLabelDisplay="on"
        />
      </Box>
    );
  }

  //CustomizedSlider1
  function ValueLabelComponent1(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  ValueLabelComponent1.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  const PrettoSlider = styled(Slider)({
       color: '#52af77',
       height: 8,
       '& .MuiSlider-track': {
         border: 'none',
       },
       '& .MuiSlider-thumb': {
         height: 24,
         width: 24,
       backgroundColor: '#fff',
         border: '2px solid currentColor',
         '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
           boxShadow: 'inherit',
         },
        '&:before': {
     display: 'none',
       },
     },
      '& .MuiSlider-valueLabel': {
       lineHeight: 1.2,
       fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
         borderRadius: '50% 50% 50% 0',
         backgroundColor: '#52af77',
         transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
          transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
       },
        '& > *': {
           transform: 'rotate(45deg)',
        },
      },
     });
  function AirbnbThumbComponent1(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent1.propTypes = {
    children: PropTypes.node,
  };
  
  export  function CustomizedSlider1() {
    return (
      <Box md={{ width: 100 }}>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
        />

      </Box>
    );
  }

//CustomizedSlider2
  function ValueLabelComponent2(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent2.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function AirbnbThumbComponent2(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent2.propTypes = {
    children: PropTypes.node,
  };
  
  export function CustomizedSlider2() {
    return (
      <div>
      <Box md={{ width: 100 }}>
        <Slider
          valueLabelDisplay="auto"
          components={{
            // ValueLabel: ValueLabelComponent2,
          }}
          aria-label="custom thumb label"
          defaultValue={40}
        />
       
      </Box>
      </div>
    );
  }

  //CustomizedSlider4
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };
  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));
  
  function AirbnbThumbComponent3(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
  }
  
  AirbnbThumbComponent3.propTypes = {
    children: PropTypes.node,
  };
  
  export function CustomizedSlider4() {
    return (
      <Box md={{ width: 100 }}>
        <AirbnbSlider
          components={{ Thumb: AirbnbThumbComponent }}
          getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
          defaultValue={[30, 65]}
        />
      </Box>
    );
  }
//TrackFalseSlider
  const marksrt = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextrt(value) {
    return `${value}°C`;
  }
  
  export function TrackFalseSlider() {
    return (
      <Box md={{ width: 100 }}>
        
        <Slider
          track={false}
          aria-labelledby="track-false-slider"
          getAriaValueText={valuetextrt}
          defaultValue={30}
          marks={marksrt}
        />
      </Box>
    );
  }
//TrackFalseSlider1
  const marksrt1 = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextrt1(value) {
    return `${value}°C`;
  }
  
  export  function TrackFalseSlider1() {
    return (
      <Box md={{ width: 100 }}>
        <Slider
          track={false}
          aria-labelledby="track-false-range-slider"
          getAriaValueText={valuetextrt1}
          defaultValue={[20, 37, 50]}
          marks={marksrt1}
        />
      </Box>
    );
  }

//TrackInvertedSlider
  const marksin = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextin(value) {
    return `${value}°C`;
  }
  
  export  function TrackInvertedSlider() {
    return (
      <Box md={{ width: 100 }}>
        
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-slider"
          getAriaValueText={valuetextin}
          defaultValue={30}
          marks={marksin}
        />
      </Box>
    );
  }
//TrackInvertedSlider1
  const marksin1 = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetextin1(value) {
    return `${value}°C`;
  }
  
  export function TrackInvertedSlider1() {
    return (
      <Box md={{ width: 100 }}>
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          getAriaValueText={valuetextin1}
          defaultValue={[20, 37]}
          marks={marksin1}
        />
      </Box>
    );
  }
  function valuetextvr(value) {
    return `${value}°C`;
  }
  
  
  export  function VerticalSlider() {
    return (
      <Stack sx={{ height: 400 }} spacing={1} direction="row">
        <Slider
          aria-label="Temperature"
          orientation="vertical"
          getAriaValueText={valuetextvr}
          defaultValue={30}
        />
        
      </Stack>
    );
  }
//VerticalSlider1
  export  function VerticalSlider1() {
    return (
      <Stack sx={{ height: 400 }} spacing={1} direction="row">
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        getAriaValueText={valuetextvr}
        defaultValue={30}
      />
      
    </Stack>
    );
  }
//VerticalSlider2
  function valuetextvra(value) {
    return `${value}°C`;
  }
  const marksvra = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  export  function VerticalSlider2() {
    return (
      <Stack sx={{ height: 400 }} spacing={1} direction="row">
        
        <Slider
          getAriaLabel={() => 'Temperature'}
          orientation="vertical"
          getAriaValueText={valuetextvra}
          defaultValue={[20, 37]}
          marks={marksvra}
        />
      </Stack>
    );
  } 
//VerticalSlider4
  function valuetextv(value) {
    return `${value}°C`;
  }
  const marksv = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  export  function VerticalSlider4() {
    return (
      <Stack sx={{ height: 400 }} spacing={1} direction="row">
  <Slider
  track={false}
  orientation="vertical"
  aria-labelledby="track-false-slider"
  getAriaValueText={valuetextv}
  defaultValue={30}
  marks={marksv}
/> </Stack>
    );
  } 

    //*** COUNTERS ***//
    const formatTime = (time) =>
  ` ${String(Math.floor(time / 60)).padStart(2, "0")} : ${String(
    time % 60
  ).padStart(2, "0")}`;

const Timer = ({ time }) => {
  // const  RESET_INTERVAL_S = (time % RESET_INTERVAL_S);

  return (
    <>
      <div> 00 Days 00 :{formatTime(time)}</div>
    </>
  );
};

    const IntervalTimerFunctional = () => {
        const [time, setTime] = useState(0);
      
        useEffect(() => {
          const timerId = setInterval(() => {
            setTime((t) => t + 1);
          }, 1000);
          return () => clearInterval(timerId);
        }, []);
      
        return <Timer time={time} />;
      };
    export function Uptimer() {
        return <IntervalTimerFunctional />;
      }
      
      //Time Counting From 60 to 20
      
      export const Timers = ({ min }) => {
        let mainTime;
        const secondsLeft = () => {
          const left = Number(min) * 60;
          return left;
        };
      
        const [seconds, setSeconds] = useState(secondsLeft());
        useEffect(() => {
          startTime();
          return () => {
            stopTimer();
          };
        });
      
        const startTime = () => {
          if (seconds && seconds > 20) {
            mainTime = setInterval(tick, 1000);
          }
        };
      
        const stopTimer = () => {
          clearInterval(mainTime);
        };
      
        const tick = () => {
          setSeconds((seconds) => {
            const updatedSeconds = seconds - 1;
            if (updatedSeconds < 1) {
 stopTimer();
            }
            return updatedSeconds;
          });
        };
      
        const display = TimeFormat.fromS(seconds, "hh:mm:ss");
        const [h, m, s] = display.split(":");
        return (
          <>
            {h} : {m} : {s}
          </>
        );
      };
      //timer 1 minute counter
export function Middle() {
    const intervalRef = useRef(null);
  
    const [timer, setTimer] = useState("00:00:00");
    useEffect(() => {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor(((total / 1000) * 60 * 60) % 60);
  
      return {
        total,
        hours,
        minutes,
        seconds,
      };
    }
    function startTimer(deadline) {
      let { total, hours, minutes, seconds } = getTimeRemaining(deadline);
      if (total >= 0) {
        setTimer(
            (hours  ? hours : "0" + hours) +
            ":" +
            (minutes  ? minutes : "0" + minutes) +
            ":" +
            (seconds ? seconds : "0" + seconds)
        );
      } else {
        clearInterval(intervalRef.current);
      }
    }
  
    function clearTimer(endtime) {
      setTimer("00:00:60");
      if (intervalRef.current) clearInterval(intervalRef.current);
      const id = setInterval(() => {
        startTimer(endtime);
      }, 1000);
      intervalRef.current = id;
    }
    function getDeadlineTime() {
      let deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 60);
      return deadline;
    }
    
      clearTimer(getDeadlineTime());
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }; 
    }, []);
    return <>{timer}</>;
  }
// // Random component
const AfterComplete = () => <span>You are good to go!</span>;
  
// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="count-down row daycounter">
            <div className="col-xl-3 col-md-6 countdown  mb-6 mb-xl-0">
              <span className="days text-primary me-1">{days}</span>
              <span className="text-dark">Days</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown mb-6 mb-xl-0">
              <span className="hours text-primary me-3 ">{hours}</span>
              
              <span className="text-dark me-2">Hrs</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown  mb-6 mb-xl-0">
              <span className="minutes text-primary me-1">{minutes}</span>
              
              <span className="text-dark">Mins</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown ">
              <span className="seconds text-primary me-1">{seconds}</span>
              
              <span className="text-dark">Secs</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export function DayCounter() {
return(

  <Countdown date={Date.now() + 3088800000} renderer={rendering} />
)

};

  // Random component
  const AfterCompletion = () => <span>You are good to go!</span>;
  
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <AfterCompletion />;
    } else {
      // Render a countdown
      return (
        <span className="h3 text-white">
        <span>{days} Days {hours} Hours: {minutes} Minutes: {seconds} Seconds</span>
        </span>
      );
    }
  };
  export function TimeCountingdaysLimit() {       
return(
    <Countdown date={Date.now() + 259200000} renderer={renderer} />
  )

};

// Renderer callback with condition
const render = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
  <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="count-down row ">
          <div className="col-xl-3 col-md-6 countdown mb-6 mb-xl-0">
            <span className="days text-dark me-1 d-inline-flex">{days}</span>
            <span className="text-dark">Days</span>
          </div>
          <div className="col-xl-3 col-md-6 countdown mb-6 mb-xl-0">
            <span className="hours text-dark me-1 d-inline-flex">{hours}</span>
            <span className="text-dark">Hrs</span>
          </div>
          <div className="col-xl-3 col-md-6 countdown  mb-6 mb-xl-0">
            <span className="minutes text-dark me-1 d-inline-flex">{minutes}</span>
            <span className="text-dark">Mins</span>
          </div>
          <div className="col-xl-3 col-md-6 countdown ">
            <span className="seconds text-dark me-1 d-inline-flex">{seconds}</span>
            <span className="text-dark">Secs</span>
          </div>
        </div>
      </div>
    </div>   
    );
  }
};
export function DayCounters() {
return(
  <Countdown date={Date.now(30888000000) + 30888000000} renderer={render} />
)
};

         //*** RATINGS ***//
         
         const customIcons = {
            1: {
              icon: <SentimentVeryDissatisfiedIcon />,
              label: "Very Dissatisfied",
            },
            2: {
              icon: <SentimentDissatisfiedIcon />,
              label: "Dissatisfied",
            },
            3: {
              icon: <SentimentSatisfiedIcon />,
              label: "Neutral",
            },
            4: {
              icon: <SentimentSatisfiedAltIcon />,
              label: "Satisfied",
            },
            5: {
              icon: <SentimentVerySatisfiedIcon />,
              label: "Very Satisfied",
            },
          };
         function IconContainer(props) {
            const { value, ...other } = props;
            return <span {...other}>{customIcons[value].icon}</span>;
          }
          
          IconContainer.propTypes = {
            value: PropTypes.number.isRequired,
          };
          
          export function CustomizedRating6() {
            return (
              <Rating
                name="highlight-selected-only"
                defaultValue={2}
                className="Rating"
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
              />
            );
          }

          //*** ALERTS ***//
//default alert
export  const defaultData=[
    {id:1 , color:'primary'},
    {id:2 , color:'secondary'},
    {id:3 , color:'success'},
    {id:4 , color:'warning'},
    {id:5 , color:'info'},
    {id:6 , color:'danger'},
 ]
 //links with alert
 export const linksAData = [
    {id:1, class:'light-success', color:'success', heading:'Well Done!', alertLine:'You Successfully Read', description:'This Important Alert Message'},
    {id:2, class:'light-info', color:'info', heading:'Head Up! This',alertLine:'but its not super important.',  description:'Alerts Needs Your Attension,', },
    {id:3, class:'light-warning', color:'warning', heading:'Warning!', alertLine:' Better check yourself, youre', description:' not looking too good.'},
    {id:4, class:'light-danger', color:'danger', heading:'Oh Snap!', alertLine:'and try submitting again.', description:'Change a few things up'},

]
//alert  eith icon 
export const iconAlerts = [
    {id:1, class:'success', description:'Well done! You successfully read this important alert message.', icon:<i className="fa fa-check-circle-o me-2"></i>},
    {id:2, class:'info', description:'Heads up! This alert needs your attention, but its not super important.', icon:<i className="fa fa-bell-o me-2"></i>},
    {id:3, class:'warning', description:'Warning! Better check yourself, youre not looking too good.', icon:<i className="fa fa-exclamation me-2"></i>},
    {id:4, class:'danger', description:'Oh snap! Change a few things up and try submitting again.', icon:<i className="fa fa-frown-o me-2"></i>},
    
    ]
    //Imgalertprimary
export function Imgalertprimary() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="primary">
          <Button
            onClick={() => setShow(false)}
            className="btn-close"
            variant=""
          >
            <span aria-hidden="true"  className='text-primary'>×</span>
          </Button>
          <img
            className="avatar brround cover-image"
            src={Imagesdata("users14")}
            alt=""
          />&nbsp;
           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.</span>
        </Alert>
      );
    }
    return <p onClick={() => setShow(true)}></p>;
  }
  //Imgalertsuccess
  export function Imgalertsuccess() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success">
          <Button
            onClick={() => setShow(false)}
            className="btn-close"
            variant=""
          >
            <span aria-hidden="true"  className='text-success'>×</span>
          </Button>
          <img
            className="avatar brround cover-image"
            src={Imagesdata("users18")}
            alt=""
          />&nbsp;
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </Alert>
      );
    }
    return <p onClick={() => setShow(true)}></p>;
  }
  //alert  deismissing icon 
export const iconAlerts1 = [
    {id:1, class:'default', description:'This is a default alert - check it out!', icon:<i className="fe fe-download me-2"></i>},
    {id:2, class:'primary', description:'This is a primary alert - check it out!', icon:<i className="fe fe-check-square me-2"></i>},
    {id:3, class:'success', description:'This is a success alert - check it out!', icon:<i className="fe fe-thumbs-up me-2"></i>},
    {id:4, class:'warning', description:'This is a warning alert - check it out!', icon:<i className="fe fe-info me-2"></i>},
    {id:5, class:'info', description:'This is a info alert - check it out!', icon:<i className="fa fa-bell me-2"></i>},
    {id:6, class:'danger', description:'This is a danger alert - check it out!', icon:<i className="fe fe-slash me-2"></i>}, 
    ]
    //SuccessMessage
export function SuccessMessage() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="success">
          <Button
            onClick={() => setShow(false)}
            className="btn-close"
            variant=""
          >
            <span aria-hidden="true"  className='text-success'>×</span>
          </Button>
          <Alert.Heading>
            <strong>Success Message </strong>
          </Alert.Heading>
          <hr />
          <p>You successfully read this important alert message.</p>
        </Alert>
      );
    }
    return <p onClick={() => setShow(true)}></p>;
  }
  //InfoMessage
  export function InfoMessage() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="info">
          <Button
            onClick={() => setShow(false)}
            className="btn-close"
            variant=""
          >
           <span aria-hidden="true"  className='text-info'>×</span>
          </Button>
          <Alert.Heading>
            <strong>Info Message</strong>
          </Alert.Heading>
          <hr />
          <p>This alert needs your attention, but it's not super important.</p>
        </Alert>
      );
    }
    return <p onClick={() => setShow(true)}></p>;
  }
  //WarningMessage
  export function WarningMessage() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="warning">
          <Button
            onClick={() => setShow(false)}
            className="btn-close"
            variant=""
          >
            <span aria-hidden="true"  className='text-warning'>×</span>
          </Button>
          <Alert.Heading>
            <strong>Warning Message</strong>
          </Alert.Heading>
          <hr />
          <p>Best check yo self, you're not looking too good</p>
        </Alert>
      );
    }
    return <p onClick={() => setShow(true)}></p>;
  }
  //DangerMessage
  export function DangerMessage() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger">
          <Button
            onClick={() => setShow(false)}
            className="btn-close"
            variant=""
          >
            <span aria-hidden="true" className='text-danger'>×</span>
          </Button>
          <Alert.Heading>
            <strong>Danger Message</strong>
          </Alert.Heading>
          <hr />
          <p>Change a few things up and try submitting again.</p>
        </Alert>
      );
    }
    return <p onClick={() => setShow(true)}></p>;
  }

        //*** BUTTONS ***//

 export const defaultbuttons = [
 { id: 1, color: 'default', class: 'Default' },
 { id: 2, color: 'primary', class: 'Primary' },
 { id: 3, color: 'secondary', class: 'Secondary' },
 { id: 4, color: 'success', class: 'Success' },
 { id: 5, color: 'info', class: 'Info' },
 { id: 6, color: 'warning', class: 'Warning' },
 { id: 7, color: 'danger', class: 'Danger' },
 ]
//Color variations
export const socialbuttons1 = [
    { id: 1, color: 'blue', class: 'Blue' },
    { id: 2, color: 'azure', class: 'Azure' },
    { id: 3, color: 'indigo', class: 'Indigo' },
    { id: 4, color: 'purple', class: 'Purple' },
    { id: 5, color: 'pink', class: 'Pink' },
    { id: 6, color: 'red', class: 'Red' },
    { id: 7, color: 'orange', class: 'Orange' },
    { id: 8, color: 'yellow', class: 'Yellow' },
    { id: 9, color: 'lime', class: 'Lime' },
    { id: 10, color: 'green', class: 'Green' },
    { id: 11, color: 'teal', class: 'Teal' },
    { id: 12, color: 'cyan', class: 'Cyan' },
    { id: 13, color: 'gray', class: 'Gray' },
    { id: 14, color: 'gray-dark', class: 'dark gray' },
  ]
  //Socail buttons
  export const socialbuttons2 = [
    { id: 1, color: 'facebook', icon: 'fa fa-facebook' },
    { id: 2, color: 'twitter', icon: 'fa fa-twitter' },
    { id: 3, color: 'google', icon: 'fa fa-google' },
    { id: 4, color: 'youtube', icon: 'fa fa-youtube' },
    { id: 5, color: 'vimeo', icon: 'fa fa-vimeo' },
    { id: 6, color: 'dribbble', icon: 'fa fa-dribbble' },
    { id: 7, color: 'github', icon: 'fa fa-github' },
    { id: 8, color: 'instagram', icon: 'fa fa-instagram' },
    { id: 9, color: 'pinterest', icon: 'fa fa-pinterest' },
    { id: 10, color: 'vk', icon: 'fa fa-vk' },
    { id: 11, color: 'rss', icon: 'fa fa-rss' },
    { id: 12, color: 'flickr', icon: 'fa fa-flickr' },
  ]
  //Scial icon buttons
  export const socialbuttons = [
    { id: 1, color: 'facebook', icon: 'fa fa-facebook' },
    { id: 2, color: 'twitter', icon: 'fa fa-twitter' },
    { id: 3, color: 'google', icon: 'fa fa-google' },
    { id: 4, color: 'youtube', icon: 'fa fa-youtube' },
    { id: 5, color: 'vimeo', icon: 'fa fa-vimeo' },
    { id: 6, color: 'dribbble', icon: 'fa fa-dribbble' },
    { id: 7, color: 'github', icon: 'fa fa-github' },
    { id: 8, color: 'instagram', icon: 'fa fa-instagram' },
    { id: 9, color: 'pinterest', icon: 'fa fa-pinterest' },
  ]
         //*** Avatar Radius ***//
 export const Simpleavatar = [
    { id: 1, src1: Imagesdata('users4') },
    { id: 2, src1: Imagesdata('users5') },
    { id: 3, src1: Imagesdata('users3') },
    { id: 4, src1: Imagesdata('users2') },
    { id: 5, src1: Imagesdata('users1') },
  ]
  //Avatar list 
  export const avatarsizes = [
    { id: 1, src1: Imagesdata('users4'), class: 'avatar-sm' },
    { id: 2, src1: Imagesdata('users3'), class: '' },
    { id: 3, src1: Imagesdata('users5'), class: 'avatar-md' },
    { id: 4, src1: Imagesdata('users6'), class: 'avatar-lg' },
    { id: 5, src1: Imagesdata('users4'), class: 'avatar-xl' },
    { id: 6, src1: Imagesdata('users7'), class: 'avatar-xxl' },
  ]
  export const Avatarlist = [
    { id: 1, src1: Imagesdata('users8') },
    { id: 2, src1: Imagesdata('users8') },
    { id: 3, src1: Imagesdata('users9') },
    { id: 4, src1: Imagesdata('users8') },
    { id: 5, src1: Imagesdata('users11') },
  ]
  export const Simpleavatar1 = [
    { id: 1, src1: Imagesdata('users1') },
    { id: 2, src1: Imagesdata('users2') },
    { id: 3, src1: Imagesdata('users1') },
    { id: 4, src1: Imagesdata('users2') },
    { id: 5, src1: Imagesdata('users3') },
  ]

  //*** Avatar Rounded ***//
  export const avtarround = [
    { id: 1, src1: Imagesdata('users12') },
    { id: 2, src1: Imagesdata('users13') },
    { id: 3, src1: Imagesdata('users11') },
    { id: 4, src1: Imagesdata('users12') },
    { id: 5, src1: Imagesdata('users14') },
  ]
  export const avtarroundlist = [
    { id: 1, src1: Imagesdata('users12') },
    { id: 2, src1: Imagesdata('users1') },
    { id: 3, src1: Imagesdata('users19') },
    { id: 4, src1: Imagesdata('users2') },
    { id: 5, src1: Imagesdata('users14') },
  ]
  export const avatarsizes2= [
    { id: 1, src1: Imagesdata('users15'), class: 'avatar-sm' },
    { id: 2, src1: Imagesdata('users13'), class: '' },
    { id: 3, src1: Imagesdata('users16'), class: 'avatar-md' },
    { id: 4, src1: Imagesdata('users17'), class: 'avatar-lg' },
    { id: 5, src1: Imagesdata('users14'), class: 'avatar-xl' },
    { id: 6, src1: Imagesdata('users18'), class: 'avatar-xxl' },
  ]

        //*** DropDowns ***//
 export const dropdowns = [
   { id: 1, color: 'default' },
   { id: 2, color: 'primary' },
   { id: 3, color: 'success' },
   { id: 4, color: 'info' },
   { id: 5, color: 'warning' },
   { id: 6, color: 'danger' },
 ]
  //*** List Group ***//
  export const listgroups = [
    { id: 1, heading: 'Cras justo odio' },
    { id: 2, heading: 'Dapibus ac facilisis in' },
    { id: 3, heading: 'Morbi leo risus' },
    { id: 4, heading: 'Porta ac consectetur ac' },
    { id: 5, heading: 'Vestibulum at eros' },
  ]
  export const activelistgroups = [
    { id: 1, heading: 'Cras justo odio', active: 'active' },
    { id: 2, heading: 'Dapibus ac facilisis in', active: '' },
    { id: 3, heading: 'Morbi leo risus', active: '' },
    { id: 4, heading: 'Porta ac consectetur ac', active: '' },
    { id: 5, heading: 'Vestibulum at eros', active: '' },
  ]
  export const disablelistgroups = [
    { id: 1, heading: 'Cras justo odio', disable: 'disabled' },
    { id: 2, heading: 'Dapibus ac facilisis in', disable: '' },
    { id: 3, heading: 'Morbi leo risus', disable: '' },
    { id: 4, heading: 'Porta ac consectetur ac', disable: '' },
    { id: 5, heading: 'Vestibulum at eros', disable: '' },
  ]
  export const Contextuallistgroups = [
    { id: 1, heading: 'Dapibus ac facilisis in', color: 'default' },
    { id: 2, heading: 'Dapibus ac facilisis in', color: 'success' },
    { id: 3, heading: 'Cras sit amet nibh libero', color: 'info' },
    { id: 4, heading: 'Porta ac consectetur ac', color: 'warning' },
    { id: 5, heading: 'Vestibulum at eros', color: 'danger' },
  ]
  export const Colorlistgroups = [
    { id: 1, heading: 'Cras justo odio', color: 'primary' },
    { id: 2, heading: 'Dapibus ac facilisis in', color: 'danger' },
    { id: 3, heading: 'Morbi leo risus', color: 'success' },
    { id: 4, heading: 'Porta ac consectetur ac', color: 'warning' },
    { id: 5, heading: 'Vestibulum at eros', color: 'info' },
  ]
  export const Badgelistgroups = [
    { id: 1, heading: 'Cras justo odio', badge: '20' },
    { id: 2, heading: 'Dapibus ac facilisis in', badge: '15' },
    { id: 3, heading: 'Morbi leo risus', badge: '10' },
    { id: 4, heading: 'Porta ac consectetur ac', badge: '8' },
    { id: 5, heading: 'Vestibulum at eros', badge: '1' },
  ]
  export const Badgecolorlistgroups = [
    { id: 1, heading: 'Cras justo odio', badge: '20', color: 'primary' },
    { id: 2, heading: 'Dapibus ac facilisis in', badge: '15', color: 'danger' },
    { id: 3, heading: 'Morbi leo risus', badge: '10', color: 'success' },
    { id: 4, heading: 'Porta ac consectetur ac', badge: '8', color: 'warning' },
    { id: 5, heading: 'Vestibulum at eros', badge: '1', color: 'info' },
  ]
             //*** Tags ***//
 export const colortags= [
  { id: 1, color: 'blue', class: 'Blue tag' },
  { id: 2, color: 'azure', class: 'Azure tag' },
  { id: 3, color: 'indigo', class: 'Indigo tag' },
  { id: 4, color: 'purple', class: 'Purple tag' },
  { id: 5, color: 'pink', class: 'Pink tag' },
  { id: 6, color: 'red', class: 'Red tag' },
  { id: 7, color: 'orange', class: 'Orange tag' },
  { id: 8, color: 'yellow', class: 'Yellow tag' },
  { id: 9, color: 'lime', class: 'Lime tag' },
  { id: 10, color: 'green', class: 'Green tag' },
  { id: 11, color: 'teal', class: 'Teal tag' },
  { id: 12, color: 'cyan', class: 'Cyan tag' },
  { id: 13, color: 'gray', class: 'Gray tag' },
  { id: 14, color: 'gray-dark', class: 'Dark gray tag' },
]
export const alltags = [
  { id: 1, class: 'One' },
  { id: 2, class: 'Two' },
  { id: 3, class: 'Three' },
  { id: 4, class: 'Four' },
  { id: 5, class: 'Five' },
  { id: 6, class: 'Six' },
  { id: 7, class: 'Seven' },
  { id: 8, class: 'Eight' },
  { id: 9, class: 'Nine' },
  { id: 10, class: 'Ten' },
  { id: 11, class: 'Eleven' },
  { id: 12, class: 'Twelve' },
  { id: 13, class: 'Thirteen' },
  { id: 14, class: 'Fourteen' },
  { id: 15, class: 'Fifteen' },
  { id: 16, class: 'Sixteen' },
  { id: 17, class: 'Seventeen' },
  { id: 18, class: 'Eighteen' },
  { id: 19, class: 'Nineteen' },
  { id: 20, class: 'Twenty' },
]
export const avatars= [
  { id: 1, src1: Imagesdata("users11"), class: 'Victoria' },
  { id: 2, src1: Imagesdata("users4"), class: ' Nathan' },
  { id: 3, src1: Imagesdata("users1"), class: 'Alice' },
  { id: 4, src1: Imagesdata("users18"), class: 'Rose' },
  { id: 5, src1: Imagesdata("users16"), class: 'Peter' },
  { id: 6, src1: Imagesdata("users4"), class: 'Wayne' },
  { id: 7, src1: Imagesdata("users7"), class: 'Michelle' },
  { id: 8, src1: Imagesdata("users17"), class: 'Debra' },
]

          //*** Typography ***//
export const headers = [
  { id: 1, heading: 'Default Heading Text', class: 'h1.Heading', class5: 'h1.Heading', class1: 'h1.Heading', class2: 'h1.Heading', class3: 'h1.Heading', class4: 'h1.Heading', color: '', color1: '', color2: '', color3: '', color4: '', color5: '', },
  { id: 2, heading: 'Heading With Color Text', class: 'h1.Heading', class5: 'h1.Heading', class1: 'h1.Heading', class2: 'h1.Heading', class3: 'h1.Heading', class4: 'h1.Heading', color: 'text-primary', color1: 'text-info', color2: 'text-success', color3: 'text-danger', color4: 'text-secondary', color5: 'text-warning', },

]
export const headers1 = [
  { id: 1, heading: 'Heading-Inverse', color: 'inverse', color1: 'inverse', color2: 'inverse', color3: 'inverse', color4: 'inverse', color5: 'inverse', data:'Examples using heading-inverse css'},
  { id: 2, heading: 'Heading primary to danger', color: 'primary', color1: 'secondary', color2: 'success', color3: 'info', color4: 'warning', color5: 'danger',data:'Examples using heading-primary toheading-danger css' },

]

      //*** Badges ***//
 export const badges = [
   { id: 1, color: 'default' },
   { id: 2, color: 'primary' },
   { id: 3, color: 'success' },
   { id: 4, color: 'danger' },
   { id: 5, color: 'info' },
   { id: 6, color: 'warning' },
 ]
 export const Buttonbadges = [
  { id: 1, color: 'primary', data:'2'},
  { id: 2, color: 'secondary', data:'1'},
  { id: 3, color: 'success', data:'5'},
  { id: 4, color: 'info', data:'3'},
  { id: 5, color: 'warning', data:'6'},
  { id: 6, color: 'danger',data:'4' },
]
export const Buttonsquarebadges = [
  { id: 1, color: 'primary', data:'2'},
  { id: 2, color: 'success', data:'65'},
  { id: 3, color: 'secondary', data:'1'},
  { id: 4, color: 'info', data:'5333'},
]
export const Buttonroundbadges = [
  { id: 1, color: 'info', data:'3'},
  { id: 2, color: 'primary', data:'22'},
  { id: 3, color: 'secondary', data:'145'},
  { id: 4, color: 'success', data:'3225'},
]
export const Buttonborderbadges = [
  { id: 1, color: 'primary', data:'2'},
  { id: 2, color: 'success', data:'65'},
  { id: 3, color: 'secondary', data:'43'},
  { id: 4, color: 'info', data:'563'},
]
export const badge = [
  { id: 1, color: 'default' },
  { id: 2, color: 'primary' },
  { id: 3, color: 'success' },
  { id: 4, color: 'info' },
  { id: 5, color: 'warning' },
  { id: 6, color: 'danger' },
]
          //*** Panel ***//
export const panel = [
  {id:1, color:'primary'},
  {id:2, color:'secondary'},
  {id:3, color:'success'},
  {id:4, color:'danger'},
]
        //*** Thumbnails ***//
export const basicthumnails = [
  {id:1, src1:Imagesdata("media1") },
  {id:2, src1:Imagesdata("media2") },
  {id:3, src1:Imagesdata("media3") },
  {id:4, src1:Imagesdata("media5") },
]
export const custom = [
  {id:1, src1:Imagesdata('media19')},
  {id:2, src1:Imagesdata('media20')},
  {id:3, src1:Imagesdata('media21')},
]

          //*** Modal ***//

//Scale
export function Scale() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="primary"
        className="modal-effect d-grid mb-3"
       
        onClick={handleClickOpen}
      >
        Scale
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Message Preview
        <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <hr className='my-0' />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button  variant="secondary" className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//RightSlide
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
export function RightSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect d-grid mb-3"
       
        variant="primary"
        onClick={handleClickOpen}
      >
        Slide In Right
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Message Preview
        <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <hr className='my-0' />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button variant="secondary"className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//BottomSlide
const Bottomslide = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export function BottomSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect d-grid mb-3"
       
        variant="primary"
        onClick={handleClickOpen}
      >
        Slide In Bottom
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Bottomslide}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Message Preview
        <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <hr className='my-0' />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export const Datepicker = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button  className="modal-effect d-grid mb-3"
       
        variant="primary" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger"className="me-1" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="success"className="me-1" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
//ScrollBody
export function ScrollBody() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
       
        onClick={handleClickOpen("body")}
      >
        scrollbody
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle>Subscribe
        <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="success" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//PaperComponent
export function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
//DraggableModal
export function DraggableModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
       
        variant="primary"
        onClick={handleClickOpen}
      >
        DraggableModal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Message Preview
        <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//FormModal
export function FormModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
       
        variant="primary"
        onClick={handleClickOpen}
      >
        Form Modal
      </Button>
      <Dialog open={open}  onClose={handleClose}>
        <DialogTitle>Login From
          <Button
         onClick={handleClose}
          className="btn-close"
          variant=""
        >
          x
        </Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="secondary" className="me-1">Cancel</Button>
          <Button onClick={handleClose} variant="success" className="me-1">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//StaticbackdropModal
export function StaticbackdropModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"
       
        variant="primary"
        onClick={handleShow}
      >
        static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Modal title
          </Modal.Title>
        <Button onClick={() => setShow(false)} className="btn-close" variant=""> x</Button>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" className="me-1" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//MydModalWithGrid
export function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header >
        <Modal.Title >
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-effect  d-grid mb-3"
         
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
//Gridmodal
export function Gridmodal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"
       
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Grid Modal
      </Button>

      <MydModalWithGrid
        variant="primary"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
//CustomModal
export function CustomModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"
       
        variant="primary"
        onClick={() => setShow(true)}
      >
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header >
          <Modal.Title>Modal title
          </Modal.Title>
        <Button onClick={() => setShow(false)} className="btn-close" variant=""> x</Button>
        </Modal.Header>
        <Modal.Body>
          Modal body text goes here.It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"className="me-1" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success"className="me-1" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//MyVerticallyCenteredModal
export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title >
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-effect  d-grid mb-3"
         
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
//VerticallyCenteredModal
export function VerticallyCenteredModal() {
  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"
       
        variant="primary"
        onClick={() => setModalShow1(true)}
      >
 Vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
    </>
  );
}
//CenterModal
export function CenterModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
       
        variant="primary"
        onClick={handleClickOpen}
      >
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Message Preview
        <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button variant="secondary"className="me-1" onClick={handleClose}>Cancel</Button>
          <Button variant="success" className="me-1" onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

      //*** UserList ***//
    
  //Category

export function Category() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const Options = [
    {
      value: "category-1",
      label: "Latest",
    },
    {
      value: "category-2",
      label: "Older",
    },
  ];
  return (
    <MultiSelect options={Options} onChange={handleOnchange}  placeholder="--Select--" singleSelect="true" />
  );
}
//Tableuserdata
export function Tableuserdata() {
  const Datauser = [
    { IMG: Imagesdata("users1"), NAME: "Adam Cotter", DATE: "09 Dec 2017", ID: 1 },
    { IMG: Imagesdata("users18"), NAME: "Pauline Noble", DATE: "	26 Jan 2018", ID: 2 },
    { IMG: Imagesdata("users19"), NAME: "Sherilyn Metzel", DATE: "27 Jan 2018", ID: 3 },
    { IMG: Imagesdata("users12"), NAME: "Terrie Boaler", DATE: "20 Jan 2018", ID: 4 },
    { IMG: Imagesdata("users15"), NAME: "Rutter Pude", DATE: "13 Jan 2018", ID: 5 },
    { IMG: Imagesdata("users16"), NAME: "Clifford Benjamin", DATE: "25 Jan 2018", ID: 6 },
    { IMG: Imagesdata("users4"), NAME: "Thedric Romans", DATE: "12 Jan 2018", ID: 7 },
    { IMG: Imagesdata("users8"), NAME: "Haily Carthew", DATE: "	27 Jan 2018", ID: 8 },
    { IMG: Imagesdata("users16"), NAME: "Dorothea Joicey", DATE: "12 Dec 2017", ID: 9 },
    { IMG: Imagesdata("users3"), NAME: "Mikaela Pinel", DATE: "	10 Dec 2017", ID: 10 },
    { IMG: Imagesdata("users2"), NAME: "Donnell Farries", DATE: "	03 Dec 2017", ID: 11 },
    { IMG: Imagesdata("users5"), NAME: "Letizia Puncher", DATE: "09 Dec 2017", ID: 12 },
  ];
  return (
    <Table className="border-top table-bordered">
      <thead>
        <tr>
          <th className="text-center">Select</th>
          <th className="text-center">Photo</th>
          <th>Name</th>
          <th>Date</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {Datauser.map((list, index) => (
          <tr key={index} className="border-bottom">
            <td className="align-middle text-center">
              <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                <input
                  className="custom-control-input"
                  id={`item-${list.ID}`}
                  type="checkbox"
                />
                <label
                  className="custom-control-label text-center"
                  htmlFor={`item-${list.ID}`}
                ></label>
              </div>
            </td>
            <td className="align-middle text-center">
              <img alt="" className="avatar avatar-md br-7" src={list.IMG} />
            </td>
            <td className="text-nowrap align-middle">{list.NAME}</td>
            <td className="text-nowrap align-middle">
              <span>{list.DATE}</span>
            </td>
            <td className="align-middle text-center">
              <div className="btn-group align-top">
                <button className="btn btn-sm btn-primary badge" type="button">
                  Edit
                </button>
                <button className="btn btn-sm btn-primary badge" type="button">
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

          //***Cryptocurrencies***//
  export const Datacrypto=[
{NAME:"Bitcoin",ICON:Imagesdata("bitcoin"),PRICE:"$10513.00",HOUR:"-7%",Color:"danger",MARKETCAP:"$179,470,305,923",CIRCULATINGSUPPLY:"16,819,612 BTC",VOLUME24H:"$9,578,830,000",CMGR:"8.11% / 57",INFLATION:"0.36%",},
{NAME:"Ethereum",ICON:Imagesdata("ethereum"),PRICE:"$966.61",HOUR:"-6%",Color:"danger",MARKETCAP:"$179,470,305,923",CIRCULATINGSUPPLY:"97,145,024 ETH",VOLUME24H:"$3,466,060,000",CMGR:"22.62% / 29",INFLATION:"0.64%",},
{NAME:"Ripple",ICON:Imagesdata("ripple"),PRICE:"$1.2029",HOUR:"-11%",Color:"danger",MARKETCAP:"$47,649,145,657",CIRCULATINGSUPPLY:"38,739,144,704 XRP",VOLUME24H:"$2,081,450,000",CMGR:"10.85% / 53",INFLATION:"0.06%",},
{NAME:"Bitcoin Cash",ICON:Imagesdata("bitcoincash"),PRICE:"$1547.00",HOUR:"-11%",Color:"danger",MARKETCAP:"$26,720,210,956",CIRCULATINGSUPPLY:"16,925,988 BCH",VOLUME24H:"$598,337,000",CMGR:"21.30% / 6",INFLATION:"0.32%",},
{NAME:"Cardano",ICON:Imagesdata("cardano"),PRICE:"	$0.550768",HOUR:"-9%",Color:"danger",MARKETCAP:"	$14,279,800,786",CIRCULATINGSUPPLY:"25,927,069,696 ADA",VOLUME24H:"$466,381,000",CMGR:"205.35% / 3",INFLATION:"0.00%",},
{NAME:"Litecoin",ICON:Imagesdata("litecoin"),PRICE:"$173.86",HOUR:"-7%",Color:"danger",MARKETCAP:"$9,670,920,267",CIRCULATINGSUPPLY:"54,873,584 LTC",VOLUME24H:"$430,524,000",CMGR:"	6.87% / 57",INFLATION:"0.80%",},
{NAME:"EOS",ICON:Imagesdata("eos"),PRICE:"$13.394",HOUR:"5%",Color:"success",MARKETCAP:"$8,420,143,033",CIRCULATINGSUPPLY:"621,412,800 EOS",VOLUME24H:"$2,864,780,000",CMGR:"53.25% / 6",INFLATION:"11.56%",},
{NAME:"NEM",ICON:Imagesdata("nem"),PRICE:"$0.935049",HOUR:"-11%",Color:"danger",MARKETCAP:"	$8,415,440,999",CIRCULATINGSUPPLY:"8,999,999,488 XEM",VOLUME24H:"$66,061,000",CMGR:"26.99% / 33",INFLATION:"0.24%",},
{NAME:"Stellar",ICON:Imagesdata("stellar"),PRICE:"$0.467813",HOUR:"2%",Color:"success",MARKETCAP:"	$8,358,735,080",CIRCULATINGSUPPLY:"17,867,683,840 XLM",VOLUME24H:"$370,297,000",CMGR:"13.12% / 41",INFLATION:"0.19%",},
{NAME:"NEO",ICON:Imagesdata("neo"),PRICE:"$118.61",HOUR:"-9%",Color:"danger",MARKETCAP:"	$7,693,400,000",CIRCULATINGSUPPLY:"65,000,000 NEO",VOLUME24H:"$318,308,000",CMGR:"62.68% / 15",INFLATION:"0.00%",},
{NAME:"IOTA",ICON:Imagesdata("iota"),PRICE:"$2.34",HOUR:"-14%",Color:"danger",MARKETCAP:"	$6,504,100,862",CIRCULATINGSUPPLY:"2,779,530,240 MIOTA",VOLUME24H:"$103,132,000",CMGR:"23.27% / 7",INFLATION:"-0.02%",},
{NAME:"Dash",ICON:Imagesdata("dash"),PRICE:"$747.222",HOUR:"-8%",Color:"danger",MARKETCAP:"	$5,881,413,815",CIRCULATINGSUPPLY:"7,833,738 DASH",VOLUME24H:"$96,147,900",CMGR:"19.19% / 47",INFLATION:"0.81%",},
{NAME:"Monero",ICON:Imagesdata("monero"),PRICE:"$305.16",HOUR:"-11%",Color:"danger",MARKETCAP:"$4,778,157,533",CIRCULATINGSUPPLY:"15,633,286 XMR",VOLUME24H:"$100,788,000",CMGR:"11.88% / 44",INFLATION:"0.78%",},
{NAME:"TRON",ICON:Imagesdata("tron"),PRICE:"$0.067691",HOUR:"-5%",Color:"danger",MARKETCAP:"$4,450,560,896",CIRCULATINGSUPPLY:"65,748,193,280 TRX",VOLUME24H:"$581,651,000",CMGR:"142.69% / 4",INFLATION:"0.00%",},
{NAME:"Bitcoin Gold",ICON:Imagesdata("bitcoinglod"),PRICE:"$181.39",HOUR:"-7%",Color:"danger",MARKETCAP:"$3,084,108,676",CIRCULATINGSUPPLY:"16,779,700 BTG",VOLUME24H:"$199,652,000",CMGR:"-25.44% / 3",INFLATION:"0.34%",},
          
 ]

     //**Profile **//
export const profile = [
  {id:1, heading:'James Thomas', src1:Imagesdata("users15")},
  {id:2, heading:' George Clooney', src1:Imagesdata("users9")},
  {id:3, heading:' Robert Downey Jr.', src1:Imagesdata("users20")},
  {id:4, heading:' Emma Watson', src1:Imagesdata("users12")},
  {id:5, heading:'  Mila Kunis', src1:Imagesdata("users4")},
  {id:6, heading:' Ryan Gossling', src1:Imagesdata("users6")},
]

        //*** Edit Profile ***//
//Selectdate

export const optionselectdate = [
   {
     value: "Group-1",
     label: "Select Day",
   },
   {
     value: "Group-2",
     label: "1",
   },
   {
     value: "Group-3",
     label: "2",
   },
   {
     value: "Group-4",
     label: "3",
   },
   {
     value: "Group-5",
     label: "4",
   },
   {
     value: "Group-6",
     label: "5",
   },
   {
     value: "Group-7",
     label: "6",
   },
   {
     value: "Group-8",
     label: "7",
   },
   {
     value: "Group-9",
     label: "8",
   },
   {
     value: "Group-10",
     label: "9",
   },
   {
     value: "Group-11",
     label: "10",
   },
   {
     value: "Group-12",
     label: "11",
   },
   {
     value: "Group-13",
     label: "12",
   },
   {
     value: "Group-14",
     label: "13",
   },
   {
     value: "Group-15",
     label: "14",
   },
   {
     value: "Group-16",
     label: "15",
   },
   {
     value: "Group-17",
     label: "16",
   },
   {
     value: "Group-18",
     label: "17",
   },
   {
     value: "Group-19",
     label: "18",
   },
   {
     value: "Group-20",
     label: "19",
   },
   {
     value: "Group-21",
     label: "20",
   },
   {
     value: "Group-22",
     label: "21",
   },
   {
     value: "Group-23",
     label: "22",
   },
   {
     value: "Group-24",
     label: "23",
   },
   {
     value: "Group-25",
     label: "24",
   },
   {
     value: "Group-26",
     label: "25",
   },
   {
     value: "Group-27",
     label: "26",
   },
   {
     value: "Group-28",
     label: "27",
   },
   {
     value: "Group-29",
     label: "28",
   },
   {
     value: "Group-30",
     label: "29",
   },
   {
     value: "Group-31",
     label: "30",
   },
 ];

//Dateofbirth
export const optionDateofbirth = [
   {
     value: "Group-1",
     label: "Select Month",
   },
   {
     value: "Group-2",
     label: "January",
   },
   {
     value: "Group-3",
     label: "February",
   },
   {
     value: "Group-4",
     label: "March",
   },
   {
     value: "Group-5",
     label: "April",
   },
   {
     value: "Group-6",
     label: "May",
   },
   {
     value: "Group-7",
     label: "June",
   },
   {
     value: "Group-8",
     label: "July",
   },
   {
     value: "Group-9",
     label: "August",
   },
   {
     value: "Group-10",
     label: "September",
   },
   {
     value: "Group-11",
     label: "October",
   },
   {
     value: "Group-12",
     label: "November",
   },
   {
     value: "Group-13",
     label: "December",
   },
 ];

//Selectyear
 export const optionselectyear = [
   {
     value: "Group-1",
     label: "Select Year",
   },
   {
     value: "Group-2",
     label: "2021",
   },
   {
     value: "Group-3",
     label: "2020",
   },
   {
     value: "Group-4",
     label: "2019",
   },
   {
     value: "Group-5",
     label: "2018",
   },
   {
     value: "Group-6",
     label: "2017",
   },
   {
     value: "Group-7",
     label: "2016",
   },
   {
     value: "Group-8",
     label: "2015",
   },
   {
     value: "Group-9",
     label: "2014",
   },
   {
     value: "Group-10",
     label: "2013",
   },
   {
     value: "Group-11",
     label: "2012",
   },
   {
     value: "Group-12",
     label: "2011",
   },
 ];
//CustomEditComponent
export const Dataeditprofile = [
  {
    ID: "1",
    PROJECTNAME: "At vero eos et accusamus et iusto odio",
    BACKEND: "PHP",
    DEADLINE: "15/11/2018",
    TEAMMEMBERS: "15 Members",
  },
  {
    ID: "2",
    PROJECTNAME: "voluptatum deleniti atque corrupti quos",
    BACKEND: "Angular js",
    DEADLINE: "25/11/2018",
    TEAMMEMBERS: "12 Members",
    Class: "striped table-vcenter table-outline text-nowrap",
  },
  {
    ID: "3",
    PROJECTNAME: "dignissimos ducimus qui blanditiis praesentium",
    BACKEND: "Java",
    DEADLINE: "5/12/2018",
    TEAMMEMBERS: "20  Members",
  },
  {
    ID: "4",
    PROJECTNAME: "deleniti atque corrupti quos dolores",
    BACKEND: "Phython",
    DEADLINE: "14/12/2018",
    TEAMMEMBERS: "10  Members",
  },
  {
    ID: "5",
    PROJECTNAME: "et quas molestias excepturi sint occaecati",
    BACKEND: "Phython",
    DEADLINE: "4/12/2018",
    TEAMMEMBERS: "17  Members",
  },
];


         //*** MailInbox ***//
//MailInboxdata
 export const mailInboxdata = [
    {
      STAR: "warning",
      SEMIBOLD: "Tim Reid, S P N",
      MESSAGE: "Boost Your Website Traffic",
      MONTH: "April 01",
    },
    {
      STAR: "warning",
      SEMIBOLD: "Freelancer.com",
      MESSAGE: "Stop wasting your visitors",
      MONTH: "May 23",
    },
    {
      STAR1: "danger",
      SEMIBOLD: "PHPClass",
      MESSAGE: "Added a new className: Login className Fast Site",
      MONTH: "9:27 AM",
      UNEAD: "unread",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Facebook",
      MESSAGE: "Somebody requested a new password",
      MONTH: "June 13",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "Skype",
      MESSAGE: "Password successfully changed",
      MONTH: "March 24",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "Google+",
      MESSAGE: "alireza, do you know",
      MONTH: "March 09",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "WOW Slider",
      MESSAGE: "New WOW Slider v7.8 - 67% off",
      MONTH: "March 14",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "LinkedIn Pulse",
      MESSAGE: "The One Sign Your Co-Worker Will Stab",
      MONTH: "Feb 19",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Google Webmaster",
      MESSAGE: "Improve the search presence of WebSite",
      MONTH: "March 15",
      UNEAD: "unread",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "JW Player",
      MESSAGE: "Last Chance: Upgrade to Pro for",
      MONTH: "March 15",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Drupal Community",
      MESSAGE: "Welcome to the Drupal Community",
      MONTH: "March 04",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "Zoosk",
      MESSAGE: "7 new singles we think you'll like",
      MONTH: "May 14",
    },
    {
      STAR: "",
      STAR1: "danger",
      SEMIBOLD: "LinkedIn",
      MESSAGE: "Alireza: Nokia Networks, System Group and",
      MONTH: "February 25",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Facebook",
      MESSAGE: "Your account was recently logged into",
      MONTH: "April 07",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Twitter",
      MESSAGE: "Your Twitter password has been changed",
      MONTH: "March 04",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "InternetSeer",
      MESSAGE: "Performance Report",
      MONTH: "July 14",
    },
    {
      STAR: "",
      STAR1: "danger",
      SEMIBOLD: "Bertina",
      MESSAGE: "IMPORTANT: Don't lose your domains!",
      MONTH: "June 16",
    },
    {
      STAR: "warning",
      STAR1: "danger",
      SEMIBOLD: "Laura Gaffin, S P N",
      MESSAGE: "Your Website On Google (Higher Rankings Are Better)",
      MONTH: "August 10",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Facebook",
      MESSAGE: "Alireza Zare Login faild",
      MONTH: "feb 14",
    },
    {
      STAR: "warning",
      STAR1: "",
      SEMIBOLD: "AddMe.com",
      MESSAGE: "Submit Your Website to the AddMe Business Directory",
      MONTH: "August 10",
    },
    {
      STAR: "",
      STAR1: "",
      SEMIBOLD: "Terri Rexer, S P N",
      MESSAGE: "Forget Google AdWords: Un-Limited Clicks fo",
      MONTH: "April 14",
    },
  ];
           //** About Company **//
export const company = [
  {id:1, heading:'Why Zanex ?', data:'majority have suffered alteration in some form, by injected humour'},
  {id:2, heading:'What is Our Services?', data:'majority have suffered alteration in some form, by injected humour'},
]
export const aboutcompany = [
  {id:1, heading:'Company history', src1:Imagesdata("media1"), color:'primary'},
  {id:2, heading:'About Team', src1:Imagesdata("media2"), color:'secondary'},
  {id:3, heading:'Company Growth', src1:Imagesdata("media6"), color:'success'},
  {id:4, heading:'Our Statistics', src1:Imagesdata("media7"), color:'danger'},
]
             //** Services **//
export const service = [
  {id:1, icon:'icon icon-people', heading:'Creative Solutions', color:'primary'},
  {id:2, icon:'icon icon-clock', heading:'Trace Your time', color:'danger'},
  {id:3, icon:'fa fa-building-o', heading:'Business Framework', color:'success'},
  {id:4, icon:'icon icon-action-redo', heading:'Shares', color:'secondary'},
]
export const service1 = [
  {id:1, heading:'Web design', color:'primary', icon:'fa-globe'},
  {id:2, heading:'Web Development', color:'warning', icon:'fa-building-o fa'},
  {id:3, heading:'Wordpress', color:'pink', icon:'fa-file-word-o'},
  {id:4, heading:'photography', color:'danger', icon:'fa-camera'},
  {id:5, heading:'Development', color:'purple', icon:'fa-pencil-square-o '},
  {id:6, heading:'Android', color:'success', icon:'fa-eercast '},
]
         //** Invoice **//
//Tableinvoice
export const Datainvoice = [
  {
    ID: "1",
    TITLE: "Logo Design",
    LINE: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    NUMBER: "2",
    PRICE: "$674",
    SUBTOTAL: "$1,308",
  },
  {
    ID: "2",
    TITLE: "Website wireframe for 2 pages",
    LINE: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    NUMBER: "4",
    PRICE: "$1,500",
    SUBTOTAL: "$6,000",
  },
  {
    ID: "3",
    TITLE: "PSD to HTML coding",
    LINE: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    NUMBER: "3",
    PRICE: "$530",
    SUBTOTAL: "$1,690",
  },
  {
    ID: "4",
    TITLE: "E-commerce Development",
    LINE: "When our power of choice is untrammelled and when nothing prevents our being able",
    NUMBER: "2",
    PRICE: "$800",
    SUBTOTAL: "$1,600",
  },
  {
    ID: "5",
    TITLE: "Design and layout of 2 pages in Photoshop",
    LINE: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    NUMBER: "2",
    PRICE: "$720",
    SUBTOTAL: "$1,440",
  },
];
export function Printpage(){
  const print=()=>{
     window.print();
 }
   return (
 
      
   <div className="card-footer text-end">
               <button
                 type="button"
                 className="btn btn-primary mb-1 me-2"
                 // string="javascript:window.print();"
                 onClick={print}
               >
                 <i className="si si-wallet"></i> Pay Invoice
               </button>
               <button
                 type="button"
                 className="btn btn-success mb-1 me-2"
                 // string="javascript:window.print();"
                 onClick={print}
               >
                 <i className="si si-paper-plane"></i> Send Invoice
               </button>
               <button
                 type="button"
                 className="btn btn-info mb-1 me-2"
                 // string="javascript:window.print();"
                 onClick={print}
               >
                 <i className="si si-printer"></i> Print Invoice
               </button>
             </div>
 
   );
 }
           //** Pricing Table **//
//STARTERPACK
export  const DataSTARTERPACK = [
    {
      COL: "3",
      ICON: "rocket",
      BG: "primary",
      NAME: " Starter Pack",
      PRICE: "$15",
      FREE: "2 Free",
      ONE: "3",
      DATABASE: "1",
    },
    {
      COL: "3",
      ICON: "trophy",
      BG: "success",
      NAME: " Professional Pack",
      PRICE: "$25",
      FREE: "3 Free",
      ONE: "4",
      DATABASE: "2 ",
    },
    {
      COL: "3",
      ICON: "umbrella",
      BG: "secondary",
      NAME: " ENTERPRISE PACK",
      PRICE: "$99",
      FREE: "5 Free",
      ONE: "8",
      DATABASE: "2",
    },

    {
      COL: "3",
      ICON: "cube",
      BG: "info",
      NAME: "UNLIMITED PACK",
      PRICE: "$35",
      FREE: "6  Free",
      ONE: "3",
      DATABASE: "2",
    },
  ];
  //STARTERPACK1
 export const DataSTARTERPACK1 = [
    {
      BG: "primary",
      COL: "3",
      PACK: "Free",
      DAYS: "30 ",
      PRICE: "$0",
      NUMBER: "4",
      fe: "check",
      fe2: "x",
      fe3: "x",
      COLOR: "success",
      COLOR1: "danger",
      COLORS: "danger",
    },
    {
      BG: "success",
      COL: "3",
      PACK: "PREMIUM",
      DAYS: "50 ",
      PRICE: "$65",
      NUMBER: "60",
      fe: "check",
      fe2: "x",
      fe3: "x",
      COLOR: "success",
      COLOR1: "danger",
      COLORS: "danger",
    },
    {
      BG: "danger",
      COL: "3",
      PACK: "ENTERPRISE",
      DAYS: "180 ",
      PRICE: "$100",
      NUMBER: "100 ",
      fe: "check",
      fe2: "check",
      fe3: "x",
      COLOR: "success",
      COLOR1: "danger",
      COLORS: "success",
    },
    {
      BG: "info",
      COL: "3",
      PACK: "UNLIMITED",
      DAYS: "365",
      PRICE: "$150",
      NUMBER: "Unlimited ",
      fe: "check",
      fe2: "check",
      fe3: "check",
      COLOR: "success",
      COLOR1: "success",
      COLORS: "success",
    },
  ];
  //Pricingcards4colums
 export const Data = [
    {
      BG: "primary",
      ID: "Personal",
      PRICE: "$15",
      FREE: "2",
      ONE: "3",
      DATA: "1",
    },
    {
      BG: "info",
      ID: "Team",
      PRICE: "$25",
      FREE: "3",
      ONE: "4",
      DATA: "2",
    },
    {
      BG: "success",
      ID: "Business",
      PRICE: "$35",
      FREE: "4",
      ONE: "6",
      DATA: "2",
    },
    {
      BG: "danger",
      ID: "Corporate",
      PRICE: "$99",
      FREE: "5",
      ONE: "8",
      DATA: "2",
    },
  ];
//SVGpaths
 export const DATAsvg = [
    {
      COL: "3 primary",
      TITLE: "Basic",
      PRICE: "120",
      BG: "primary",
    },
    {
      COL: "3 info",
      TITLE: "Premium",
      PRICE: "150",
      BG: "info",
    },
    {
      COL: "3 secondary",
      TITLE: "Enterprise",
      PRICE: " 180",
      BG: "secondary",
    },
    {
      COL: "3 success",
      TITLE: "Enterprise",
      PRICE: "200",
      BG: "success",
    },
  ];
//COLUMNPRICE
 export  const DATACOLUMNPRICE = [
    {
      ID: "Basic",
      PRICE: "$10",
      FREE: "2",
      ONE: "2",
      DATA: "1",
      BG: "primary",
    },
    {
      ID: "PREMIUM",
      PRICE: "$49",
      FREE: "3",
      ONE: "5",
      DATA: "3",
      BG: "info",
    },
    {
      ID: "ENTERPRISE",
      PRICE: "$99",
      FREE: "10",
      ONE: "10",
      DATA: "8",
      BG: "success",
    },
    {
      ID: "UNLIMITED",
      PRICE: "$139",
      FREE: "12",
      ONE: "10",
      DATA: "6",
      BG: "danger",
    },
  ];
            //** Blog **//
export const blog = [
  {id:1, src1:Imagesdata("media19"), color:'primary'},
  {id:2, src1:Imagesdata("media12"), color:'info'},
  {id:3, src1:Imagesdata("media17"), color:'success'},
]
export const blog1 = [
  {id:1, src1:Imagesdata("media20"), color:'primary'},
  {id:2, src1:Imagesdata("media23"), color:'warning'},
  {id:3, src1:Imagesdata("media22"), color:'info'},
]
           //** Blog Details **//
export const detail = [
  {id:1, src1:Imagesdata("users1"), heading:'Simon Sais'},
  {id:2, src1:Imagesdata("users3"), heading:'Cherry Blossom'},
  {id:3, src1:Imagesdata("users5"), heading:'Ivan Notheridiya'},
  {id:4, src1:Imagesdata("users15"), heading:'Manny Jah'},
]
export const detail1 = [
  {id:1, src1:Imagesdata("media19"), heading:'Generator on the Internet..'},
  {id:2, src1:Imagesdata("media22"), heading:'Voluptatem quia voluptas...'},
  {id:3, src1:Imagesdata("media12"), heading:'Generator on the Internet..'},
  {id:4, src1:Imagesdata("media25"), heading:'Voluptatem quia voluptas...'},
]
export const tag = [
  {id:1, heading:'Development'},
  {id:2, heading:'Design'},
  {id:3, heading:'Technology'},
  {id:4, heading:'Popular'},
  {id:5, heading:'Codiegniter'},
  {id:6, heading:'Javascript'},
  {id:7, heading:'Bootstrap'},
  {id:8, heading:'PHP'},
]

//Shopcardlist
 export const playerData = [
    {
      IMAGE: Imagesdata('pngs9'),
      PRICE: "$16,599",
      TITLE: "Bracelets",
      PRICES: "$19,799",
      RIBBON: "ribbon",
      NEW: "new",
      STAR: "star",
      STAR1: "star",
      STAR2: "star-half-o",
      STAR3: "star-o",
    },
    {
      IMAGE: Imagesdata('pngs1'),
      PRICE: "$599",
      TITLE: "Cup",
      PRICES: "$799",
      RIBBON: "ribbon1",
      NEW: "25%",
      STAR: "star",
      STAR1: "star-half-o",
      STAR2: "star-o",
      STAR3: "star-o",
    },
    {
      IMAGE: Imagesdata('pngs7'),
      PRICE: "$25,239",
      TITLE: "Stool",
      PRICES: "$34,399",
      STAR: "star",
      STAR1: "star",
      STAR2: "star",
      STAR3: "star-half-o",
    },
    {
      IMAGE: Imagesdata('pngs2'),
      PRICE: "$345",
      TITLE: "Video Game",
      PRICES: "$459",
      RIBBON: "ribbon1",
      NEW: "25%",
      STAR: "star",
      STAR1: "star",
      STAR2: "star-half-o",
      STAR3: "star-o",
    },
    {
      IMAGE: Imagesdata('pngs4'),
      PRICE: "$277",
      TITLE: "Flower Pot",
      PRICES: "$456",
      STAR: "star-half-o",
      STAR1: "star-o",
      STAR2: "star-o",
      STAR3: "star-o",
    },
    {
      IMAGE:Imagesdata('pngs8'),
      PRICE: "$567",
      TITLE: "Watch",
      PRICES: "$866",
      STAR: "star",
      STAR1: "star",
      STAR2: "star",
      STAR3: "star-half-o",
    },
    {
      IMAGE: Imagesdata('pngs3'),
      PRICE: "$455",
      TITLE: "Headset",
      PRICES: "$567",
      STAR: "star",
      STAR1: "star-half-o",
      STAR2: "star-o",
      STAR3: "star-o",
    },
    {
      IMAGE: Imagesdata('pngs5'),
      PRICE: "$345",
      TITLE: "Chair",
      PRICES: "$499",
      STAR: "star",
      STAR1: "star",
      STAR2: "star-half-o",
      STAR3: "star-o",
    },
    {
      IMAGE: Imagesdata('pngs6'),
      PRICE: "$543",
      TITLE: "Goggles",
      PRICES: "$688",
      RIBBON: "ribbon1",
      NEW: "25%",
      STAR: "star",
      STAR1: "star",
      STAR2: "star",
      STAR3: "star-half-o",
    },
  ];
  //Category
 export const Optioncategory = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "Dress",
    },
    {
      value: "category-3",
      label: "Canada",
    },
    {
      value: "category-4",
      label: "Bags &amp; Purses",
    },
    {
      value: "category-5",
      label: "Coat &amp; Jacket",
    },
    {
      value: "category-6",
      label: "Beauty",
    },
    {
      value: "category-7",
      label: "Jeans",
    },
    {
      value: "category-8",
      label: "Jewellery",
    },
    {
      value: "category-9",
      label: "Electronics",
    },
    {
      value: "category-10",
      label: "Sports",
    },
    {
      value: "category-11",
      label: "Technology",
    },
    {
      value: "category-12",
      label: "Watches",
    },
    {
      value: "category-13",
      label: "Accessories",
    },
  ];
  //Brand
 export const Optioncategory1 = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "White",
    },
    {
      value: "category-3",
      label: "Black",
    },
    {
      value: "category-4",
      label: "Red",
    },
    {
      value: "category-5",
      label: "Green",
    },
    {
      value: "category-6",
      label: "Blue",
    },
    {
      value: "category-7",
      label: "Yellow",
    },
  ];
  //Type
export  const Optioncategory2 = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "Extra Small",
    },
    {
      value: "category-3",
      label: "Small",
    },
    {
      value: "category-4",
      label: "Medium",
    },
    {
      value: "category-5",
      label: "Large",
    },
    {
      value: "category-6",
      label: "Extra Large",
    },
  ];
  //Color
 export const Optioncategory3 = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "White",
    },
    {
      value: "category-3",
      label: "Black",
    },
    {
      value: "category-4",
      label: "Red",
    },
    {
      value: "category-5",
      label: "Green",
    },
    {
      value: "category-6",
      label: "Blue",
    },
    {
      value: "category-7",
      label: "Yellow",
    },
  ];
      //** Product Details **//
//Category
export  const Optioncategorydetail = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "Dress",
    },
    {
      value: "category-3",
      label: "Canada",
    },
    {
      value: "category-4",
      label: "Bags &amp; Purses",
    },
    {
      value: "category-5",
      label: "Coat &amp; Jacket",
    },
    {
      value: "category-6",
      label: "Beauty",
    },
    {
      value: "category-7",
      label: "Jeans",
    },
    {
      value: "category-8",
      label: "Jewellery",
    },
    {
      value: "category-9",
      label: "Electronics",
    },
    {
      value: "category-10",
      label: "Sports",
    },
    {
      value: "category-11",
      label: "Technology",
    },
    {
      value: "category-12",
      label: "Watches",
    },
    {
      value: "category-13",
      label: "Accessories",
    },
  ];
  //Brand
export  const Optioncategorydetails = [
    {
      value: "category-2",
      label: "White",
    },
    {
      value: "category-3",
      label: "Black",
    },
    {
      value: "category-4",
      label: "Red",
    },
    {
      value: "category-5",
      label: "Green",
    },
    {
      value: "category-6",
      label: "Blue",
    },
    {
      value: "category-7",
      label: "Yellow",
    },
  ];
  //Type
 export const Optioncategorydetaild = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "Extra Small",
    },
    {
      value: "category-3",
      label: "Small",
    },
    {
      value: "category-4",
      label: "Medium",
    },
    {
      value: "category-5",
      label: "Large",
    },
    {
      value: "category-6",
      label: "Extra Large",
    },
  ];
  //Color
 export const Optioncategorydetaildd = [
    {
      value: "category-1",
      label: "--Select--",
    },
    {
      value: "category-2",
      label: "White",
    },
    {
      value: "category-3",
      label: "Black",
    },
    {
      value: "category-4",
      label: "Red",
    },
    {
      value: "category-5",
      label: "Green",
    },
    {
      value: "category-6",
      label: "Blue",
    },
    {
      value: "category-7",
      label: "Yellow",
    },
  ];
  //Carouseldatalist
export const Carouseldata = [
  {
    IMG: Imagesdata("pngs1"),
    TITLE: "Cup",
    PRICE: "$999.00",
    PRICE2: "$799.00",
    BUY: "primary",
  },
  {
    IMG: Imagesdata("pngs2"),
    TITLE: "Video Game",
    PRICE: "$87.00",
    PRICE2: "$25.00",
    BUY: "secondary",
  },
  {
    IMG: Imagesdata("pngs3"),
    TITLE: "Headset",
    PRICE: "$59.00",
    PRICE2: "$34.00",
    BUY: "success",
  },
  {
    IMG: Imagesdata("pngs4"),
    TITLE: "Flower pot",
    PRICE: "$54.00",
    PRICE2: "$39.00",
    BUY: "info",
  },
  {
    IMG: Imagesdata("pngs5"),
    TITLE: "Royal Chair",
    PRICE: "$37.00",
    PRICE2: "$25.00",
    BUY: "danger",
  },
  {
    IMG: Imagesdata("pngs7"),
    TITLE: "Stool",
    PRICE: "$35.00",
    PRICE2: "$19.00",
    BUY: "warning",
  },
  {
    IMG: Imagesdata("pngs8"),
    TITLE: "Clock",
    PRICE: "$35.00",
    PRICE2: "$19.00",
    BUY: "secondary",
  },
  {
    IMG: Imagesdata("pngs6"),
    TITLE: "Goggles",
    PRICE: "$45.00",
    PRICE2: "$29.00",
    BUY: "secondary",
  },
];

           //** ShoppingCart **//
//ShoppingData
export const Datacard = [
  {
    PREVIEW: Imagesdata('pngs1'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$568",
    Quantity: 1 ,
  },
  {
    PREVIEW: Imagesdata('pngs2'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PREVIEW: Imagesdata('pngs3'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 4,
  },
  {
    PREVIEW: Imagesdata('pngs4'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PREVIEW: Imagesdata('pngs5'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 2,
  },
  {
    PREVIEW: Imagesdata('pngs6'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 1,
  },
  {
    PREVIEW: Imagesdata('pngs7'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,027",
    Quantity: 3,
  },
  {
    PREVIEW: Imagesdata('pngs8'),
    TITLE: "laborum et dolorum fuga",
    PRICE: "$1,589",
    Quantity: 4,
  },
];
        //** Wishlist **//
//Wishlistdata
 export const Datawishlist = [
    {
      id:1,
      IMG: Imagesdata('pngs1'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$568",
      STATUS: "stock ",
      bgColor: "success",
    },
    {
      id:2,
      IMG: Imagesdata('pngs9'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$1,027",
      STATUS: "instock",
      bgColor: "danger",
    },
    {
      id:3,
      IMG: Imagesdata('pngs1'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$1,589",
      STATUS: "stock",
      bgColor: "success",
    },
    {
      id:4,
      IMG: Imagesdata('pngs2'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$356",
      STATUS: "stock",
      bgColor: "success",
    },
    {
      id:5,
      IMG: Imagesdata('pngs3'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$1,245",
      STATUS: "instock",
      bgColor: "danger",
    },
    {
      id:6,
      IMG: Imagesdata('pngs4'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$783",
      STATUS: "stock",
      bgColor: "success",
    },
    {
      id:7,
      IMG: Imagesdata('pngs5'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$4,876",
      STATUS: "stock",
      bgColor: "success",
    },
    {
      id:8,
      IMG: Imagesdata('pngs6'),
      TITLE: "laborum et dolorum fuga",
      PRICE: "$13,876",
      STATUS: "stock",
      bgColor: "success",
    },
  ];

               //** CheckOut ***//
//Counrtcheckout
 export const optionCounteryout = [
   {
     value: "category-1",
     label: "--Select--",
   },
   {
     value: "category-2",
     label: "Germany",
   },
   {
     value: "category-3",
     label: "Canada",
   },
   {
     value: "category-4",
     label: "Usa",
   },
   {
     value: "category-5",
     label: "Aus",
   },
 ];
        //** FileManager List **//
export const list = [
  {id:1, heading:'file.pdf', src:Imagesdata("pdf"), data:'32 KB' , class:"mx-auto"},
  {id:2, heading:'image1.jpg', src:Imagesdata("files7"), data:'76 KB' , class:""},
  {id:3, heading:'excel.xls', src:Imagesdata("excel"), data:'34 KB' , class:"mx-auto"},
  {id:4, heading:'image2.jpg', src:Imagesdata("files2"), data:'66 KB' , class:""},
  {id:5, heading:'demo.ppt', src:Imagesdata("ppt1"), data:'67 KB' , class:"mx-auto"},
  {id:6, heading:'video.mp4', src:Imagesdata("video"), data:'320 KB' , class:"mx-auto"},
  {id:7, heading:'image2.jpg', src:Imagesdata("files4"), data:'66 KB' , class:""},
  {id:8, heading:'word.doc', src:Imagesdata("word"), data:'320 KB' , class:"mx-auto"},
  {id:9, heading:'mountain.jpg', src:Imagesdata("files1"), data:'320 KB' , class:""},
  {id:10, heading:'file.pdf', src:Imagesdata("pdf"), data:'32 KB' , class:"mx-auto"},
  {id:11, heading:'image3.jpg', src:Imagesdata("files6"), data:'76 KB' , class:""},
  {id:12, heading:'excel.xls', src:Imagesdata("excel"), data:'34 KB' , class:"mx-auto"},
  {id:13, heading:'profile.ppt', src:Imagesdata("ppt1"), data:'67 KB' , class:"mx-auto"},
  {id:14, heading:'image4.jpg', src:Imagesdata("files5"), data:'66 KB' , class:""},
  {id:15, heading:'exe.zip', src:Imagesdata("zip1"), data:'320 KB' , class:"mx-auto"},
]

                      //** FileManger **//
export const list1 = [
  {id:1, heading:'file.pdf', src:Imagesdata("pdf"), data:'32 KB', class:"mx-auto"},
  {id:2, heading:'image1.jpg', src:Imagesdata("files7"), data:'76 KB', class:"mx-0"},
  {id:3, heading:'excel.xls', src:Imagesdata("excel"), data:'34 KB', class:"mx-auto"},
  {id:4, heading:'image2.jpg', src:Imagesdata("files2"), data:'66 KB', class:"mx-0"},
  {id:5, heading:'demo.ppt', src:Imagesdata("ppt1"), data:'67 KB', class:"mx-auto"},
  {id:6, heading:'video.mp4', src:Imagesdata("video"), data:'320 KB', class:"mx-auto"},
  {id:7, heading:'image2.jpg', src:Imagesdata("files4"), data:'66 KB', class:"mx-0"},
  {id:8, heading:'word.doc', src:Imagesdata("word"), data:'320 KB', class:"mx-auto"},
  {id:9, heading:'image3.jpg', src:Imagesdata("files6"), data:'76 KB', class:"mx-0"},
  {id:10, heading:'excel.xls', src:Imagesdata("excel"), data:'34 KB', class:"mx-auto"},
  {id:11, heading:'profile.ppt', src:Imagesdata("ppt1"), data:'67 KB', class:"mx-auto"},
  {id:12, heading:'image4.jpg', src:Imagesdata("files5"), data:'66 KB', class:"mx-0"},
]

export function Creatnewfile() {
 const [open, setOpen] = React.useState(false);
 const theme = useTheme();
 const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
          
 const handleClickOpen = () => {
   setOpen(true);
 };
          
            const handleClose = () => {
              setOpen(false);
            };
          
            return (
              <div className="">
                <Button
                  variant="primary"
                  className="btn btn-primary btn-block"
                  onClick={handleClickOpen}
                >
               <i className="fe fe-plus me-1"></i> Create New File
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">Add New File <button type="button" className="btn-close"  onClick={handleClose}>x</button></DialogTitle>
                  
                  <hr className="my-0" />
                  <DialogContent>
                    <Dropimg/>
                  </DialogContent>
                  <hr />
                  <DialogActions>
                    <Button  variant="success" className="me-1" onClick={handleClose}>
                      Save changes
                    </Button>
                    <Button onClick={handleClose} className="me-1" variant="danger">
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            );
          }
         function Dropimg() {
            const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
            const files = acceptedFiles.map((file) => (
              <li key={file.path}>
                {file.path} - {file.size} bytes
              </li>
            ));
          
            return (
              <section className="filemanager">
                <div {...getRootProps({ className: "dropzone" })} className="drops">
                  <input {...getInputProps()} />
                  <p className="alitext">
                    Drag 'n' drop some files here, or click to select files
                  </p>
                  <h4 className="alitext mb-0">Files</h4>
                  <ul>{files}</ul>
                </div>
              </section>
            );
          }

        //** FileAttachments **//
export const files = [
  {id:1, icon:'mdi-file-image me-2', heading:'Image_file.jpg', color:'primary'},
  {id:2, icon:'mdi-file-word me-2', heading:'Word_file.jpg', color:'secondary'},
  {id:3, icon:'mdi-file-excel me-2', heading:'Excel_file.jpg', color:'success'},
  {id:4, icon:'mdi-file-pdf me-2', heading:'Pdf_file.jpg', color:'warning'},
  {id:5, icon:'mdi-file-video me-2', heading:'Video_file.jpg', color:'danger'},
  {id:6, icon:'mdi-file-music me-2', heading:'Audio_file.jpg', color:'info'},
]
export const fileattachment = [
  {id:1, src1:Imagesdata("pngs4"), heading:'Image01.jpg'},
  {id:2, src1:Imagesdata("pngs3"), heading:'Image02.jpg'},
  {id:3, src1:Imagesdata("pngs9"), heading:'Image03.jpg'},
  {id:4, src1:Imagesdata("pngs6"), heading:'Image04.jpg'},
  {id:5, src1:Imagesdata("pngs1"), heading:'Image05.jpg'},
  {id:6, src1:Imagesdata("pngs10"), heading:'Image06.jpg'},
]
export const filesdata = [
  {id:1, src1:Imagesdata("fileimg"), heading:'Image01.jpg'},
  {id:2, src1:Imagesdata("doc"), heading:'word.doc'},
  {id:3, src1:Imagesdata("file2"), heading:'Excel.xls'},
  {id:4, src1:Imagesdata("file"), heading:'Document.pdf'},
  {id:5, src1:Imagesdata("imgformat"), heading:'Image02.jpg'},
]

             //** File Details **//
export const relatedfiles= [
 { id: 1, src1: Imagesdata("files3"), class: 'image2.jpg', class1: '66 KB' },
 { id: 2, src1: Imagesdata("pdf"), class: 'file.pdf', class1: '32 KB' },
 { id: 3, src1: Imagesdata("files7"), class: 'image1.jpg', class1: '76 KB' },
 { id: 4, src1: Imagesdata("file2"), class: 'excel.xls', class1: '34 KB' },
 { id: 5, src1: Imagesdata("files6"), class: 'nature.jpg', class1: '66 KB' },
 { id: 6, src1: Imagesdata("ppt1"), class: 'demo.ppt', class1: '67 KB' },
 { id: 7, src1: Imagesdata("files2"), class: 'image1.jpg', class1: '76 KB' },
 ]

                //** Dashboard **//
  //totalTransactions
export const totalTransactions = {
  series: [{
    name: "Total Orders",
    type: 'line',
    data:[0, 45, 30, 75, 15, 94, 40, 115, 30, 105, 65, 110]
    
  },{
    name: "Total Sales",
    type: 'line',
    data: [0, 60, 20, 130, 75, 130, 75, 140, 64, 130, 85, 120]
    
  }, {
    name: "",
    type: 'area',
    data: [0, 105, 70, 175, 85, 154, 90, 185, 120, 145, 185, 130]
  }],

  options: {
    chart: {
			height: 300,
			type: "line",
			stacked: false,
		
			dropShadow: {
        enabled: true,
				opacity: 0.1,
			},
		},
    colors: ["#6259ca", "#f99433", 'rgba(119, 119, 142, 0.01)'],
		dataLabels: {
			enabled: false
		},
    stroke: {
			curve: "smooth",
			width: [3, 3, 0],
			dashArray: [0, 4],
			lineCap: "round"
		},
		grid: {
			padding: {
				left: 0,
				right: 0
			},
			strokeDashArray: 3
		},
		markers: {
			size: 0,
			hover: {
				size: 0
			}
		},
  
    xaxis: {
			type: "month",
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			axisBorder: {
				show: false,
				color: 'rgba(119, 119, 142, 0.08)',
			},
			labels: {
				style: {
					color: '#8492a6',
					fontSize: '12px',
				},
			},
		},
    yaxis: {
			labels: {
				style: {
					color: '#8492a6',
					fontSize: '12px',
				},
			},
			axisBorder: {
				show: false,
				color: 'rgba(119, 119, 142, 0.08)',
			},
		},
    fill: {
			gradient: {
			  inverseColors: false,
			  shade: 'light',
			  type: "vertical",
			  opacityFrom: 0.95,
			  opacityTo: 0.45,
			  stops: [0, 100, 100, 100]
			}
		  },
		tooltip: {
			show:false
		},
    legend: {
      position: "top",
      show:true
    }
  },
 
};
//Recentorders

export const Recentorders = {
  series: [83],
  options: {
    chart: {
      height: 305,
      type: "radialBar",
      responsive:'true',
      offsetY: 10,
      offsetX: 0,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 30,
          },
          value: {
            offsetY: -16,
            fontSize: "22px",
            color: undefined,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    colors: ['#ff5d9e'],
	fill: {
		type: "gradient",
		gradient: {
			shade: "gradient",
			type: "horizontal",
			shadeIntensity: .5,
			gradientToColors: ['#6259ca'],
			inverseColors: !0,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100]
		}
	},
    stroke: {
      dashArray: 4,
    },
    labels: [""],
  },
};

//dashbordtable
//dashboard1
export const COLUMNS1 = [
  {
    Header: "S.NO:",
    accessor: "PurchaseDate",
    className: "",
  },
  {
    Header: "NAME",
    accessor: "Product",
    className: "",
  },
  {
    Header: "DATE",
    accessor: "ProductID",
    className: "",
  },
  {
    Header: "AMOUNT",
    accessor: "ProductCost",
    className: "",
  },
  {
    Header: "STATUS",
    accessor: "Status",
    className: "",
  },
  {
    Header: "ACTION",
    accessor: "Action",
    className: "",
  },
];
const i = <span className={`text-success fs-15 fw-semibold`}>Success</span>
const t = <span className={`text-danger fs-15 fw-semibold`}>Cancel</span>
const s = <span className={`text-warning fs-15 fw-semibold`}>Pending</span>
const d = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={Imagesdata("users11")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Jake poole</h6><span className="fs-12 text-muted text-wrap">jacke123@gmail.com</span></div>

</div>

const e = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={Imagesdata("users1")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Virginia Gray</h6><span className="fs-12 text-muted text-wrap">virginia456@gmail.com</span></div></div>
const f = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={Imagesdata("users12")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Jacob Thomson</h6><span className="fs-12 text-muted text-wrap">jacobthomson@gmail.com</span></div></div>
const g = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={Imagesdata("users13")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Trevor Thomson</h6><span className="fs-12 text-muted text-wrap">trevor@gmail.com</span></div></div>
const h = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={Imagesdata("users2")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Kylie north</h6><span className="fs-12 text-muted text-wrap">kylie@gmail.com</span></div></div>
const j = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={Imagesdata("users14")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Jan Hodges</h6><span className="fs-12 text-muted text-wrap">
jan@gmail.com</span></div></div>
const l = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={Imagesdata("users4")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Trevor Thomson</h6><span className="fs-12 text-muted text-wrap">trevor@gmail.com</span></div></div>
const m = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={Imagesdata("users5")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Kylie north</h6><span className="fs-12 text-muted text-wrap">kylie@gmail.com</span></div></div>


const data1 = <><OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
  <Link to="#" className='btn btn-primary me-2'>  <i className="fe fe-edit fs-18"></i></Link>

</OverlayTrigger><OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
  <Link to="#" className='btn btn-danger'> <i className="fe fe-trash-2  fs-18"></i></Link>
  </OverlayTrigger></>
export const DATATABLE1 = [
  {
    PurchaseDate: "01",
    ClientName: "Cherry Blossom",
    ProductID: "20-11-2020",
    Product: d,
    PaymentMode: "Online Payment",
    Status:i,
    ProductCost: "$5.321.2",
    color: "badge badge-success",
    Action:data1
  },
  {
    PurchaseDate: "02",
    ClientName: "Simon Sais",
    ProductID: "20-11-2020",
    Product: e,
    PaymentMode: "Online Payment",
    Status: i,
    ProductCost: "$53,3654",
    Action:data1
  },
  {
    PurchaseDate: "03",
    ClientName: "Manny Jah",
    ProductID: "20-11-2020",
    Product: f,
    PaymentMode: "Cash on Delivery",
    Status: s,
    ProductCost: "$1,56,3654",
    Action:data1
  },
  {
    PurchaseDate: "04",
    ClientName: "Florinda Carasco",
    ProductID: "19 Sep 2021",
    Product:g,
    PaymentMode: "Online Payment",
    Status: i,
    ProductCost: "$12.3",
    Action:data1
  },
  {
    PurchaseDate: "05",
    ClientName: "Ivan Notheridiya",
    ProductID: "19-11-2020",
    Product: h,
    PaymentMode: "Cash on Delivery",
    Status:s,
    ProductCost: "$5.312.2",
    Action:data1
  },
  {
    PurchaseDate: "06",
    ClientName: "Willie Findit",
    ProductID: "19-11-2020",
    Product: j,
    PaymentMode: "Cash on delivered",
    Status:t,
    ProductCost: "$5.312.2",
    Action:data1
  },
  {
    PurchaseDate: "07",
    ClientName: "Addie Minstra",
    ProductID: "19-11-2020",
    Product: j,
    PaymentMode: "Online Payment",
    Status:i,
    ProductCost: "$2,24,1421",
    Action:data1
  },
  {
    PurchaseDate: "08",
    ClientName: "Laura Biding",
    ProductID: "19-11-2020",
    Product: m,
    PaymentMode: "Cash on delivered",
    Status:t,
    ProductCost: "$5.312.2",
    Action:data1
  },
];

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};
//Timeline
export const timeline = [
  {id:1, icon:'fa-user-plus', color:'primary',data:'Mr John', data1:'Started following you', data2:'01 June 2020', data3:'1min', color1:'primary'},
  {id:2, icon:'fa-comment', color:'secondary',data:'Lily 1 ', data1:' Commented applied', data2:'01 July 2020', data3:'3min', color1:'danger'},
  {id:3, icon:'fa-thumbs-up', color:'success',data:'Kevin', data1:' liked your site', data2:'05 July 2020', data3:'5min', color1:'warning'},
  {id:4, icon:'fa-envelope', color:'info',data:'Andrena', data1:' posted a new article', data2:'09 October 2020', data3:'5min', color1:'info'},
  {id:5, icon:'fa-shopping-bag', color:'danger',data:'Sonia', data1:' Delivery in progress', data2:'12 October 2020', data3:'5min', color1:'warning'},
]
 
//Browser usage
export const browser = [
  {id:1, icon:'fa-chrome bg-secondary-gradient text-white', heading:'Chrome',data:'35,50', data1:'fe fe-arrow-up', data2:'12.75%', color:'success'},
  {id:2, icon:'fa-opera text-white bg-danger-gradient', heading:'Opera',data:'12,563', data1:'fe fe-arrow-down', data2:'15.12%', color:'danger'},
  {id:3, icon:'fa-firefox text-white bg-purple-gradient', heading:'IE',data:'25,364', data1:'fe fe-arrow-up', data2:'24.37%', color:'success'},
  {id:4, icon:'fa-edge text-white bg-info-gradient', heading:'Firefox',data:'14,635', data1:'fe fe-arrow-up', data2:'15,63%', color:'success'},
  {id:5, icon:'fa-android text-white bg-success-gradient', heading:'Android',data:'15,453', data1:'fe fe-arrow-down', data2:'23.70%', color:'danger'},
]


         //** Widgets data **//

  export const visit =[
    {id:1, icon:'fa-firefox', heading:'Total Visit',data:'834', color:'primary'},
    {id:2, icon:'fa-dollar', heading:'Cost per Click',data:'$34,516', color:'secondary'},
    {id:3, icon:'fa-comment-o', heading:'Investment',data:'80%', color:'success'},
    {id:4, icon:'fa-pie-chart', heading:'Revenue',data:'70k', color:'info'},
  ]

  export const request = [
    {id:1, data:'23,536', data1:'Total Requests', color:'primary', icon:'fa-send-o'},
    {id:2, data:'45,789', data1:'Total Revenue', color:'secondary', icon:'fa-bar-chart'},
    {id:3, data:'89,786', data1:'Total Profit', color:'success', icon:'fa-dollar'},
    {id:4, data:'43,336', data1:'Monthly Sales', color:'info', icon:'fa-cart-plus'},
  ]
  
 export const user =[
  {id:1, icon:'mdi mdi-account-multiple icon-size float-start', data:'New users', data1:'Monthly users', data2:'3,672', data3:'50%', color:'primary'},
  {id:2, icon:'mdi mdi-cube icon-size float-start', data:'Total Tax', data1:'Monthly Income', data2:'$89,265', data3:'$7,893', color:'success'},
  {id:3, icon:'icon-size mdi mdi-poll-box   float-start', data:'Total Profit', data1:'Monthly Profit', data2:'$23,987', data3:'$4,678', color:'warning'},
  {id:4, icon:'fa fa-cart-plus icon-size float-start', data:'Total Sales', data1:'Monthly Sales', data2:'46,486', data3:'3,756', color:'danger'},
 ]

 export const follower = [
{id:1, icon:'lnr-user ', color:'primary', data:'17,533', data1:'Total Followers'},
{id:2, icon:'lnr-heart', color:'secondary', data:'10,257', data1:'Total Likes'},
{id:3, icon:'lnr-bubble', color:'success', data:'87', data1:'Total Comments'},
{id:4, icon:'lnr-envelope ', color:'danger', data:'485', data1:'Total Posts'},
 ]

 export const summary = [
  {id:1, heading:'Total Revenue', data:'$15300',color:'blue'},
  {id:2, heading:'Total Tax', data:'$1625',color:'success'},
  {id:3, heading:'Total Income', data:'70%',color:'warning'},
  {id:4, heading:'Total Income', data:'50%',color:'danger'},
  {id:5, heading:'Total Loss', data:'30%',color:'info'},
  {id:6, heading:'Total Loss', data:'55%',color:'secondary'},
 ]
      //** Treeview **//
  
//treeview
export const treeviews = [
  {
    id: 100,
    text: "TECH",
    children: [
      {
        id: 101,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 102,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 1021,
            text: "Reports",
            isLeaf: true,
          },
        ],
      },
      {
        id: 103,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeviewXRP
export const treeviewXRP = [
  {
    id: 200,
    text: "XRP",
    children: [
      {
        id: 201,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 202,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 2021,
            text: "Reports",
            isLeaf: true,
          },
        ],
      },
      {
        id: 203,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview1
export const treeview1 = [
  {
    id: 1,
    text: "Treeview1",
    children: [
      {
        id: 2,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 3,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 4,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 5,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 6,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 7,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 8,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 9,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 10,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 11,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 12,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 13,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 14,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 15,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 16,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 17,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 18,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 19,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview2
export const treeview2 = [
  {
    id: 20,
    text: "Treeview2",
    
    children: [
      {
        id: 21,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 22,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 23,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 24,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 25,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 26,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 27,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 28,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 29,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 30,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 31,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 32,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 33,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 34,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 35,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 36,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 37,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 37,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview3
export const treeview3 = [
  {
    id: 38,
    text: "Treeview3",
    children: [
      {
        id: 39,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 40,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 41,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 42,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 43,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 44,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 45,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 46,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 47,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 48,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 49,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 50,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 51,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 52,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 53,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 54,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 55,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 56,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview4
export const treeview4 = [
  {
    id: 57,
    text: "Treeview4",
    children: [
      {
        id: 58,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 59,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 60,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 61,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 62,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 63,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 64,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 65,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 66,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 67,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 68,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 69,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 70,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 71,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 72,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 73,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 74,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 75,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview5
export const treeview5 = [
  {
    id: 76,
    text: "Treeview5",
    children: [
      {
        id: 77,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 78,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 79,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 78,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 79,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 80,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 81,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 82,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 83,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 84,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 85,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 86,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 87,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 88,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 89,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 90,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 91,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 92,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview6
export const treeview6 = [
  {
    id: 93,
    text: "Treeview6",
    children: [
      {
        id: 94,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 95,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 96,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 97,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 98,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 99,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 100,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 101,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 102,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 103,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 104,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 105,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 106,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 107,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 108,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 109,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 110,

                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];

            //** Search data **//
      //Tablesearchdata
const Datasearch = [
  {
    IMG: Imagesdata("users14"),
    NAME: "Mens Jackets",
    NUMBER: "50% off",
    PRICE: "$1,987",
    Color: "primary",
  },
  {
    IMG: Imagesdata("users11"),
    NAME: "Occational Special Edition",
    NUMBER: "60% off",
    PRICE: "$2,679",
    Color: "success",
  },
  {
    IMG: Imagesdata("users4"),
    NAME: "Saree ",
    NEW: "New",
    BG: "primary",
    NUMBER: "25% off",
    PRICE: "$999",
    Color: "warning",
  },
  {
    IMG: Imagesdata("users13"),
    NAME: "Western Wear",
    NUMBER: "30% off	",
    PRICE: "$699",
    Color: "info",
  },
  {
    IMG: Imagesdata("users12"),
    NAME: "Kids Dress ",
    NEW: "New",
    BG: "default",
    NUMBER: "	47% off",
    PRICE: "$399",
    Color: "primary",
  },
  {
    IMG: Imagesdata("users2"),
    NAME: "Kids Toys",
    NUMBER: "26% off",
    PRICE: "$299",
    Color: "success",
  },
  {
    IMG: Imagesdata("users4"),
    NAME: "Sony KD-49XE7005 ",
    NEW: "New",
    BG: "primary",
    NUMBER: "43% off",
    PRICE: "$22,269",
    Color: "warning",
  },
  {
    IMG: Imagesdata("users2"),
    NAME: "Huawei Mate Pro Dual SIM",
    NUMBER: "20% off",
    PRICE: "$9,999",
    Color: "info",
  },
  {
    IMG: Imagesdata("users5"),
    NAME: "Novel Books ",
    NEW: "New",
    BG: "default",
    NUMBER: "14% off",
    PRICE: "$899",
    Color: "primary",
  },
  {
    IMG: Imagesdata("users1"),
    NAME: "Welcare Fitness",
    NUMBER: "40% off",
    PRICE: "$3,987",
    Color: "success",
  },
];
export function Tablesearchdata() {
  console.log(Datasearch);
  return (
    <Table className="table card-table table-vcenter text-nowrap">
      <tbody>
        {Datasearch.map((list, index) => (
          <tr key={index}>
            <td>
              <span
                className="avatar avatar-md brround mt-1"
                style={{ backgroundImage: `url(${list.IMG})` }}
              ></span>
            </td>
            <td>
              {list.NAME}
              <span className={`badge badge-md bg-${list.BG}`}>{list.NEW}</span>
            </td>
            <td>
              <div className="star-ratings start-ratings-main clearfix">
                <div className="stars stars-example-fontawesome">
                  <rating.CustomizedRating
                    id="example-fontawesome"
                    name="rating"
                    autoComplete="off"
                  />
                </div>
              </div>
            </td>
            <td
              className={`d-none d-md-table-cell text-nowrap text-end text-${list.Color}`}
            >
              {list.NUMBER}
            </td>
            <td className="text-end">
              <strong>{list.PRICE}</strong>
            </td>
            <td className="text-end">
              <Link to="#" className="btn btn-primary btn-sm text-white me-2">
                view
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
//Singleselect13
export function Singleselect13() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const options = [
    
      {
        value: "Group-1",
        label: "--Select--",
      },
      {
        value: "Group-2",
        label: "Foot wear",
      },
      {
        value: "Group-3",
        label: "Top wear",
      },
      {
        value: "Group-4",
        label: "Bootom wear",
      },
      {
        value: "Group-5",
        label: "Mens Groming",
      },
      {
        value: "Group-6",
        label: "Accessories",
      },
  ];
  return (
    <MultiSelect
      onChange={handleOnchange}
       placeholder="--Select--"
      singleSelect="true"
      options={options}
   
    />
  );
}
//Singleselect1s
export function Singleselect1s() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
  const Options = [
    { label: "--Select--", value: "--Select--" },
    { label: "Western wear", value: "Western wear" },
    { label: "Foot wear", value: "Foot wear" },
    { label: "Top wear", value: "Top wear" },
    { label: "Bootom wear", value: "Bootom wear" },
    { label: "Beuty Groming", value: "Beuty Groming" },
    { label: "Accessories", value: "Accessories" },
    { label: "jewellery", value: "jewellery" },
  ];
  return (
    <MultiSelect options={Options} onChange={handleOnchange}
     placeholder="--Select--" singleSelect="true" />
  );
}
//Singleselect1w
export function Singleselect1w() {
   const [value, setvalue] = useState("");

   const handleOnchange = () => {
     setvalue(value);
   };
   const Options = [
     { label: "--Select--", value: "--Select--" },
     { label: "Boys clothing", value: "Boys clothing" },
     { label: "girls Clothing", value: "girls Clothing" },
     { label: "Toys", value: "Toys" },
     { label: "Baby Care", value: "Baby Care" },
     { label: "Kids footwear", value: "Kids footwear" },
   ];
  return (
    <MultiSelect options={Options} onChange={handleOnchange}
     placeholder="--Select--" singleSelect="true" />
  );
}
//Singleselect1ele
export function Singleselect1ele() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const options = [
    { label: "--Select--", value: "--Select--" },
    { label: "Mobiles", value: "Mobiles" },
    { label: "Laptops", value: "Laptops" },
    { label: "Gaming & Accessories", value: "Gaming & Accessories" },
    { label: "Health care Appliances", value: "Health care Appliances" },
  ];
  return (
    <MultiSelect options={options} onChange={handleOnchange}
     placeholder="--Select--" singleSelect="ture" />
  );
}
//Singleselect1book

export const Singleselect1book = () => {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };

  const options = [
    { label: "--Select--", value: "--Select--" },
    { label: "Stationery", value: "Stationery" },
    { label: "Books", value: "Books" },
    { label: "Gaming", value: "Gaming" },
    { label: "Music", value: "Music" },
    { label: "Exercise & fitness", value: "Exercise & fitness" },
  ];

  return (
    <div className="form-group">
      <MultiSelect onChange={handleOnchange}
       placeholder="--Select--" options={options} singleSelect="true" />
    </div>
  );
};

            //** Blog Post **//
            export function Categorys() {
              const [value, setvalue] = useState("");
          
              const handleOnchange = () => {
                setvalue(value);
              };
              const Optioncategorys = [
                {
                  value: "category-1",
                  label: "Technology",
                },
                {
                  value: "category-2",
                  label: "Travel",
                },
                {
                  value: "category-3",
                  label: "Food",
                },
                {
                  value: "category-4",
                  label: "Fashion",
                },
              ];
              return (
                <MultiSelect
                  name="beast"
                  id="select-beasts"
                  onChange={handleOnchange}
                  options={Optioncategorys}
                  singleSelect="true"
                />
              );
              };

//
const AfterComplete4 = () => <span>You are good to go!</span>

// Renderer callback with condition
const rendering4 = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete4 />
  } else {
    // Render a countdown
    return (
     <span>
       <Row className="count-down">
       <Col sm={12} md={12} xl={3} className="col-12">
                       <div className="countdown alert-primary">
                         <span className="days text-primary ">{days}</span>
                         <span className="text-primary">Days</span>
                       </div>
                     </Col>
                     <Col sm={12} md={12} xl={3} className="col-12">
                       <div className="countdown alert-success">
                         <span className="hours text-success">{hours}</span>
                         <span className="text-success">Hours</span>
                       </div>
                     </Col>

                     <Col sm={12} md={12} xl={3} className="col-12">
                       <div className="countdown alert-info">
                         <span className="minutes text-info">{minutes}</span>
                         <span className="text-info">Minutes</span>
                       </div>
                     </Col>
                     <Col sm={12} md={12} xl={3} className="col-12">
                       <div className="countdown alert-warning">
                         <span className="seconds text-warning">{seconds}</span>
                         <span className="text-warning">Seconds</span>
                       </div>
                     </Col>
       </Row>
     </span>
    )
  }
}

export function DayCounter1 () {
  return (<Countdown date={Date.now() + 3088800000} renderer={rendering4} />)
}
//Card design
// fullscreen button

export function FullScreenDialog() {
  const [expanded, setExpanded] = useState(true);
  const [fullScreen, setFullscreen] = useState("true");
  const [show, setShow] = useState(false);

  const fullscreenmodalClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [shows, setShows] = useState(true);

  return (
    <div>

      {shows ? <Card>
        <Card.Header>

          <Card.Title>Fullscreen button</Card.Title>
          <div className="card-options">

            <Link to="#" onClick={handleExpandClick}> <i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
            <Link to="#" onClick={() => handleShow(true)}><i className="fe fe-maximize"></i>

            </Link>

            <Link to="#" onClick={() => setShows(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
              <Modal.Header>
                <Modal.Title>Modal</Modal.Title>
                <span className="d-flex ms-auto pe-4" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={fullscreenmodalClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={fullscreenmodalClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

        </Card.Header>
        <Collapse in={expanded}>
          <Card.Body>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Card.Body>

        </Collapse>
      </Card> : null}

    </div>
  );
}
// Initial collapsed card

export function InitialCollapsedCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? <Card>
        <Card.Header>
          <Card.Title>Initial collapsed card</Card.Title>
          <div className="card-options">
            <Link to="#" onClick={handleExpandClick}> <i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
            <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
          </div>
        </Card.Header>
        <Collapse in={expanded} timeout={3000}>
          <Card.Body>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Card.Body>
        </Collapse>
      </Card> : null}
    </div>
  );
}

export const Infoalert = ()=> {
  Swal.fire({
    title: "Alert",
    icon: "info",
    allowOutsideClick: false,
    confirmButtonText: "Exit",
    showCancelButton: "true",
    cancelButtonText: "Stay This page",
    cancelButtonColor: "#6259ca",
    text: "Info alert",
  });
}
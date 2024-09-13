
import { ButtonGroup, Card, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import 'react-toastify/dist/ReactToastify.css'; 
import { Fragment } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Notifications = () => {
  //Default
  const success = () => toast('Success: Weldone Details Submitted Successfully', {
    style: {
      padding: '16px',
      color: '#fff',
      backgroundColor:'#29bf74',
    },
    position:'top-right',
  });
// center
const center = () => toast('Oops! An Error Occured', {
  style: {
    padding: '16px',
    color: '#fff',
    backgroundColor:'#e82646',
  },
  position:'top-center',
});
// left
const left = () => toast('Warning: Something Went Wrong', {
  style: {
    padding: '16px',
    color: '#fff',
    backgroundColor:'#ffc107',
  },
  position:'top-left',
});
// left
const info = () => toast('Info: Some info here', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#1170e4',
  },
  position:'top-center',
});
// left
const danger = () => toast('Error: This error will stay here until you click it', {
  style: {
    padding: '16px',
    color: '#fff',
    backgroundColor:'#ff5b51',
  },
  position:'top-center',
});
// left
const warning = () => toast('Opacity is cool!', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ffc720',
  },
  position:'top-center',
});
// success left
const successLeft = () => toast('Notice! : You have 4 notification', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#29bf74',
  },
  position:'top-right',
});
// warningLeft
const warningLeft = () => toast('Warning! Read all details carefully ', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ffc720',
  },
  position:'top-right',
});
// dangerLeft
const dangerLeft = () => toast('Error! Please check your details...file is missing', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ff5b51',
  },
  position:'top-right',
});
// gradientSuccess
const gradientSuccess = () => toast('Notice! : You have 4 notification', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#29bf74',
  },
  position:'top-right',
});
// gradientWarning
const gradientWarning = () => toast('Warning! Read all details carefully', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ffc720',
  },
  position:'top-right',
});
// gradientDanger
const gradientDanger = () => toast('Error! Please check your details...file is missing', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ff5b51',
  },
  position:'top-right',
});
 
  return (

    <Fragment>
      <PageHeader titles="Notification" active="Notification" items={['Components']} />
      <div className="row">
        <div className="col-md-12">
          <Card>
            <Card.Header>
              <Card.Title>Alerts Notifications</Card.Title>
            </Card.Header>
            <Card.Body  className="text-center">
               <div className="btn-list">
      <Button variant='success' className='me-2' onClick={success}>default</Button>
      <Button variant='secondary' className='me-2' onClick={center}>center</Button>
      <Button variant='warning' className='me-2' onClick={left}>left</Button>
      <Button variant='info' className='me-2' onClick={info}>Center info</Button>
      <Button variant='danger' className='me-2' onClick={danger}>Center Error</Button>
      <Button variant='warning' className='me-2' onClick={warning}>Center warning</Button>
      <Toaster />
    </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Side Alerts Notifications</Card.Title>
            </Card.Header>
            <Card.Body  className="text-center">
            <ButtonGroup>
               <div>
                <Button className='me-2' variant='success' onClick={successLeft}>Success</Button>
                <Button className='me-2' variant='warning' onClick={warningLeft}>warning</Button>
                <Button className='me-2' variant='danger' onClick={dangerLeft}>Danger</Button>
                <Toaster />
                </div>
                </ButtonGroup>
            </Card.Body>
          </Card>
           <Card>
             <Card.Header>
               <h3 className="card-title">Alerts Popovers</h3>
             </Card.Header>
             <Card.Body className="text-center">
             <OverlayTrigger trigger="click" placement="top" overlay={
             <Popover style={{ margin: "0px" }} className="notificationsuccess">
     <Popover.Header>Alert Sucess</Popover.Header>
     <Popover.Body>
       Well done! You successfully read this important alert message..
     </Popover.Body>
   </Popover>
            }            >
       <Button variant="success" className="me-2 mb-2">
          Show Success
        </Button>
      </OverlayTrigger>
                     <OverlayTrigger trigger="click" placement="bottom" overlay={
        <Popover style={{ margin: "0px" }} className="notificationsecondary">
        <Popover.Header>Alert Secondary</Popover.Header>
        <Popover.Body>Error! Please Check u r emial id..</Popover.Body>
      </Popover>
      }>
        <Button variant="secondary" className="me-2 mb-2">
          Show Success
        </Button>
      </OverlayTrigger>

      <OverlayTrigger trigger="click" placement="top" overlay={
        <Popover style={{ margin: "0px" }} className="notificationinfo">
        <Popover.Header>Alert Info</Popover.Header>
        <Popover.Body>
          Heads up! This alert needs your attention, but it's not super important...
        </Popover.Body>
      </Popover>
      }>
        <Button variant="info" className="me-2 mb-2">
          Show Info
        </Button>
      </OverlayTrigger>

      <OverlayTrigger trigger="click" placement="bottom" overlay={
        <Popover style={{ margin: "0px" }} className="notificationwarning">
        <Popover.Header>Alert warning</Popover.Header>
        <Popover.Body>
          Warning! Best check yo self, you're not looking too good..
        </Popover.Body>
      </Popover>
      }>
        <Button variant="warning" className="me-2 mb-2">
          Show warning
        </Button>
      </OverlayTrigger>

      <OverlayTrigger trigger="click" placement="top" overlay={
         <Popover style={{ margin: "0px" }} className="notificationdanger">
         <Popover.Header>Alert danger</Popover.Header>
         <Popover.Body>
           Oh snap! Change a few things up and try submitting again.
         </Popover.Body>
       </Popover>
      }>
        <Button variant="danger" className="me-2 mb-2">
          Show Danger
        </Button>
      </OverlayTrigger>
              
      <OverlayTrigger trigger="click" placement="bottom" overlay={
         <Popover style={{ margin: "0px" }}>
         <Popover.Header>Alert primary</Popover.Header>
         <Popover.Body>
           Cool! This alert will close in 3 seconds. The data-bs-delay attribute is
           in milliseconds.
         </Popover.Body>
       </Popover>
      }>
        <Button variant="primary" className="me-2 mb-2">
          Show Primary
        </Button>
      </OverlayTrigger>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};
export default Notifications;


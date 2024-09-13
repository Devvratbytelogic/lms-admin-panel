import React, {useState} from "react";
import { Card, Row, Col, Modal,Button } from "react-bootstrap";
import SunEditor from 'suneditor-react';
import PageHeader from "../../../layouts/layoutcomponents/pageheader";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';

export default function FormEditor() {

      //quill
      const [value1, setValue1] = useState('');
      // sun editor
      const htmlWithTableImages = '<center>  </center>';
        // Editor
    const [value, setValue] = useState(htmlWithTableImages);
      // Modal Editor
      const [show, setShow] = useState(false);
  
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <div>
             <PageHeader titles="Form Editor" active="Form Editor" items={['Forms']} />


      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="card-header border-bottom-0">
              <h3 className="card-title">Form Editor style1</h3>
            </Card.Header>
            <Card.Body>
            <SunEditor />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="card-header border-bottom-0">
            <h3 className="card-title">Form Editor in Modal</h3>
            </Card.Header>
              <Card.Body>
              <Button variant="primary" className="mt-3 me-2" data-bs-target="#modalQuill" onClick={handleShow}
                        data-bs-toggle="modal">View Live Demo</Button>
                         <Modal show={show} onHide={handleClose} size="lg" variant='primary' aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Header className='pd-20'>
                    <Modal.Title as='h6'>Create New Document</Modal.Title>
                    <Link  to="#" className="text-dark d-flex ms-auto my-auto" onClick={() => { handleClose("Basic"); }}><i className='fe fe-x ms-auto'></i></Link>
                  </Modal.Header>
                  <Modal.Body className="">
                    <ReactQuill theme="snow" value={value1} onChange={setValue1} />
                  </Modal.Body>
                  <Modal.Footer className="pd-20">
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="card-header border-bottom-0">
            <h3 className="card-title">From Inline-Edit Editor</h3>
            </Card.Header>
            <Card.Body>
              <div className="wd-xl-100p ht-350">
                <div
                  className="ql-scrolling-demo bg-light p-4 border"
                  id="scrolling-container"
                >
                  <div id="quillInline">
                  <SunEditor
        setContents={value}
        onChange={setValue}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize"],
            ['paragraphStyle', 'blockquote'],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript"
            ],
            ["fontColor", "hiliteColor"],
            ["align", "list", "lineHeight"],
            ["outdent", "indent"],
            ["table", "horizontalRule", "link", "image", "video"],
            ["preview", "print"],
            ["removeFormat"]
          ], 
          defaultTag: "div",
          minHeight: "300px",
          showPathLabel: false,
          attributesWhitelist: {
            all: "style",
            table: "cellpadding|width|cellspacing|height|style",
            tr: "valign|style",
            td: "styleinsert|height|style",
            img: "title|alt|src|style"
          }
        }}
      />
      <hr />
      
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h2>Example given value output:</h2>
      <textarea className='text-editor'
        disabled
        value={JSON.stringify(value, null, 2)}
        style={{ width: "100%", resize: "none", height: "600px" }}
      />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

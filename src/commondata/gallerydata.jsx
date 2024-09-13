import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import { Col, Row } from 'react-bootstrap';
import { Imagesdata } from './commonimages';
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import  "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import media1 from '../assets/images/media/1.jpg';
import media2 from '../assets/images/media/2.jpg';
import media3 from '../assets/images/media/3.jpg';
import media4 from '../assets/images/media/4.jpg';
import media5 from '../assets/images/media/5.jpg';
import media6 from '../assets/images/media/6.jpg';
import media7 from '../assets/images/media/7.jpg';
import media8 from '../assets/images/media/8.jpg';
import media9 from '../assets/images/media/9.jpg';
import media10 from '../assets/images/media/10.jpg';
import media11 from '../assets/images/media/11.jpg';
import media12 from '../assets/images/media/12.jpg';
import media13 from '../assets/images/media/13.jpg';
import media14 from '../assets/images/media/14.jpg';
import media15 from '../assets/images/media/15.jpg';
import media16 from '../assets/images/media/16.jpg';
import media17 from '../assets/images/media/17.jpg';
import media18 from '../assets/images/media/18.jpg';
import media19 from '../assets/images/media/19.jpg';
import media20 from '../assets/images/media/20.jpg';
import files1 from '../assets/images/media/files/01.jpg';
import files2 from '../assets/images/media/files/02.jpg';
import files3 from '../assets/images/media/files/03.jpg';
import files4 from '../assets/images/media/files/04.jpg';
import files5 from '../assets/images/media/files/05.jpg';
import files6 from '../assets/images/media/files/06.jpg';
  //*** Galery Data ***//
  export const LightboxGallery1 = () => {

    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <Row className="masonry">
          <Col xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5'  src={Imagesdata('media1')} alt='media1' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media2')} alt='media2' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media3')} alt='media3' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media4')} alt='media4' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media5')} alt='media5' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media6')} alt='media6' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media7')} alt='media7' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media8')} alt='media8' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media9')} alt='media9' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media10')}  alt='media10' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media11')}  alt='media11' onClick={() => setOpen(true)} />
          </Col>
          <Col  xs={6} sm={4} md={4} xl={4} className="brick mb-5 border-bottom-0 col-12">
            <img className='br-5' src={Imagesdata('media12')}  alt='media11' onClick={() => setOpen(true)} />
          </Col>
        </Row>
  
        <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
      }}
          slides={[{ src: media1 }, { src: media2 }, { src: media3 }, { src: media4 }, { src: media5 }, { src: media6 }, { src: media7 }, { src: media8 }, { src: media9 }, { src: media10 }, { src: media11 }, {src: media12}, {src:media13}]} />
      </div>
    )
  };

  //*** FileDetails ***//

export const LightboxGalleryChat = () => {

    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <Row className="masonry">
          <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 mt-5 col-12">
            <img  className='img-responsive br-5' src={Imagesdata('files1')} alt='files1' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 mt-5 col-12">
            <img  className='img-responsive br-5' src={Imagesdata('files2')} alt='files2' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 mt-5 col-12">
            <img  className='img-responsive br-5' src={Imagesdata('files3')} alt='files3' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 my-5 col-12">
            <img  className='img-responsive br-5' src={Imagesdata('files4')} alt='files4' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 my-5 col-12">
            <img  className='img-responsive br-5' src={Imagesdata('files5')} alt='files5' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={4} xl={4} className=" border-bottom-0 my-5 col-12">
            <img  className='img-responsive br-5' src={Imagesdata('files6')} alt='files6' onClick={() => setOpen(true)} />
          </Col>
  
        </Row>
  
        <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
      }}
          slides={[{ src: files1 }, { src: files2 }, { src: files3 }, { src: files4 }, { src: files5 }, { src: files6 }]} />
      </div>
    )
  };

  //*** WIDGETS DATA ***//
export const LightboxGalleryWidgets = () => {

    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <Row className="masonry">
          <Col xl={4} lg={4} sm={6} className="brick mt-2 col-12">
            <img className='br-5' src={Imagesdata('media1')} alt='media1' onClick={() => setOpen(true)} />
          </Col>
          <Col xl={4} lg={4} sm={6} className="brick mt-2 col-12">
            <img className='br-5' src={Imagesdata('media2')} alt='media2' onClick={() => setOpen(true)} />
          </Col>
          <Col xl={4} lg={4} sm={6} className="brick mt-2 col-12">
            <img className='br-5' src={Imagesdata('media3')} alt='media3' onClick={() => setOpen(true)} />
          </Col>
          <Col xl={4} lg={4} sm={6} className="brick mt-2 col-12">
            <img className='br-5' src={Imagesdata('media4')} alt='media4' onClick={() => setOpen(true)} />
          </Col>
          <Col xl={4} lg={4} sm={6} className="brick mt-2 col-12">
            <img className='br-5' src={Imagesdata('media5')} alt='media5' onClick={() => setOpen(true)} />
          </Col>
          <Col xl={4} lg={4} sm={6} className="brick mt-2 col-12">
            <img className='br-5' src={Imagesdata('media6')} alt='media6' onClick={() => setOpen(true)} />
          </Col>
        </Row>
  
        <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
      }}
          slides={[{ src: media1 }, { src: media2 }, { src: media3 }, { src: media4 }, { src: media5 }, { src: media6 }]} />
      </div>
    )
  };

             //** Profile Data **//
   export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <Row className="masonry">
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media8')} alt='media1' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media10')} alt='media2' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media11')} alt='media3' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media12')} alt='media4' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media13')} alt='media5' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media14')} alt='media6' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media15')} alt='media7' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media16')} alt='media8' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media17')} alt='media9' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media18')}  alt='media10' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media19')}  alt='media11' onClick={() => setOpen(true)} />
          </Col>
          <Col xs={6} sm={4} md={3} className="brick br-7 mt-5 col-12">
            <img className='br-5' src={Imagesdata('media20')}  alt='media11' onClick={() => setOpen(true)} />
          </Col>
        </Row>
  
        <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
      }}
          slides={[{ src: media8 }, { src: media10 }, { src: media11 }, { src: media12 }, { src: media13 }, { src: media14 }, { src: media15 }, { src: media16 }, { src: media17 }, { src: media18 }, { src: media19 },{ src: media20 }]} />
      </div>
    )
  };
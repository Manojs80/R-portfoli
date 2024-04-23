import React from 'react'
import { Col, Row } from 'react-bootstrap'
import resume from './resume.pdf'

const Resume = () => {
  return (
      <div className='container-fluid'>
      <Row className='justify-content-center bg-black' >
        <Col md={10}>
        <iframe src={resume} width="100%" height="700vw" />
        </Col>
        </Row>
        </div>
     
 )
}

export default Resume
/* 
import React from ‘react’;

const PDFViewer = () => {
 return (
 <div>
 <iframe src=”path_to_pdf_file.pdf” width=”100%” height=”500px” />
 </div>
 );
};
export default PDFViewer;
*/
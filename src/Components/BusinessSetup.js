import React from 'react';
import './CSS/Style.css'
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { GrLocation } from 'react-icons/gr';
import Upperbutton from './Upperbutton';
const BusinessSetup = () => {
    return (
        <section>
            <Upperbutton></Upperbutton>
            <div >
                <p >Business setup</p>
                <h3 className='text-center'>Set your location</h3>
                <p>Add your business location so your clients can easily find you.</p>
                <div   style={{width:'835px', margin:'auto'}}>
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Business location</Accordion.Header>
        <Accordion.Body>
        <p className='location'>Where’s your business located?</p>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
        <GrLocation/>
        </InputGroup.Text>
       
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className='d-flex'>
      <input type="checkbox"className='m-1' name="" id="" /> <p>I don’t have a business address ( mobile and online services only)</p>
      </div>
        </Accordion.Body>
        
      </Accordion.Item>
    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default BusinessSetup;
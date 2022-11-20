import React from 'react';
import { Card } from 'react-bootstrap';
import { GrClose } from 'react-icons/gr';
import Round from '../../images/snr/Group 134.jpg'
import clock from '../../images/snr/clock.jpg'
import mic from '../../images/snr/mice.jpg'
import calender from '../../images/snr/calendar.jpg'

const SANService = () => {
    return (
        <div>
       <button type='button' class="btn btn-link linkButton p-3"><GrClose/></button>

       <img className='rounded mx-auto d-block' src={Round} alt="" />
       <h2  className='text-center mt-3 mb-4'>Your automated message is set up</h2>
       
       
       <Card   className='mx-auto' style={{ width: '720px' }}>
      <Card.Body>
        <Card.Title>New appointment message details</Card.Title>
        <Card.Text>
        <p className='text-start'><img style={{width:"24px", height:"24px", margin:'0px 10px'}} src={clock} alt="" /> Automatically sends to all clients when their new appointment is
  <br /> <span className='mx-5'>booked.</span></p>
        <p className='text-start'><img style={{width:"24px", height:"24px", margin:'0px 10px'}} src={mic} alt="" /> Sent by email and app notifications</p>
        <p className='text-start'><img style={{width:"24px", height:"24px", margin:'0px 10px'}} src={calender} alt="" /> Clients who book their own appointments online may still receive <br />
        <span className='ms-5'>messages.<span style={{color:'#1BB70B'}}>Learn more</span> </span></p>
        
          
        </Card.Text>
        
      </Card.Body>
    </Card>
       
      
        </div>
    );
};

export default SANService;
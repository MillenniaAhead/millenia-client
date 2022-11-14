import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {IoReorderThreeOutline } from 'react-icons/io5';

const Servicemenu = () => {
    return (
       <div style={{margin:"10px 200px"}}>
         <div className='d-flex justify-content-between'>
            <div>
                <p style={{fontSize:'22px'}}>Settings .  <span style={{fontWeight:'semibold'}}>Services menu</span></p><br />
                <h4 style={{fontSize:' 38px', fontWeight:''}}>Services menu</h4>
            </div>
            <div className='d-flex'>
            <Dropdown className='p-2' style={{marginRight:'15px'}}>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
       Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <Dropdown className='p-2'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Add New
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">New Service </Dropdown.Item>
        <Dropdown.Item href="#/action-2">New Category </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
           
            </div>
        </div>
        <div style={{height:"88px", backgroundColor:'#E5E5E5', marginBottom:'30px'}}>
         <button className='m-4'>Toggle</button>
        </div>
        <div>
          <div className='d-flex flex-row m-3 ms-3'> <span className='fs-4'><IoReorderThreeOutline/></span><h2>Hair</h2></div>
        </div>
        <div className=''>
        <div className='p-4 d-flex justify-content-between border border-muted border-start-0'>
           <div> <h4>< IoReorderThreeOutline/>Haircut</h4></div>
            <div><h4 className='text-muted'>45min</h4></div>
            <div><h4 className='text-dark'>₹40</h4></div>
        </div>
        <div className='p-4 d-flex justify-content-between border border-muted border-start-0'>
           <div> <h4>< IoReorderThreeOutline/>Haircut</h4></div>
            <div><h4 className='text-muted'>45min</h4></div>
            <div><h4 className='text-dark'>₹40</h4></div>
        </div>
        <div className='p-4 d-flex justify-content-between border border-muted border-start-0'>
           <div> <h4>< IoReorderThreeOutline/>Haircut</h4></div>
            <div><h4 className='text-muted'>45min</h4></div>
            <div><h4 className='text-dark'>₹40</h4></div>
        </div>
        <div className='p-4 d-flex justify-content-between border border-muted border-start-0'>
           <div> <h4>< IoReorderThreeOutline/>Haircut</h4></div>
            <div><h4 className='text-muted'>45min</h4></div>
            <div><h4 className='text-dark'>₹40</h4></div>
        </div>
        </div>
       </div>
    );
};

export default Servicemenu;
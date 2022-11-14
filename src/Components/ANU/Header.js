import React from 'react';
import logo from '../../images/outletservice/Ellipse 2.jpg'
import name from '../../images/outletservice/OUTLETCONTROL (1).jpg'
import kLogo from '../../images/outletservice/kLogo.jpg'
import { GoSearch } from 'react-icons/go';
import {AiOutlineRocket } from 'react-icons/ai';
import {TfiBell } from 'react-icons/tfi';


const Header = () => {
    return (
        <div className='mx-2' style={{height:"88px", display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            
                <div className='d-flex'>
                    <img style={{height:'67px'}} src={logo} alt="" />
                    <img style={{height:'67px'}} src={name} alt="" />
                </div>
            <div className='d-flex align-items-center'>
                <div style={{fontSize:'36px',marginRight:'25px', marginBottom:'20px'}}><GoSearch/> <AiOutlineRocket/> <TfiBell/></div>
                <div > <img style={{height:"56px"}} src={kLogo} alt="" /></div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import './CSS/Style.css'
import idea from '../images/team/Idea.jpg';
import Upperbutton from './Upperbutton';

const TeamSize = () => {
    return (
        <section>
           <Upperbutton></Upperbutton>
            <div >
                <p >Business setup</p>
                <h3 className='text-center'>What’s your team size?</h3>
                <p>This will help us set up your calender correctly. Don’t worry, this doesn’t change the price- you can have unlimited team <br />
members for free on salon!</p>
                   <div className='teamMember'>
         
           <input className='mt-5 mx-4' type="radio" name="me" id="" value="" />
            <label htmlFor="team1">It’s just me</label> 
            <br />
            <input className=' mt-5 mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">2-5 people</label>
            <br />
            <input className='mt-5 mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">6-10 people </label><br />
            <input className=' mt-5  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">11+ people</label>

            <div style={{margin:'22px', padding:'10px', backgroundColor:'#DAE9F7', borderRadius:'10px'}}className='d-flex justify-content-center'>
                <div className='me-2'><img src={idea} alt="" /></div>
               <div> <p >We’ll add  ‘Wendy’ as an example employee so you can see how the <br />
 system works. You can manage employees later once you’re in!</p></div>
            </div>
                   </div>
            </div>
        </section>
    );
};

export default TeamSize;
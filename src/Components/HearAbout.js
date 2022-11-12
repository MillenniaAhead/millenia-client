import React from 'react';
import Upperbutton from './Upperbutton';

const HearAbout = () => {
    return (
        <section>
        <Upperbutton></Upperbutton>
         <div >
             <p >Business setup</p>
             <h3 className='text-center'>How did you hear about OUTLETCONTROL ?</h3>
             
                <div className='teamMember'>
      
        <input className='mt-5 mx-4' type="radio" name="" id="" value="" />
         <label htmlFor="team1">Recommended by a friend</label> 
         <br />
         <input className=' mt-5 mx-4' type="radio" name="" id="" value="" /><label htmlFor="">Search engine (e.g. Google, Yahoo)</label>
         <br />
         <input className='mt-5 mx-4' type="radio" name="" id="" value="" /><label htmlFor="">Social media</label>
         <br />
         <input className=' mt-5  mx-4' type="radio" name="" id="" value="" /><label htmlFor="">Magazine ad</label>
         <br />
         <input className=' mt-5  mx-4' type="radio" name="" id="" value="" /><label htmlFor="">Ratings website (e.g. Capterra, Trustpilot)</label>
         <br />
         <input className=' my-5  mx-4' type="radio" name="" id="" value="" /><label htmlFor="">Other</label>
         

         
                </div>
         </div>
     </section>
    );
};

export default HearAbout;
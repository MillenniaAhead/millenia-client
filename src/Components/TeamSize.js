import React from 'react';
import './CSS/Style.css'

const TeamSize = () => {
    return (
        <section>
            <div className='detailUpper px-5 d-flex justify-content-between align-items-center'>
                  <div>
                    <button type='button' class="btn btn-link linkButton">X</button>
                    <button type="button" class="btn btn-link linkButton">Previous</button></div>
                  <div><button type="button" class="btn btn-secondary nextButton">Next Step</button></div>
            </div>
            <div>
                <p >Business setup</p>
                <h3 className='text-center'>What’s your team size?</h3>
                <p>This will help us set up your calender correctly. Don’t worry, this doesn’t change the price- you can have unlimited team <br />
members for free on salon!</p>
                   <div className='teamMember'>
            <input className='p-3 mt-5 mx-4' type="radio" name="me" id="" value="" />It’s just me <br />
            <input className='p-3  mt-5 mx-4' type="radio" name="me" id="" value="" />2-5 people
            <br />
            <input className='p-3  mt-5 mx-4' type="radio" name="me" id="" value="" />6-10 people <br />
            <input className='p-3  mt-5 mx-4' type="radio" name="me" id="" value="" />11+ people
                   </div>
            </div>
        </section>
    );
};

export default TeamSize;
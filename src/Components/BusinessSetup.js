import React from 'react';
import './CSS/Style.css'

const BusinessSetup = () => {
    return (
        <section>
            <div className='detailUpper px-5 d-flex justify-content-between align-items-center'>
                  <div>
                    <button type='button' class="btn btn-link linkButton">X</button>
                    <button type="button" class="btn btn-link linkButton">Previous</button></div>
                  <div><button type="button" class="btn btn-secondary nextButton">Next Step</button></div>
            </div>
            <hr
        style={{
          background: 'gray',height: '3px',
        }}
      />
            <div >
                <p >Business setup</p>
                <h3 className='text-center'>Set your location</h3>
                <p>Add your business location so your clients can easily find you.</p>
                   
            </div>
        </section>
    );
};

export default BusinessSetup;
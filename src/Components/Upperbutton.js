import React from 'react';
import { GrClose} from 'react-icons/gr';

const Upperbutton = () => {
    return (
        <div>
             <div className='detailUpper px-5 d-flex justify-content-between align-items-center'>
                  <div>
                    <button type='button' class="btn btn-link linkButton"><GrClose/></button>
                    <button type="button" class="btn btn-link linkButton">Previous</button></div>
                  <div><button type="button" class="btn btn-secondary nextButton">Next Step</button></div>
            </div>
            <hr
        style={{
          background: 'gray',height: '3px',
        }}
      />
        </div>
    );
};

export default Upperbutton;
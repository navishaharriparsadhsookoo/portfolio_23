import React from 'react';
import awn from '../images/akshwedsnamzlogo.svg';
import sac from '../images/schultzandcologo.svg';
import wfc from '../images/wfc.svg';


function Section4() {
  return (
    <div className="section">
      <div id="section4" className="first-section">
        <div className='inner-first-section'>
          <h2>Portfolio</h2>
          <p>Through a blend of creativity and technical proficiency, I helped deliver intuitive interfaces that elevated user interactions and fulfilled project goals.</p>
        <br/>
          <div class="row">
              <div class="column column1">
              <img src={awn} id="awn" />
              </div>
              <div class="column column2"><img src={sac} id="sac" /></div>
              <div class="column column3"><img src={wfc} id="wfc" /></div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Section4;

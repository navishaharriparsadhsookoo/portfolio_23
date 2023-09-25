import React from 'react';
import background from '../images/background.svg';
import diver from '../images/scuba-diver.svg';

function Section1() {
  return (
    <div className="section">
      <div id="section1" className="first-first-section">
        <div className='inner-first-section'>
          <div className="table-container">
            <table>
              <tr>
                <td className="left-column">
                  <h1>Hi there!<br />Call me Vish.</h1>
                  <h3>Frontend developer during the day inquisitorial by night.</h3>
                  <p>I'm Vish, a frontend developer fascinated by <br />
                  <b>technology</b>, <b>artificial intelligence</b>, and the <b>mesmerizing ocean</b>. 
                    <br /><br />
                    My coding journey is driven by a love for <b>crafting seamless digital experiences</b>,
                    <br />
                    while my <b>curiosity</b> leads me to dive into the <b>ever-evolving tech world</b>.
                  </p>
                  < br/>< br/>
                  <a href="https://drive.google.com/file/d/1vh8tSZl8rrUnMfM-W47K82QT-Mul8Vyl/view?usp=sharing" class="button-1" role="button">Download CV</a><br/><br/>
                  <a href="#section5" class="button-1" role="button">Connect</a>
                </td>

                <td className="right-column">
                <div className = "scuba">
                  <img src={background} id="background-img" />
                  <img src={diver} id="diver-img" />
                </div>
                </td>


              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
import React from 'react';
import Form from '../components/form';
import { SocialIcon } from 'react-social-icons'

function Section5() {
  return (
    <div className="section">
      <div id="section5" className="first-section">
        <div className='inner-first-section'>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td className="sixth-left-column">
                    <h2>Let's connect</h2>
                    <p>Through a blend of creativity and technical proficiency, I helped deliver intuitive interfaces that elevated user interactions and fulfilled project goals.</p>
                    <SocialIcon url="https://www.linkedin.com/in/navisha-harriparsadh-sookoo-a2848415b/" style={{ marginRight: '20px' }} />
                    <SocialIcon url="https://github.com/navishaharriparsadhsookoo" />
                    <div className='mobile-form'>
                      <Form/>
                    </div>
                  </td>
                  <td className="sixth-right-column">
                    <Form />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

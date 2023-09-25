import React from 'react';

function Section3() {
  return (
    <div className="section">
      <div id="section3" className="first-section">
        <div className='inner-first-section'>
          <div className="table-container">
            <table>
              <tr>
                <td className="thirdleftcolumn">
                  <div class="history-tl-container">
                      <ul class="tl">
                        <li class="tl-item" ng-repeat="item in retailer_history">
                          <div class="timestamp">
                            March 2023 - <br/>Present
                          </div>
                          <div class="item-title">Frontend developer</div>
                          <div class="item-detail">DarkMatter Marketing</div>
                        </li>
                        <li class="tl-item" ng-repeat="item in retailer_history">
                          <div class="timestamp">
                            November 2021 - <br/>March 2023
                          </div>
                          <div class="item-title">Web and graphic designer</div>
                          <div class="item-detail">WEB ARTIST® - Digital Marketing Agency</div>
                        </li>
                        <li class="tl-item" ng-repeat="item in retailer_history">
                          <div class="timestamp">
                            May 2021 - <br/>August 2021
                          </div>
                          <div class="item-title">Software developer</div>
                          <div class="item-detail">May 2021 - August 2021</div>
                        </li>
                        <li class="tl-item" ng-repeat="item in retailer_history">
                          <div class="timestamp">
                           March 2021 - <br/>December 2021
                          </div>
                          <div class="item-title">Code tutor</div>
                          <div class="item-detail">March 2021 - December 2021</div>
                        </li>
                      </ul>
                    </div>
                </td>
                <td className="thirdrightcolumn">
                <h2>Experience</h2>
                  <p>I contributed to the creation and enhancement of engaging, user-centric websites. </p>
                  <p>Collaborating closely with cross-functional teams,  I transformed design concepts into fully functional web experiences. </p>
                  <p>Through a blend of creativity and technical proficiency, I helped deliver intuitive interfaces that elevated user interactions and fulfilled project goals.</p>
                
                <div className='mobile-timeline'>
                <div class="history-tl-container">
                      <ul class="tl">
                        <li class="tl-item" ng-repeat="item in retailer_history">
                          <div class="timestamp">
                            March 2023 - Present
                          </div>
                          <div class="item-title">Frontend developer</div>
                          <div class="item-detail">DarkMatter Marketing</div>
                        </li>
                        <li class="tl-item" ng-repeat="item in retailer_history">
                          <div class="timestamp">
                            November 2021 - March 2023
                          </div>
                          <div class="item-title">Web and graphic designer</div>
                          <div class="item-detail">WEB ARTIST® - Digital Marketing Agency</div>
                        </li>
                        <li class="tl-item" ng-repeat="item in retailer_history">
                          <div class="timestamp">
                            May 2021 - August 2021
                          </div>
                          <div class="item-title">Software developer</div>
                          <div class="item-detail">May 2021 - August 2021</div>
                        </li>
                        <li class="tl-item" ng-repeat="item in retailer_history">
                          <div class="timestamp">
                           March 2021 - December 2021
                          </div>
                          <div class="item-title">Code tutor</div>
                          <div class="item-detail">March 2021 - December 2021</div>
                        </li>
                      </ul>
                    </div>
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

export default Section3;
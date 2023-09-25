import React, { useState } from 'react';

function Section2() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="section">
      <div id="section2" className="secondfirstsection">
        <div className='inner-first-section'>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td className="secondleftcolumn">
                    <h2>About</h2>
                    <p>Greetings there! I go by Navisha Sookoo, affectionately known as "Vish" – just like "fish," but with a playful twist.</p>
                    <p>Ironically, Marine Biology has always intrigued me, and I'm no stranger to the allure of the waters; swimming is a passion of mine.</p>
                    <p>I have a knack for visualizing the seemingly impossible. Currently pursuing a Bachelor of Science in Information Technology at Richfield Graduate Institute of Technology, with a focus on Software Development, I'm journeying towards my degree. </p>
                    <p>My fascination with video games sparked my interest in Information Technology, driving me to unravel the intricacies behind seamless gameplay execution. While I'm taking strides as a web developer now, my sights are set on specializing in Artificial Intelligence and Robotics down the road.</p>

                    <div className='mobile-acc'>
                    <div className="acc-container">
                      <div className="faq-drawer">
                        <input
                          className="faq-drawer__trigger"
                          id="faq-drawer-1"
                          type="checkbox"
                          checked={openAccordion === 1}
                          onChange={() => handleAccordionClick(1)}
                        />
                        <label className="faq-drawer__title" htmlFor="faq-drawer-1">
                          Where do I see myself in 5 years?
                        </label>
                        <div className={`faq-drawer__content-wrapper ${openAccordion === 1 ? 'open' : ''}`}>
                          <p>
                            In 5 years, I envision myself as a seasoned DevOps engineer, having mastered a wide range of skills and excelling in the technology industry.
                          </p>
                        </div>
                      </div>

                      <div className="faq-drawer">
                        <input
                          className="faq-drawer__trigger"
                          id="faq-drawer-2"
                          type="checkbox"
                          checked={openAccordion === 2}
                          onChange={() => handleAccordionClick(2)}
                        />
                        <label className="faq-drawer__title" htmlFor="faq-drawer-2">
                          What interests do I have?
                        </label>
                        <div className={`faq-drawer__content-wrapper ${openAccordion === 2 ? 'open' : ''}`}>
                          <p>
                            I possess a range of diverse interests, including a passion for reading, avid consumption of podcasts, an appreciation for a variety of shows, culinary skills encompassing both cooking and baking, a penchant for outdoor activities like hiking, and a strong curiosity for exploring uncharted territories.
                          </p>
                        </div>
                      </div>

                      <div className="faq-drawer">
                        <input
                          className="faq-drawer__trigger"
                          id="faq-drawer-3"
                          type="checkbox"
                          checked={openAccordion === 3}
                          onChange={() => handleAccordionClick(3)}
                        />
                        <label className="faq-drawer__title" htmlFor="faq-drawer-3">
                          How do I motivate myself?
                        </label>
                        <div className={`faq-drawer__content-wrapper ${openAccordion === 3 ? 'open' : ''}`}>
                          <p>
                            I am professionally motivated by my commitment to continuous learning and personal growth. I set clear goals, embrace challenges, and maintain a growth mindset. Regular reflection and staying open to new experiences keep me highly motivated.
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </td>

                  <td className="secondrightcolumn">
                    <div className="acc-container">
                      <div className="faq-drawer">
                        <input
                          className="faq-drawer__trigger"
                          id="faq-drawer-1"
                          type="checkbox"
                          checked={openAccordion === 1}
                          onChange={() => handleAccordionClick(1)}
                        />
                        <label className="faq-drawer__title" htmlFor="faq-drawer-1">
                          Where do I see myself in 5 years?
                        </label>
                        <div className={`faq-drawer__content-wrapper ${openAccordion === 1 ? 'open' : ''}`}>
                          <p>
                            In 5 years, I envision myself as a seasoned DevOps engineer, having mastered a wide range of skills and excelling in the technology industry.
                          </p>
                        </div>
                      </div>

                      <div className="faq-drawer">
                        <input
                          className="faq-drawer__trigger"
                          id="faq-drawer-2"
                          type="checkbox"
                          checked={openAccordion === 2}
                          onChange={() => handleAccordionClick(2)}
                        />
                        <label className="faq-drawer__title" htmlFor="faq-drawer-2">
                          What interests do I have?
                        </label>
                        <div className={`faq-drawer__content-wrapper ${openAccordion === 2 ? 'open' : ''}`}>
                          <p>
                            I possess a range of diverse interests, including a passion for reading, avid consumption of podcasts, an appreciation for a variety of shows, culinary skills encompassing both cooking and baking, a penchant for outdoor activities like hiking, and a strong curiosity for exploring uncharted territories.
                          </p>
                        </div>
                      </div>

                      <div className="faq-drawer">
                        <input
                          className="faq-drawer__trigger"
                          id="faq-drawer-3"
                          type="checkbox"
                          checked={openAccordion === 3}
                          onChange={() => handleAccordionClick(3)}
                        />
                        <label className="faq-drawer__title" htmlFor="faq-drawer-3">
                          How do I motivate myself?
                        </label>
                        <div className={`faq-drawer__content-wrapper ${openAccordion === 3 ? 'open' : ''}`}>
                          <p>
                            I am professionally motivated by my commitment to continuous learning and personal growth. I set clear goals, embrace challenges, and maintain a growth mindset. Regular reflection and staying open to new experiences keep me highly motivated.
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Section2;

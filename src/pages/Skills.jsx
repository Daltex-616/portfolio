import React from 'react'
import "../public/skills.css"
export const Skills = () => {
  return (
    <>
        <section className='skills'>
            <h2 className='skills__skills-title'>SKILLS</h2>
            <div className='skills__wrapper'>
                <div className='skills__skills-stack'>
                    <h3 className='skills__skills-stack-title'>Frontend</h3>
                    <ul>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--100'>100%</div>
                            </div>
                            <span className='skills__skill-name'>html</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--90'>90%</div>
                            </div>
                            <span className='skills__skill-name'>css</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--90'>90%</div>
                            </div>
                            <span className='skills__skill-name'>JavaScript</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--80'>80%</div>
                            </div>
                            <span className='skills__skill-name'>ReactJs</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--70'>70%</div>
                            </div>
                            <span className='skills__skill-name'>Redux</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--80'>80%</div>
                            </div>
                            <span className='skills__skill-name'>TypeScript</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--20'>20%</div>
                            </div>
                            <span className='skills__skill-name'>Angular</span>
                        </li>
                    </ul>
                </div>
                <div className='skills__skills-stack'>
                <h3 className='skills__skills-stack-title'>Backend</h3>
                    <ul>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--90'>90%</div>
                            </div>
                            <span className='skills__skill-name'>NodeJs</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--80'>80%</div>
                            </div>
                            <span className='skills__skill-name'>Express</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--70'>70%</div>
                            </div>
                            <span className='skills__skill-name'>MySql</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--90'>90%</div>
                            </div>
                            <span className='skills__skill-name'>MongoDb</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--50'>50%</div>
                            </div>
                            <span className='skills__skill-name'>Sqlite</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--30'>30%</div>
                            </div>
                            <span className='skills__skill-name'>.net</span>
                        </li>
                        <li className='skills__skill'>
                            <div className='load-bar'>
                                <div className='load-bar__bar bar--60'>60%</div>
                            </div>
                            <span className='skills__skill-name'>Python</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}


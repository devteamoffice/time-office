import React from 'react'
import '../styles/comingpage.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import comingimg from '../assets/Image/comingpage.png'

const ComingPage = () => {
    const [text] = useTypewriter({
        words: ['Soon...'],
        loop: 0
    })

    return (

        <>
            <section className='coming-section'>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 p-4">
                            <div className='text-container'>
                                <h1> Coming&nbsp;
                                    <span>
                                        {text}
                                    </span>
                                    <Cursor />
                                </h1>

                                <p>
                                    Our upcoming product line will feature enhanced facial recognition capabilities, providing even more accurate and secure attendance tracking.
                                </p>
                                <div className='notify-box' >
                                    <input type="text" placeholder='Please enter your email address' />
                                    <button>Notify Me</button>
                                </div>

                                <div>
                                    Counting
                                </div>




                            </div>
                        </div>
                        <div className="col-md-6 px-4">
                            <div className='outer-coming2'>
                                <img src={comingimg} alt="" />
                                <div className='inncer-comingsec-2'>
                                    <p >Computerized Time Attendance Device</p>
                                    <button>View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default ComingPage

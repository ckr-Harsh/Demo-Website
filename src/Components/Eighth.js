import React from 'react'
import Math from '../Store/math.png'
import Bio from '../Store/bio.png'
import Chemistry from '../Store/chemistry.png'
import Physics from '../Store/physics.png'

function Eighth() {
    return (
        <div className='sixth_div'>
            <h2 className='solve' style={{paddingBottom:50}}>
                <span className='doubts'>
                   State
                </span>
                &nbsp; Boards
            </h2>
            <p className='mini_text' style={{textAlign:'center'}}>
                Learn your board syllabus from the best teachers with us.
            </p>
            <div className='flex'>
                <div className='children'>
                    <img alt='Authors' src={Math}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Maharastra</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Bio}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Punjab</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Chemistry}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Andhra Pradesh</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Physics}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>West Bengal</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Math}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Uttar Pradesh</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Chemistry}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Kerala</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Bio}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Rajasthan</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Physics}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Gujarat</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Math}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Tamil Nadu</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Chemistry}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Madhya Pradesh</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Bio}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Himachal</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Physics}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Jammu</span>
                        </p>
                </div>
            </div>
           
        </div>
    )
}

export default Eighth

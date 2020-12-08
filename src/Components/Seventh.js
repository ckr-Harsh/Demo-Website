import React from 'react'
import Math from '../Store/math.png'
import Bio from '../Store/bio.png'
import Chemistry from '../Store/chemistry.png'
import Physics from '../Store/physics.png'

function Seventh() {
    return (
        <div className='sixth_div'>
            <h2 className='solve' style={{paddingBottom:50}}>
                <span className='doubts'>
                    Free Access 
                </span>
                &nbsp; to 5000+ books
            </h2>
            <p className='mini_text' style={{textAlign:'center'}}>
                Get access to virtual library of 5000+ text books <br/>
                 and reference books of various stateboards and competitive exams.
            </p>
            
            <div className='flex'>
                <div className='children'>
                    <img alt='Authors' src={Math}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>HC Verma</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Bio}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>NCERT</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Chemistry}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>KC Sinha</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Physics}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Errorless</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Math}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Tata McGraw</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Chemistry}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>RD Sharma</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Bio}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Pradeep's</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Physics}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>SL Arora</span>
                        </p>
                </div><div className='children'>
                    <img alt='Authors' src={Math}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Dc Pandey</span>
                        </p>
                </div>
                <div className='children'>
                    <img alt='Authors' src={Chemistry}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>General Maths</span>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Seventh

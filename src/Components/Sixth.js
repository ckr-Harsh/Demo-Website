import React from 'react'
import Math from '../Store/math.png'
import Bio from '../Store/bio.png'
import Chemistry from '../Store/chemistry.png'
import Physics from '../Store/physics.png'

function Sixth() {
    return (
        <div className='sixth_div'>
            <h2 className='solve' style={{paddingBottom:50}}>
                <span className='doubts'>
                    Explore
                </span>
                &nbsp; the Subjects with us!
            </h2>
            
            <div className='flex'>
                <div className='children'>
                    <img src={Math}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Maths</span>
                        </p>
                </div>
                <div className='children'>
                    <img src={Bio}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Biology</span>
                        </p>
                </div>
                <div className='children'>
                    <img src={Chemistry}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Chemistry</span>
                        </p>
                </div>
                <div className='children'>
                    <img src={Physics}/>
                    <p className='mini_text'style={{fontWeight:500,paddingTop:5}} >
                        <span className='doubts'>Physics</span>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Sixth

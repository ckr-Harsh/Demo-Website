import React from 'react'
import * as Mat from '@material-ui/icons'
import Button from '@material-ui/core/Button'

function Fourth() {
    return (
        <div className='fourth_div'>
            <h2 className='solve' style={{textAlign:'center',paddingBottom:30}}>
                <span className='doubts'> 
                    JEE 
                </span>
                 &nbsp;  Mains & Advanced Preparation
            </h2>
            <div className='flex' style={{paddingTop:40}}>
            
            <div className='side_info'>

             <h3 className='faint' style={{paddingTop:40}}>
               <Mat.LanguageRounded color='primary'/> 
                   Micro concept videos
             </h3>
              <p className='mini_text'>
                 Find multilingual video explainations, <br/>
                  important and frequently confused concepts <br/>
                  from every subjects.
              </p>
              <h3 className='faint'>
                <Mat.AssignmentIndTwoTone color='secondary'/>   Interactive Sessions
              </h3>
              <p className='mini_text'>
                  Small groups for maximum student-teacher interaction.
              </p>
            </div>
            <div className='side_tablet2'>

            </div>
            </div>
            <span className='btn'>
            <Button
                variant='contained'
                size='large'
                color='secondary'
                style={{marginTop:40}}
                >
                    Prepare for JEE now
                </Button>
                </span>

        </div>
    )
}

export default Fourth

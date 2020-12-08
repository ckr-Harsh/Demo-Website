import React from 'react'
import * as Mat from '@material-ui/icons'
import Button from '@material-ui/core/Button'

function Third() {
    return (
        <div className='third_div'>
                  <h2 className='solve'style={{paddingBottom:90}}>
                  <span className='doubts'> Live </span>
                  Classes
             </h2>
             <div className='flex'>
            <div className='side_tablet'>

            </div>
            <div className='side_info'>
           

             <h3 className='faint'>
               <Mat.LanguageRounded color='primary'/>   Acessible Everywhere
             </h3>
              <p className='mini_text'>
                 Access to quality education anytime <br/>
                 anywhere.  
              </p>
              <h3 className='faint'>
                <Mat.ClassTwoTone color='secondary'/> Expert Teachers
              </h3>    
              <p className='mini_text'>
                  Unlimited access to video solutions.
              </p>
              <h3 className='faint'>
                <Mat.AssignmentIndTwoTone color='primary'/>   Interactive Sessions
              </h3>
              <p className='mini_text'>
                  Small groups for maximum student-teacher interaction.
              </p>
            </div>
            </div>
            <h2 className='solve' style={{fontSize:30}}>
                <span className='doubts'>
                    First Class Free!
                </span>
            </h2>
            <span className='btn'>
                <Button 
                    variant='contained'
                    size='medium'
                    color='secondary'
                    style={{fontSize:20,marginTop:20}}>
                        Book a Class now!
                    </Button>
            </span>
        </div>
    )
}

export default Third

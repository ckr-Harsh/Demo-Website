import React from 'react'
import Button from '@material-ui/core/Button'

function First() {
    return (
        <div className='first_div'>
            <div className='text'>
            <h1>Clear Your <span className='doubts'>doubts</span><br/>
            in your language.
            </h1>
             <Button 
                variant='outlined'
                size='large'
                color='primary'
                style={{marginTop:35,fontSize:25}}>
                    Get Started
             </Button>
            </div>
        </div>
    )
}

export default First

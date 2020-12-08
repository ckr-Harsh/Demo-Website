import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Ghoul from '../Store/tGhoul.jfif'
import Button from '@material-ui/core/Button'

function Nineth() {
    return (
        <div className='sixth_div'>
            <h2 className='solve'style={{paddingBottom:70}}>
                <span className='doubts'>
                    Meet
                </span>
                 &nbsp; our Expert Tutors
            </h2>
            <div className='experts' style={{paddingBottom:50}}>
                <div className='box'>
                <Avatar alt="Remy Sharp" src={Ghoul}  size='large'/>
                <div className='data'>
                    <h4> Harsh </h4>
                    <p >
                    Talented One.
                    </p>
                </div>
                </div>
                <div className='box'>
                <Avatar alt="Remy Sharp" src={Ghoul}  size='large'/>
                <div className='data'>
                    <h4> Harsh </h4>
                    <p >
                      Talented One.
                    </p>
                </div>
                </div>
                <div className='box' >
                <Avatar alt="Remy Sharp" src={Ghoul}  size='large'/>
                <div className='data'>
                    <h4> Harsh </h4>
                    <p >
                    Talented One.
                    </p>
                </div>
                </div>
                <div className='box' >
                <Avatar alt="Remy Sharp" src={Ghoul}  size='large'/>
                <div className='data'>
                    <h4> Harsh </h4>
                    <p >
                    Talented One.
                    </p>
                </div>
                </div>
            </div>

            <span className='btn'>
                <Button
                    variant='contained'
                    size='large'
                    color='secondary'
                    style={{
                        fontSize:25,
                        marginTop:30
                    }}
                    >
                        Download the App 
                    </Button>
            </span>
        </div>
    )
}

export default Nineth

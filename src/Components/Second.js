import React from 'react'
import * as Mat from '@material-ui/icons'
import Button from '@material-ui/core/Button'

function Second() {
    return (
        <div className='second_div'>
              <h2 className='solve'>Solve Your doubts 
                  <span className='doubts'> faster.</span>
             </h2>

             <h3 className='faint'>
               <Mat.LanguageRounded color='primary'/>   Acessible Everywhere
             </h3>
              <p className='mini_text'>
                 Access to quality education anytime <br/>
                 anywhere.  
              </p>
              <h3 className='faint'>
                <Mat.VideoLibraryRounded color='secondary'/> 1 Million+ videos
              </h3>    
              <p className='mini_text'>
                  Unlimited access to video solutions.
              </p>

              <div className='how'>
                  <h2 className='solve'>
                      <span className='doubts'>
                          How it works?
                      </span>
                  </h2>
                  <div className='working'>
                      <div className='one'>
                          <div className='Doubt'>
                              </div>                         
                            <h4>Have a doubt? </h4>
                      </div>
                      <span className='sign'><Mat.ArrowForwardIosOutlined/></span>
                      <div className='one'>
                          <div className='typing'>
                              </div>         
                            <h4>Type your question?<br/>
                                or<br/> 
                                Upload an Image
                            </h4>
                      </div>
                      <span className='sign'><Mat.ArrowForwardIosOutlined/></span>
                      <div className='one'>
                          <div className='solution'> 
                          </div>
                          <h4>Get your solution</h4>
                      </div>
                  </div>
              </div>
              <div className='btn'>
              <Button
              variant='contained'
              color='secondary'
              size='large'
              style={{fontSize:15}}>
                    Clear Your Doubts Now
              </Button>
              </div>
        </div>
    )
}

export default Second

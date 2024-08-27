import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {

const openLinkedIn = ()=> {
  window.open('https://www.linkedin.com/in/gururaj-kamble-09a0851a9', '_blank');
}
const openInstagram = ()=> {
  window.open('https://instagram.com/hey_its_guru_?igshid=MzRlODBiNWFlZA==', '_blank');
}
const openTwitter = ()=> {
  window.open('https://twitter.com/Gururaj_kamble1?t=9qraC78PjQGq05f3tpSImQ&s=08', '_blank');
}

  return (
    <div className='app__social'>
        <div>
            <BsTwitter onClick={openTwitter} style={{ cursor: 'pointer' }}/>
        </div>
        <div>
              <BsLinkedin onClick={openLinkedIn} style={{ cursor: 'pointer' }}/>
        </div>
        <div>
            <BsInstagram onClick={openInstagram} style={{ cursor: 'pointer' }}/>
        </div>  
    </div>
  )
}

export default SocialMedia
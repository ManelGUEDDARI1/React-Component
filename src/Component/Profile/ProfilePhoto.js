import React from 'react'
import img3 from './img3.jpg';

const ProfilePhoto = () => {
    return (
        <div className="pho">
    <h3>My Profile Photo</h3>
    <div className="pu">
 <img src={img3} width="450px" height="400px" />
        </div>
        </div>

    )
}

export default ProfilePhoto
import React from 'react';
import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';

const Footer = () => {
    return(
        <div className='information2'>
            <div className='row br4'>
                <div className='column'>
                    <h2>Copyright</h2>
                    <span className='copyright'><a href='https://air-line.herokuapp.com' className='color' >&#169; 2020 AirLine</a></span>
                </div>

                <div className='column'>
                    <h2>Contact</h2>                   
                        <p><PersonIcon />Create by: Hazbie Dalipaj</p>
                        <p><EmailIcon />Contact information: <a href='hazbie.dalipaj@marinetraffic.com' className='color'>hazbie.dalipaj@marinetraffic.com</a></p>                  
                </div>

                <div className='column'>
                    <h2>URL</h2>
                    <p><GitHubIcon/>Github: <a href='https://github.com/hazbie-dalipaj/AirLine.git' className='color'>click to view a code</a></p>
                </div>
            </div>
        </div>
    )
}
export default Footer;

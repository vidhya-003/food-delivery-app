import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <h2>FOOD DELIVERY APP</h2>
                <p>we believe that good food is essential for a good mood. Our mission is to bring you a world of flavors, right at your doorstep. From local favorites to international cuisines, we’ve got it all!
                </p>
                <div className="footer-social-icons">
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
                </div>
            </div>
            <div className="footer-content-center">
               
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 <span>&copy;</span> Food divery app - All Right Reserved.</p>
    </div>
  )
}

export default Footer

import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {

    // year function used at the copyright reserved..
    const currentYear = new Date();
    const year = currentYear.getFullYear();

    return (
        <div className='footer'>
            <div className='footer-logo'>
                <Link to='/'><img src={footer_logo} alt='' /></Link>
                <Link style={{ textDecoration: 'none' }} to='/'><p>SHOPPER</p></Link>

            </div>
            <hr />
            <table className='footer-details'>
                <tr>
                    <th width="20%">Company</th>
                    <th width="20%">Products</th>
                    <th width="20%">Offices</th>
                    <th width="20%">About</th>
                    <th width="20%">Contact</th>
                </tr>
                <tr>
                    <td width="20%">
                        Our Mission is to provide high-quality products with exceptional service. Discover our story and meet the people behind our brand.
                    </td>
                    <td width="20%">Our Products are valuable and highly qualitize by our experts.</td>
                    <td width="20%">To reach us, we have several branches in different states like Delhi, Jaipur, Mumbai, Pune, Chennai, Kolkata.</td>
                    <td width="20%">Founded in 2001, we started with a vision to make high-quality products accessible to everyone. Learn about our journey.</td>
                    <td width="20%">
                        Email: info@example.com
                        Phone: +91 9711XXXXXX
                    </td>
                </tr>
            </table>
            <div className='footer-social-icons'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt='' />
                </div>
                <div className='footer-icons-container'>
                    <img src={pintester_icon} alt='' />
                </div>
                <div className='footer-icons-container'>
                    <img src={whatsapp_icon} alt='' />
                </div>
            </div>
            <div className='footer-copyright'>
                <hr />
                <p>Copyright @{year} - All right are Reserved</p>
            </div>
        </div>
    )
}

export default Footer;

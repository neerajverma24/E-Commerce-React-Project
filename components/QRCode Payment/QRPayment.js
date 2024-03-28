import React, { useContext } from 'react';
import QRCode from 'react-qr-code';
import './QRPayment.css';
import amazonpay from '../Assets/Payment/amazon-pay.png'
import googlepay from '../Assets/Payment/google-pay.png'
import mastercard from '../Assets/Payment/mastercard.png'
import paytm from '../Assets/Payment/paytm.png'
import rupay from '../Assets/Payment/rupay.png'
import visa from '../Assets/Payment/visa.png'
import phonepe from '../Assets/Payment/phonepe.png'
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';



const QRPayment = () => {

    const { getTotalCartAmount } = useContext(ShopContext)

    // const navigate = useNavigate()

    // const confirmation = () => {
    //     if (window.confirm("Confirm first, to get the QR")) {
    //         navigate('/qrpayment')
    //     } else {
    //         navigate('/cart')
    //     }
    // }

    return (
        <div className='qrpayment'>
            {window.confirm("Please confirm to get the QR")}
            <p>For payment , scan this QR</p>
            <QRCode value={getTotalCartAmount} />
            <br /><br />
            <h3>Scan & Pay</h3>
            <hr />
            <p>payment accepted by</p>
            <div className='payment-logos'>
                <img src={amazonpay} alt='' />
                <img src={googlepay} alt='' />
                <img src={mastercard} alt='' />
            </div>
            <div className='payment-logos'>
                <img src={paytm} alt='' />
                <img src={phonepe} alt='' />
                <img src={rupay} alt='' />
                <img src={visa} alt='' />
            </div>
            <Link to='/'>
                <button>Continue Shopping</button>
            </Link>
        </div>
    )
}

export default QRPayment;

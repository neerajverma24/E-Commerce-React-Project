import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'

const CartItems = () => {
    const [inputPromo, setInputPromo] = useState('')

    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)

    const handleInputPromo = (e) => {
        setInputPromo(e.target.value)
    }

    const handlePromo = () => {
        if (inputPromo.length === 0) {
            alert("Promocode is empty")
        } else if (inputPromo.length < 5) {
            alert("Please enter a valid Promocode")
        } else {
            alert("Promocode is applied successfully")
        }
    }


    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt='' className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt='' />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}

            {/* Second half part  ====================================== */}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>$ {getTotalCartAmount()} </h3>
                        </div>
                    </div>
                    <button>
                        <Link style={{ textDecoration: 'none', color: "white" }} to='/qrpayment'>
                            PROCEED TO CHECKOUT
                        </Link>
                    </button>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have a promo code, Enter it here.</p>
                    <input type='text'
                        value={inputPromo}
                        onChange={handleInputPromo}
                        placeholder='promocode' />
                    <button onClick={handlePromo}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems

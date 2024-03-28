import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext)

    const handleSizes = () => {
        alert("Size selected")
    }

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt='' />
                </div>

            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>${product.old_price}</div>
                    <div className='productdisplay-right-price-new'>${product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    A fabric formed by weaving, felting, etc., from wool, hair, silk, flax, cotton, or other fiber, used for garments, upholstery, and many other items. a piece of such a fabric for a particular purpose: an altar cloth.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div onClick={handleSizes}>S</div>
                        <div onClick={handleSizes}>M</div>
                        <div onClick={handleSizes}>L</div>
                        <div onClick={handleSizes}>XL</div>
                        <div onClick={handleSizes}>XXL</div>
                    </div>
                </div>

                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>

                <p className='productdisplay-right-category'><span>Category : </span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay

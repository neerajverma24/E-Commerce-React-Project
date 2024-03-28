import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import all_product from '../Components/Assets/all_product';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
import { Link } from 'react-router-dom';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcateegory-indexSort'>
        <p>
          <span>Showing 1 to 12</span> out of 36 products
        </p>
      </div>
      <div className='shopcategory-sort'>
        <select>
          <option> Sort by <img src={dropdown_icon} alt='' /></option>
          <option value='men'>Mens</option>
          <option value='women'>Women</option>
          <option value='kids'>Kids</option>
        </select>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory

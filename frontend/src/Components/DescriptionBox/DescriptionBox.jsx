import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">

            <p>An eCommerce website is a digital platform that enables 
            businesses to sell products or services online. It provides
             a convenient way for customers to browse, select, and purcha
             se items from the comfort of their homes. Typically, these s
             ites feature categories, product pages, shopping carts, and 
             secure checkout systems to streamline the buying process. 
             They may also include features like product reviews, custome
             r accounts, and personalized recommendations to enhance use
             r experience. Popular examples include Amazon, eBay, and Sh
             opify-powered stores.</p>
             <p>
             Popular examples include Amazon, eBay, and Shopify-powered stores. By connecting directly with customers online, eCommerce websites help businesses expand their reach and operate 24/7, improving accessibility and sales potential.
             </p>
        </div>
    </div>
  )
}

export default DescriptionBox
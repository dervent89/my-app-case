import { Component } from 'react';
import '../assets/style/components/Products.scss';
import ImageOne from '../assets/images/products/1.png';
import ImageTwo from '../assets/images/products/2.png';
import ImageThree from '../assets/images/products/3.png';
import ImageFour from '../assets/images/products/4.png';
class Products extends Component {
    render() {
        return (
            <section className="products">
                <div className="container">
                    <h2 className="head_title">Try our other free products</h2>
                    <div className="products_list">
                        <div className="products_list-item">
                            <img src={ImageOne} alt="Privacy Policy Generator" />
                            <h5 className="title">Privacy Policy Generator</h5>
                            <p className="text">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                        </div>
                        <div className="products_list-item">
                            <img src={ImageTwo} alt="Terms & Conditions Generator" />
                            <h5 className="title">Terms & Conditions Generator</h5>
                            <p className="text">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                        </div>
                        <div className="products_list-item">
                            <img src={ImageThree} alt="Domain Name Generator" />
                            <h5 className="title">Domain Name Generator</h5>
                            <p className="text">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                        </div>
                        <div className="products_list-item">
                            <img src={ImageFour} alt="Invoice Generator" />
                            <h5 className="title">Invoice Generator</h5>
                            <p className="text">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Products;
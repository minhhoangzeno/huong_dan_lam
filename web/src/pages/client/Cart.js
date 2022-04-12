import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SERVER } from '../../apis/API';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import { getProductByIdThunk } from '../../redux/productSlice';
import '../../scss/cart.scss'

export default () => {
  const [products, setProducts] = useState([]);
  const search = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setProducts(cart);
    } else {
      setProducts([])
    }
  }
  useEffect(() => {
    search()
  },[])
  return (
    <>
      <Header />
      <section className="cart-detail">
        <div className="container cart">
          <div className="title">
            <ul>
              <li>
                <h2 className="text-before">Trang chủ</h2>
              </li>
              <li>
                <h2>Giỏ hàng</h2>
              </li>
            </ul>
          </div>
          {products.length > 0 ? <>
            <>
              <div className="cart-content">
                {products.map((item, index) => {
                  return (
                    <ProductItem productId={item?.cartId} productCart={item} key={index} />
                  )
                })}
              </div>
              <div className="total-bill">
                <div className="each-row">
                  <span>Tạm tính:</span>
                  <strong>694.444 đ</strong>
                </div>{" "}
                <div className="each-row">
                  <span>Phụ phí:</span>
                  <strong>-</strong>
                </div>{" "}
                <div className="each-row">
                  <span>Giảm giá:</span>
                  <strong>-</strong>
                </div>{" "}
                <div className="each-row">
                  <span>Hóa đơn VAT:</span>
                  <strong>64.444 đ</strong>
                </div>{" "}
                <div className="each-row">
                  <span>Tổng cộng</span>
                  <strong>763.888 đ</strong>
                </div>
                <div className="row each-row">
                  <a href="http://127.0.0.1:5500/page/payment.html">Đặt hàng</a>
                </div>
              </div>
            </>
          </> : <div>
            Giỏ hàng trống
          </div>}
        </div>
      </section>
      <Footer />
    </>
  )
}

function ProductItem({ productId, productCart }) {
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const search = async () => {
    let resp = await dispatch(getProductByIdThunk(productId));
    if (resp) {
      setProduct(resp)
    }
  }
  useEffect(() => {
    search()
  }, [productId])
  return (
    <>
      <div className="cart-item">
        <div className="cart-item__img">
          <img
            src={`${SERVER.URL_IMAGE}${product?.photoURL}`}
            alt="img"
          />
        </div>
        <div className="text">
          <a href="/#">{product?.title}</a>
          <p>
            <span>{productCart?.price} đ</span>
          </p>
          <div className="amount">
            <div className="minus" ></div>
            <input
              type="number"
              defaultValue={productCart?.amount}
              onchange="Handlekeypress(this, evevt, 10708, 694444)"
              onkeypress="Handlekeypress(this, evevt, 10708, 694444)"
            />
             <div className="plus" ></div>
          </div>
        </div>
        <a className="close remove-item" href="/#">
          X
        </a>
      </div>
    </>
  )
}
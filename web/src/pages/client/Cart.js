import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import '../../scss/cart.scss'

export default () => {
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
          <div className="cart-content">
            <div className="cart-item">
              <div className="cart-item__img">
                <img
                  src="https://hyt.r.worldssl.net/hinh-hoa-tuoi/thumb/shop-hoa-tuoi/10708_you-are-beautiful.jpg"
                  alt="img"
                />
              </div>
              <div className="text">
                <a href="/#">You are beautiful</a>
                <p>
                  <span>750.000 đ</span>
                </p>
                <div className="amount">
                  {/* <a href="/#" className="minus" ></a> */}
                  <input
                    type="number"
                    defaultValue={1}
                    onchange="Handlekeypress(this, evevt, 10708, 694444)"
                    onkeypress="Handlekeypress(this, evevt, 10708, 694444)"
                  />
                  {/* <a href="/#" className="plus" ></a> */}
                </div>
              </div>
              <a className="close remove-item" href="/#">
                X
              </a>
            </div>
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
        </div>
      </section>
      <Footer />
    </>
  )
}
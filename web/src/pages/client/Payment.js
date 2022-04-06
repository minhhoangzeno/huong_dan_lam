import React from 'react';
import '../../scss/payment.scss'
import '../../scss/common.scss'
import '../../scss/style.scss'
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default () => {
  return (
    <>
      <Header />
      <section className="payment">
        <div className="container">
          <div className="payment-title">
            <ul>
              <li className="payment-title__item">
                <span>Đăng nhập</span>
                <span>/</span>
              </li>
              <li className="payment-title__item">
                <span>Đơn hàng</span>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-xl-6">
              <div className="payment-infor">
                <h2>Thông tin người mua</h2>
                <div className="payment-infor__contact">
                  <span>Lấy thông tin liên lạc từ:</span>
                  <a href="/#">
                    <span className="item-fb">
                      <img
                        src="	https://hyt.r.worldssl.net/images/facebook_ico.svg"
                        alt="fb"
                      />
                      Facebook
                    </span>
                  </a>
                  <span className="item-seper">|</span>
                  <a href="/#">
                    <span className="item-gg">
                      <img
                        src="https://hyt.r.worldssl.net/images/google_ico.svg"
                        alt="gg"
                      />
                      Google
                    </span>
                  </a>
                </div>
                <div className="payment-infor__item">
                  <label htmlFor="#">
                    <span>*</span>
                    Họ và tên:
                  </label>
                  <input type="text" className="input-name" />
                </div>
                <div className="payment-infor__item">
                  <label htmlFor="#">
                    <span>*</span>
                    Điện thoại:
                  </label>
                  <input type="text" className="input-name" />
                </div>
                <div className="payment-infor__item">
                  <label htmlFor="#">
                    <span>*</span>
                    Email của bạn:
                  </label>
                  <input type="text" className="input-name" />
                </div>
                <div className="payment-infor__item">
                  <label htmlFor="#">
                    <span>*</span>
                    Địa chỉ:
                  </label>
                  <input type="text" className="input-name" />
                </div>
                <div className="input-choose">
                  <input type="checkbox" />
                  <label htmlFor="#">Giấu tên người gửi?</label>
                </div>
                <h2>Thông tin người nhận</h2>
                <div className="payment-infor__item">
                  <label htmlFor="#">
                    <span>*</span>
                    Tên người nhận:
                  </label>
                  <input type="text" className="input-name" />
                </div>
                <div className="payment-infor__item">
                  <label htmlFor="#">
                    <span>*</span>
                    Điện thoại:
                  </label>
                  <input type="text" className="input-name" />
                </div>
                <div className="payment-infor__item">
                  <label htmlFor="#">
                    <span>*</span>
                    Địa chỉ:
                  </label>
                  <input type="text" className="input-name" />
                </div>
                <div className="payment-infor__item">
                  <div className="box-address">
                    <label htmlFor="#">
                      <span>*</span>
                      Tỉnh/Thành phố:
                    </label>
                    <select className="address">
                      <option>Hà Nội</option>
                      <option>Các tỉnh miền Nam</option>
                      <option>Các tỉnh miền Trung</option>
                      <option>Các tỉnh miền Bắc</option>
                      <option>TP Hồ Chí Minh</option>
                    </select>
                    <select className="address">
                      <option>Hà Nội</option>
                      <option>Các tỉnh miền Nam</option>
                      <option>Các tỉnh miền Trung</option>
                      <option>Các tỉnh miền Bắc</option>
                      <option>TP Hồ Chí Minh</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="payment-infor__item">
                <div className="delivery">
                  <label htmlFor="#">
                    <span>*</span>
                    Phí giao hàng:
                  </label>
                </div>
                <h2>Thời gian giao hàng</h2>
                <div className="time-ship">
                  <select className="time-ship__box">
                    <option>Năm 2019</option>
                    <option>Năm 2020</option>
                    <option>Năm 2021</option>
                    <option>Năm 2022</option>
                    <option>Năm 2023</option>
                  </select>
                  <select className="time-ship__box">
                    <option>Tháng 1</option>
                    <option>Tháng 2</option>
                    <option>Tháng 3</option>
                    <option>Tháng 4</option>
                    <option>Tháng 5</option>
                    <option>Tháng 6</option>
                    <option>Tháng 7</option>
                    <option>Tháng 8</option>
                    <option>Tháng 9</option>
                    <option>Tháng 10</option>
                    <option>Tháng 11</option>
                    <option>Tháng 12</option>
                  </select>
                  <select className="time-ship__box">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <select className="time-ship__box">
                    <option>1h</option>
                    <option>2h</option>
                    <option>3h</option>
                    <option>4h</option>
                    <option>5h</option>
                  </select>
                </div>
                <h2>Lời nhắn</h2>
                <div className="give">
                  <label htmlFor="#">Thiệp tặng cho:</label>
                  <select className="input-name">
                    <option>Thiệp gửi tặng cho</option>
                    <option>Anh, chị, em-Brother, sister</option>
                    <option>Bạn bè-Friends</option>
                    <option>Bố mẹ-Parent</option>
                    <option>Chồng-Husband</option>
                    <option>Đặt giúp người khác-not me</option>
                    <option>Khác-other</option>
                  </select>
                </div>
                <div className="occation">
                  <label htmlFor="#">Nhân dịp:</label>
                  <select className="input-name">
                    <option>Nhân dịp</option>
                    <option>Chúc mừng-Congratulations</option>
                    <option>Khai trương-Grand opening</option>
                    <option>Sinh nhật-Birthday</option>
                    <option>Cảm ơn-Thankyou</option>
                    <option>Chia buồn-Sympathy</option>
                    <option>Khác-other</option>
                  </select>
                </div>
                <label>Thông điệp</label>
                <div>
                  <textarea
                    name="message"
                    id="#"
                    cols={30}
                    rows={2}
                    style={{ width: "100%" }}
                    defaultValue={""}
                  />
                </div>
                <label style={{ width: "100%" }}>
                  Lời nhắn cho Hoayeuthuong.com.
                </label>
                <div>
                  <textarea
                    name="message"
                    id="#"
                    cols={30}
                    rows={2}
                    style={{ width: "100%" }}
                    defaultValue={""}
                  />
                </div>
                <div>
                  <input className="check" type="checkbox" />
                  <label>Xuất hóa đơn GTGT</label>
                </div>
                <div className="button-order">
                  <a href="/#">Đặt hàng</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <div className="bill-card">
                <div className="img">
                  <img
                    src="https://hyt.r.worldssl.net/hinh-hoa-tuoi/thumb/shop-hoa-tuoi/11673_binh-hong-vang-at-30.jpg"
                    alt="img"
                  />
                </div>
                <div className="text-product">
                  <a href="/#">Binh hong vang AT 30</a>
                  <p>
                    <span>1 x 500.000 đ</span>
                  </p>
                </div>
              </div>
              <div className="calculation">
                <div className="each-row">
                  <span>Tạm tính:</span>
                  <strong>500.000 đ</strong>
                </div>
                <div className="each-row">
                  <span>Phụ phí:</span>
                  <strong>-</strong>
                </div>
                <div className="each-row">
                  <span>Giarm giá:</span>
                  <strong>-</strong>
                </div>
                <div className="each-row">
                  <span>Hóa đơn VAT:</span>
                  <strong>50.000 đ</strong>
                </div>
              </div>
              <div className="each-row">
                <span style={{ fontWeight: 600 }}>Tổng cộng:</span>
                <strong>550.000 d</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
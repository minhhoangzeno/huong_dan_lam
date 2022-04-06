import React from 'react';
import '../../scss/home.scss';
import '../../scss/product-detail.scss';
export default () => {
  return (
    <>
      <>
        <section className="detail">
          <div className="container ">
            <ul className="crumbs">
              <li>
                <h4>
                  <a className="crumbs-items" href='/#' >
                    Trang chủ
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a className="crumbs-items" href="/#">
                    Bộ sưu tập
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a className="crumbs-items1" href="/#">
                    Khuyến mãi
                  </a>
                </h4>
              </li>
            </ul>
            <div className="detail-content">
              <div className="detail-content__img">
                <img
                  src="https://hyt.r.worldssl.net/hinh-hoa-tuoi/hoa-khuyen-mai/10708_you-are-beautiful.jpg"
                  alt="product"
                />
                <div className="view-real">
                  <a href="/#">Xem ảnh thực tế</a>
                </div>
              </div>
              <div className="detail-content__product">
                <h2>Khuyến mãi-You are beautiful-10708</h2>
                <div className="single-price">
                  <span className="old-price">950.000 đ</span>
                  <span className="price">750.000 đ</span>
                </div>
                <p className="vat">Giá đã bao gồm 8% VAT</p>
                <div className="summary">
                  "Là phụ nữ hãy sống như cây như hoa. Dù không ai nhìn ngắm chiêm
                  ngưỡng vẫn luôn xanh tươi và nở rộ". Một nửa thế giới này là phụ nữ
                  vì thế hay luôn yêu quý họ và dành tặng cho họ những điều tuyệt vời
                  nhất bởi vì họ đều là những đoá hoa mỗi ngày tô điểm cho cuộc sống
                  này thêm xinh đẹp hơn.
                </div>
                <h4>Sản phẩm bao gồm:</h4>
                <ul className="material">
                  <li>Cát tường trắng: 5</li>
                  <li>Cúc calimero trắng: 6</li>
                  <li>Hoa Sao tím: 2</li>
                  <li>Hồng đỏ sa : 22</li>
                  <li>Lá đuôi chồn : 5</li>
                </ul>
                <p>
                  <i>
                    Sản phẩm thực nhận có thể khác với hình đại diện trên website (đặc
                    điểm thủ công và tính chất tự nhiên của hàng nông nghiệp)
                  </i>
                </p>
                <div className="attention">
                  <h4>LƯU Ý</h4>
                  <p>Sản phẩm bạn đang chọn là sản phẩm được thiết kế đăc biệt!</p>
                  <p>
                    Hiện nay, Hoayeuthuong.com chỉ thử nghiệm cung cấp cho thị trường{" "}
                    <strong>Tp. Hồ Chí Minh và Hà Nội</strong>
                  </p>
                </div>
                <div className="area-order">
                  <a href="/#" className="add-cart on-hand">
                    Giỏ hàng đã có
                  </a>
                  <a href="/#" className="buy-now">
                    Mua ngay
                  </a>
                </div>
                <div className="on-phone">
                  <a href="/#" className="call-now">
                    Gọi ngay: 1800 6353
                  </a>
                </div>
                <div className="offer">
                  <h4>ƯU ĐÃI ĐẶC BIỆT</h4>
                  <ul className="benefit">
                    <li>Tặng Banner Hoặc Thiệp (Trị Giá 20.000đ) Miễn Phí</li>
                    <li>Giảm Ngay 20.000đ Khi Bạn Tạo Đơn Hàng Online</li>
                    <li>
                      Giảm Tiếp 3% Cho Đơn Hàng Bạn Tạo ONLINE Lần Thứ 2, 5% Cho Đơn
                      Hàng Bạn Tạo ONLINE Lần Thứ 6 Và 10% Cho Đơn Hàng Bạn Tạo ONLINE
                      Lần Thứ 12 (Chỉ Áp Dụng Tại Tp. HCM Và Hà Nội)
                    </li>
                    <li>Giao Miễn Phí Trong Nội Thành 63/63 Tỉnh</li>
                    <li>Giao Gấp Trong Vòng 2 Giờ</li>
                    <li>Cam Kết 100% Hoàn Lại Tiền Nếu Bạn Không Hài Lòng</li>
                    <li>Cam Kết Hoa Tươi Trên 3 Ngày</li>
                  </ul>
                </div>
                <div className="sp-item">
                  <h2>CÁC NHÓM HOA</h2>
                  <a href="/#">Hoa sinh nhật</a>
                  <a href="/#">Hoa tình yêu</a>
                  <a href="/#">Hoa tặng người yêu</a>
                  <a href="/#">Hoa tặng vợ</a>
                  <a href="/#">Hoa tặng mẹ</a>
                  <a href="/#">Hoa tặng cho nữ</a>
                  <a href="/#">Hoatặng đồng nghiệp</a>
                  <a href="/#">Giỏ hoa tươi</a>
                  <a href="/#">Hoa hồng</a>
                  <a href="/#">Màu đỏ</a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="services-title">
              <h3> BẠN NÊN DÙNG DỊCH VỤ CỦA CHÚNG TÔI VÌ</h3>
            </div>
          </div>
        </section>
        <section className="services-content">
          <div className="container">
            <div className="services-item row">
              <div className="col-12 col-md-6 col-lg-4 col-xl-3  ">
                <div className="box-services">
                  <div className="services-img">
                    <img
                      src="	https://hyt.r.worldssl.net/images/icon-free-ship.png
                      "
                      alt="img"
                    />
                  </div>
                  <div className="services-text">
                    <div className="services-tit">
                      <span>MIỄM GIAO HÀNG 63 TỈNH THÀNH</span>
                    </div>
                    <div className="services-desc">
                      <span>Free shipping(nội thành)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
                <div className="box-services">
                  <div className="services-img">
                    <img
                      src="	https://hyt.r.worldssl.net/images/icon-free-ship.png
                      "
                      alt="img"
                    />
                  </div>
                  <div className="services-text">
                    <div className="services-tit">
                      <span>MIỄM GIAO HÀNG 63 TỈNH THÀNH</span>
                    </div>
                    <div className="services-desc">
                      <span>Free shipping(nội thành)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="box-services">
                  <div className="services-img">
                    <img
                      src="	https://hyt.r.worldssl.net/images/icon-free-ship.png
                      "
                      alt="img"
                    />
                  </div>
                  <div className="services-text">
                    <div className="services-tit">
                      <span>MIỄM GIAO HÀNG 63 TỈNH THÀNH</span>
                    </div>
                    <div className="services-desc">
                      <span>Free shipping(nội thành)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
                <div className="box-services">
                  <div className="services-img">
                    <img
                      src="	https://hyt.r.worldssl.net/images/icon-free-ship.png
                      "
                      alt="img"
                    />
                  </div>
                  <div className="services-text">
                    <div className="services-tit">
                      <span>MIỄM GIAO HÀNG 63 TỈNH THÀNH</span>
                    </div>
                    <div className="services-desc">
                      <span>Free shipping(nội thành)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-item row">
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
                <div className="box-services">
                  <div className="services-img">
                    <img
                      src="	https://hyt.r.worldssl.net/images/icon-free-ship.png
                      "
                      alt="img"
                    />
                  </div>
                  <div className="services-text">
                    <div className="services-tit">
                      <span>MIỄM GIAO HÀNG 63 TỈNH THÀNH</span>
                    </div>
                    <div className="services-desc">
                      <span>Free shipping(nội thành)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="box-services">
                  <div className="services-img">
                    <img
                      src="	https://hyt.r.worldssl.net/images/icon-free-ship.png
                      "
                      alt="img"
                    />
                  </div>
                  <div className="services-text">
                    <div className="services-tit">
                      <span>MIỄM GIAO HÀNG 63 TỈNH THÀNH</span>
                    </div>
                    <div className="services-desc">
                      <span>Free shipping(nội thành)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
                <div className="box-services">
                  <div className="services-img">
                    <img
                      src="	https://hyt.r.worldssl.net/images/icon-free-ship.png
                      "
                      alt="img"
                    />
                  </div>
                  <div className="services-text">
                    <div className="services-tit">
                      <span>MIỄM GIAO HÀNG 63 TỈNH THÀNH</span>
                    </div>
                    <div className="services-desc">
                      <span>Free shipping(nội thành)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="box-services">
                  <div className="services-img">
                    <img
                      src="	https://hyt.r.worldssl.net/images/icon-free-ship.png
                      "
                      alt="img"
                    />
                  </div>
                  <div className="services-text">
                    <div className="services-tit">
                      <span>MIỄM GIAO HÀNG 63 TỈNH THÀNH</span>
                    </div>
                    <div className="services-desc">
                      <span>Free shipping(nội thành)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

    </>
  )
}
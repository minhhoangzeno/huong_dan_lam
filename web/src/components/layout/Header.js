import React from 'react';
import '../../scss/style.scss';
export default () => {

    return (
        <>
            <section className="header-setting">
                <div className="container">
                    <div className="header-setting__address">
                        <span>Nơi giao hoa :</span>
                        <div className="header-setting__address--select">
                            <select>
                                <option>Hồ Chí Minh </option>
                                <option>Hà Nội</option>
                                <option>Các tỉnh thành miền Nam</option>
                                <option>Các tỉnh thành miền Bắc</option>
                                <option>Các tỉnh thành miền Trung</option>
                            </select>
                        </div>
                        <div className="header-settin__language">
                            <img
                                src="https://hyt.r.worldssl.net/images/flag-vn.png"
                                alt="language"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="navbar">
                <div className="container navbar__content ">
                    <div className="nabar__content--logo">
                        <img
                            style={{ paddingBottom: 20, width: 280, cursor: "pointer" }}
                            src="	https://hyt.r.worldssl.net/images/logo-hoa-yeu-thuong.png"
                            alt="logo"
                        />
                    </div>
                    <div className="navbar__content--main  ">
                        <div className="navbar-main__search">
                            <input
                                type="text"
                                placeholder="Tìm sản phẩm..."
                                style={{ paddingLeft: 10 }}
                            />
                            <button className="navbar-main__search--button">Tìm kiếm</button>
                        </div>
                        <ul className="navbar-main__contact">
                            <li className="navbar-main__contact--item">
                                <label>HOT LINE LIÊN HỆ</label>
                                <div>
                                    <span>0397012576</span>
                                </div>
                            </li>
                            <li className="navbar-main__contact--item">
                                <img
                                    src="	https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png"
                                    style={{ width: 30 }}
                                    alt="facebook"
                                />
                                <a href="https://www.facebook.com/logi.30/">logi</a>
                            </li>
                            <li className="navbar-main__contact--item">
                                <img
                                    src="	https://hyt.r.worldssl.net/images/zalo-chat-icon.png"
                                    alt="zalo"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__content--icon">
                        <div className="navbar-icon">
                            <a
                                href="http://127.0.0.1:5500/page/cart.html"
                                className="navbar-icon__svg"
                            >
                                <img
                                    src="https://hyt.r.worldssl.net/images/shopping-bag.png"
                                    alt="cart"
                                    className="img-cart"
                                    style={{ paddingLeft: 15 }}
                                />
                                <div className="navbar-icon__title">
                                    <span>Giỏ hàng</span>
                                </div>
                            </a>
                           
                        </div>
                        <div className="navbar-icon account">
                            <a href='/#' >
                                <div className="navbar-icon__svg">
                                    <img
                                        src="	https://hyt.r.worldssl.net/images/user.png"
                                        alt="account"
                                        className="img-account"
                                        style={{ paddingLeft: 15 }}
                                    />
                                </div>
                                <div className="navbar-icon__title">
                                    <span>Tài khoản</span>
                                </div>
                            </a>
                            <div className="box-signin">
                                <a className="sign-in" href="/#">
                                    sign in
                                </a>
                                <div className="dac">
                                    <strong>Bạn chưa có tài khoản?</strong>
                                    <div>
                                        <a className="register" href="/#">
                                            Nhấn vào đây
                                        </a>
                                    </div>
                                    <div>
                                        <a className="login-fb" href="/#">
                                            Login with facebook
                                        </a>
                                    </div>
                                    <div>
                                        <a className="login-gg" href="/#">
                                            Sign in with Google
                                        </a>
                                    </div>
                                </div>
                                <div className="npf">
                                    <strong>Lợi ích khi đăng ký</strong>
                                    <ul>
                                        <li>Được giảm giá từ 3-10%</li>
                                        <li>Nhận được các chương trình khuyến mãi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu">
                <div className="container">
                    <ul className="ul-navbar">
                        <li className="navbar-item">
                            <div className="padding">Trang chủ</div>
                        </li>
                        <li className="navbar-item topic">
                            <div className="topic padding">Chủ đề</div>
                            <ul className="sub-menu topic-content">
                                <li className="item">Hoa sinh nhật</li>
                                <li className="item">Hoa khai trương</li>
                                <li className="item">Hoa chia buồn</li>
                                <li className="item">Hoa chúc sức khỏe</li>
                                <li className="item">Hoa tình yêu</li>
                                <li className="item">Hoa cảm ơn</li>
                                <li className="item">Hoa mừng tốt nghiệp</li>
                            </ul>
                        </li>
                        <li className="navbar-item object">
                            <div className="object padding">Đối tượng</div>
                            <ul className="sub-menu object-content">
                                <li className="item">Hoa tặng người yêu</li>
                                <li className="item">hoa tặng bạn bè</li>
                                <li className="item">Hoa tặng vợ</li>
                                <li className="item">Hoa tặng chồng</li>
                                <li className="item">Hoa tặng mẹ</li>
                                <li className="item">Hoa tặng trẻ em</li>
                                <li className="item">Hoa tặng cho nam</li>
                                <li className="item">Hoa tặng cho nữ</li>
                            </ul>
                        </li>
                        <li className="navbar-item designs">
                            <div className="designs padding">Kiểu dáng</div>
                            <ul className=" sub-menu design-content">
                                <li className="item">Bó hoa sáp</li>
                                <li className="item">Giỏ hoa sáp</li>
                                <li className="item">Hoa thả bình</li>
                            </ul>
                        </li>
                        <li className="navbar-item color">
                            <div className="color padding">Màu sắc</div>
                            <ul className="sub-menu color-content">
                                <li className="item">Màu đỏ</li>
                                <li className="item">Màu hồng</li>
                                <li className="item">Màu cam</li>
                                <li className="item">Màu tím</li>
                                <li className="item">Màu vàng</li>
                                <li className="item">Màu xanh ( dương, lá cây)</li>
                                <li className="item">Màu trắng</li>
                                <li className="item">Màu kết hợp</li>
                            </ul>
                        </li>
                        <li className="navbar-item collection">
                            <div className="collection padding">Bộ sưu tập</div>
                            <ul className="sub-menu collection-content">
                                <li className="item">Hoa cao cấp</li>
                                <li className="item">Hoa sinh viên</li>
                                <li className="item">Mẫu hoa mới</li>
                                <li className="item">Khuyến mãi</li>
                                <li className="item">Hoa ngày lễ</li>
                                <li className="item">Hoa tình yêu</li>
                            </ul>
                        </li>
                        <li className="navbar-item gift">
                            <div className="gift padding">Quà tặng kèm</div>
                            <ul className="sub-menu gift-content">
                                <li className="item">Nước hoa</li>
                                <li className="item">Son</li>
                                <li className="item">Gấu bông</li>
                                <li className="item">Nến thơm</li>
                                <li className="item">Bánh kem (ship nội thành)</li>
                                <li className="item">Hộp quà</li>
                                <li className="item">Ví, thắt lưng</li>
                            </ul>
                        </li>
                        <li className="navbar-item meaningful">
                            <div className="meaningful padding">Ý nghĩa hoa</div>
                        </li>
                    </ul>
                </div>
            </section>

        </>

    )
}
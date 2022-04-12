import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes';
import '../../scss/style.scss';
import Navbar from './Navbar';
export default () => {
    const history = useHistory();
    return (
        <>
            <section className="navbar">
                <div className="container navbar__content ">
                    <div className="nabar__content--logo" style={{ cursor: 'pointer' }}
                        onClick={() => {
                            history.push(Routes.DashboardOverview.path)
                        }}
                    >
                        <img
                            style={{ paddingBottom: 20, width: 280, cursor: "pointer" }}
                            src="https://hyt.r.worldssl.net/images/logo-hoa-yeu-thuong.png"
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
                            <div
                                onClick={() => {
                                    history.push(Routes.Cart.path)
                                }}
                                className="navbar-icon__svg"
                                style={{ cursor: 'pointer' }}
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
                            </div>

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

            <Navbar />

        </>

    )
}
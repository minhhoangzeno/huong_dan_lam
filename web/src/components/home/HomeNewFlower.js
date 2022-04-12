import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import { getProductThunk } from '../../redux/productSlice';
import { Routes } from '../../routes';
export default () => {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  const search = async () => {
    let resp = await dispatch(getProductThunk());
    if (resp) {
      setProducts(resp)
    }
  }
  useEffect(() => {
    search()
  }, []);
  const history = useHistory();
  return (
    <>
     
      <section className="icon-flower">
        <div className="container">
          <span className="text-main" style={{ fontSize: 22, marginTop: 20 }} >MẪU HOA MỚI NHẤT 2022</span>
          <div className="items row" style={{ fontSize: 22, marginTop: 20 }}>
            {products && products?.map((item, index) => {
              return (
                <div key={index} className="img-flower col-12 col-md-6 col-lg-4 col-xl-2 "
                  onClick={() => {
                    history.push({
                      pathname: Routes.ProductDetail.path,
                      state: item
                    })
                  }}
                >
                  <div style={{
                    height: 169, width: 169, borderRadius: 85,
                    backgroundColor: '#f7f7f7',
                    boxShadow: '0px 0px 3px 2px #999',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }} >
                    <img
                      src={`${SERVER.URL_IMAGE}${item?.photoURL}`}
                      alt="img"
                      width={100}
                    />
                  </div>

                  <p style={{ marginTop: 15 }} >{item?.title}</p>
                </div>
              )
            })}
            {/* <div className="img-flower col-12 col-md-6 col-lg-4 col-xl-2 ">
              <img
                src="	https://hyt.r.worldssl.net/images/icon-hoa-tinh-yeu.png"
                alt="img"
              />
              <p>HOA TÌNH YÊU</p>
            </div>
            <div className="img-flower col-12 col-md-6 col-lg-4 col-xl-2 ">
              <img
                src="	https://hyt.r.worldssl.net/images/icon-hoa-sinh-nhat.png"
                alt="img"
              />
              <p>HOA SINH NHẬT</p>
            </div>
            <div className="img-flower col-12 col-md-6 col-lg-4 col-xl-2">
              <img
                src="	https://hyt.r.worldssl.net/images/icon-mau-hoa-moi.png"
                alt="img"
              />
              <p>MẪU HOA MỚI</p>
            </div>
            <div className="img-flower col-12 col-md-6 col-lg-4 col-xl-2">
              <img
                src="https://hyt.r.worldssl.net/images/icon-cay-vp.png"
                alt="img"
              />
              <p> HOA VĂN PHÒNG</p>
            </div>
            <div className="img-flower col-12 col-md-6 col-lg-4 col-xl-2 ">
              <img
                src="https://hyt.r.worldssl.net/images/icon-hoa-chuc-mung.png"
                alt="img"
              />
              <p>HOA CHÚC MỪNG</p>
            </div>
            <div className="img-flower col-12 col-md-6 col-lg-4 col-xl-2  ">
              <img
                src="https://hyt.r.worldssl.net/images/icon-hoa-tang-le.png"
                alt="img"
              />
              <p>HOA CHIA BUỒN</p>
            </div> */}
          </div>



        </div>
      </section>

    </>
  )
}
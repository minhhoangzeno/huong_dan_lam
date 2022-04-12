import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SERVER } from '../../apis/API';
import { getCategoryThunk } from '../../redux/categorySlice';
import { getProductByCategoryThunk, getProductThunk } from '../../redux/productSlice';
export default () => {
  const [productBottoms, setProductBottoms] = useState();
  const [productTops, setProductTops] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const searchCategory = async () => {
    let resp = await dispatch(getCategoryThunk());
    if (resp) {
      let respCategory = resp?.filter(item => item.title == "Quà tặng")[0];
      if (respCategory) {
        setCategory(respCategory)
      }
    }
  }
  const searchProducts = async () => {
    if (category) {
      let respProducts = await dispatch(getProductByCategoryThunk(category?._id))
      if (respProducts) {
        let respProductTops = [];
        let respProductBottoms = [];
        respProducts.map((item, index) => {
          if (index < 5) {
            respProductTops.push(item)
          } else {
            respProductBottoms.push(item)
          }
        })
        setProductTops(respProductTops);
        setProductBottoms(respProductBottoms);
      }
    }

  }
  useEffect(() => {
    searchCategory()
  }, [])
  useEffect(() => {
    searchProducts()
  }, [category])
  return (
    <>
      <div className="container gift-add">
        <h2 className="gift-title">{category?.title}</h2>
        {/* <div className="gift-tile__link">
          <a href="/#">Bánh kem Tous les Jours</a>
          <a href="/#">Chocolate</a>
          <a href="/#">Bánh kem Brodard</a>
          <a href="/#">Trái cây</a>
          <a href="/#">Qùa tặng kèm</a>
        </div> */}
      </div>
      <section className="gift-choose">
        <div className="container box-gift">
          <div className="gift-choose__item row">
            {productTops && productTops?.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 col-xl-2" key={index} >
                  <div className="box-item">
                    <div className="img-gift" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                      <img
                        src={`${SERVER.URL_IMAGE}${item?.photoURL}`}
                        alt="bear"
                        width={120}
                        height={80}
                      />
                    </div>
                    <div className="cost-name">
                      <div className="gift-name">
                        <a href="/#">{item?.title}</a>
                      </div>
                      <div className="gift-cost">
                        <span>{item?.price} đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="gift-choose__item gift-2 row">
            {productBottoms && productBottoms?.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 col-xl-2" key={index} >
                  <div className="box-item">
                    <div className="img-gift" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                      <img
                        src={`${SERVER.URL_IMAGE}${item?.photoURL}`}
                        alt="bear"
                        width={120}
                        height={80}
                      />
                    </div>
                    <div className="cost-name">
                      <div className="gift-name">
                        <a href="/#">{item?.title}</a>
                      </div>
                      <div className="gift-cost">
                        <span>{item?.price} đ</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
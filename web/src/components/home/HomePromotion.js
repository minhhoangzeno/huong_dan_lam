import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import { getCategoryThunk } from '../../redux/categorySlice';
import { getProductByCategoryThunk } from '../../redux/productSlice';
import { Routes } from '../../routes';
export default () => {
  const [productBottoms, setProductBottoms] = useState();
  const history = useHistory();
  const [productTops, setProductTops] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const searchCategory = async () => {
    let resp = await dispatch(getCategoryThunk());
    if (resp) {
      let respCategory = resp?.filter(item => item.title == "Hoa Tươi")[0];
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
      <section className="promotion">
        <div className="container block-container">
          <h5>
            <a href="/#">{category?.title}</a>
          </h5>
          <div className="block-sale">
            <div className="flower-sale row">
              {productTops && productTops?.map((item, index) => {
                return (
                  <div className="flower-sale_item col-12 col-md-6 col-lg-4 col-xl-2" key={index}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      history.push({
                        pathname: Routes.ProductDetail.path,
                        state: item
                      })
                    }}
                  >
                    <div className="block-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                      <img
                        src={`${SERVER.URL_IMAGE}${item?.photoURL}`}
                        alt="sale"
                        width={120}
                        height={80}
                      />
                      <br />
                    </div>
                    <div className="name-cost">
                      <p className="name-cost__title" >{item?.title}</p>
                      <span>
                        <em style={{ color: "red" }}>{item?.price}</em>
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flower-sale__2">
              {productBottoms && productBottoms?.map((item, index) => {
                return (
                  <div className="flower-sale_item col-12 col-md-6 col-lg-4 col-xl-2" key={index}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      history.push({
                        pathname: Routes.ProductDetail.path,
                        state: item
                      })
                    }}
                  >
                    <div className="block-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                      <img
                        src={`${SERVER.URL_IMAGE}${item?.photoURL}`}
                        alt="sale"
                        width={120}
                        height={80}
                      />
                      <br />
                    </div>
                    <div className="name-cost">
                      <p className="name-cost__title" >{item?.title}</p>
                      <span>
                        <em style={{ color: "red" }}>{item?.price}</em>
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
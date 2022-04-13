import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

export default () => {
  let location = useLocation();
  let order = location.state;
  console.log(order)
  const [locationData, setLocationData] = useState();
  let history = useHistory();
  let searchLocation = async () => {
    let responsive = await axios.get('https://provinces.open-api.vn/api/?depth=2');
    if (responsive.status === 200) {
      setLocationData(responsive.data)
    }
  }
  useEffect(() => {
    searchLocation()
  }, [])
  let city = locationData?.filter(item => item.code == order?.peopleSend?.city)[0]
  let districtSend = city?.districts?.filter(item => item.code == order?.peopleSend?.district)[0]?.name;
  let cityRecieve = locationData?.filter(item => item.code == order?.peopleRecieve?.city)[0]
  let districRecieve = cityRecieve?.districts?.filter(item => item.code == order?.peopleRecieve?.district)[0]?.name;
  return (
    <>
      <Header />
      <Container className='mt-4 mb-4' >
        <Row>
          <h3 className="mb-3">Chi tiết đơn hàng</h3>
          <Form>
            <div className='order__detail' >
              <label>Thông tin người nhận - người gửi</label>
              <table>
                <thead>
                  <tr>
                    <th>Người gửi</th>
                    <th>Nơi gửi</th>
                    <th>Địa chỉ gửi</th>
                    <th>Người nhận</th>
                    <th>Nơi nhận</th>
                    <th>Địa chỉ nhận</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order?.peopleSend.fullName}</td>
                    <td>{districtSend} - {city?.name}</td>
                    <td>{order?.peopleSend.address}</td>
                    <td>{order?.peopleRecieve.fullName}</td>
                    <td> {districRecieve} - {cityRecieve?.name}</td>
                    <td>{order?.peopleRecieve.address}</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ height: 50 }} ></div>
              <label>Lời nhắn</label>

              <table>
                <thead>
                  <tr>
                    <th>Thiệp gửi tặng</th>
                    <th>Nhân dịp</th>
                    <th>Thông điệp</th>
                    <th>Lời nhắn cho Hoayeuthuong</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order?.message?.titleSend}</td>
                    <td>{order?.message?.occasion}</td>
                    <td>{order?.message?.noteSendToPersonReceive}</td>
                    <td>{order?.message?.noteSendToPersonAdmin}</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ height: 50 }} ></div>
              <label>Thời gian giao hàng</label>
              <table>
                <thead>
                  <tr>
                    <th>Năm</th>
                    <th>Tháng</th>
                    <th>Ngày</th>
                    <th>Giờ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order?.time?.year}</td>
                    <td>{order?.time?.month}</td>
                    <td>{order?.time?.day}</td>
                    <td>{order?.time?.hour}</td>
                  </tr>

                </tbody>
              </table>
              <div style={{ height: 50 }} ></div>
              <label>Hàng</label>
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên Hàng</th>
                    <th>Ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.orderProducts?.map((item, index) => {
                    return (
                      <tr key={index} >
                        <th>{index + 1}</th>
                        <th>{item?.product?.title}</th>
                        <th><img alt='' src={`${SERVER.URL_IMAGE}${item?.product?.photoURL}`}
                          width={150}
                          height={50}
                          style={{ margin: 10 }}
                        /></th>
                        <th>{item?.amount}</th>
                        <th>{item?.price}</th>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div style={{ height: 50 }} ></div>
            <label>Trạng thái</label>
            <InputGroup >
              <Form.Control autoFocus required type="text"

                value={order?.status}
                disabled
              />
            </InputGroup>

            <Button variant="secondary" type="button" className="m-3"
              onClick={() => history.goBack()}>
              Quay lại
            </Button>
          </Form>
        </Row>
      </Container>
      <Footer />
    </>

  )
}
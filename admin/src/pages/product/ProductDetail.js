import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { SERVER } from '../../apis/API';
import { getCategoryThunk } from '../../redux/categorySlice';
import { Routes } from '../../routes';
import { tinyConfig } from '../../TiniConfigure';

export default () => {
  const location = useLocation();
  const product = location.state;
  const { control, formState: { errors } } = useForm();
  let category = useSelector(state => state.category.data);
  const search = () => {
    dispatch(getCategoryThunk())
  }
  useEffect(() => {
    search() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let history = useHistory()
  let dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <h3 className="mb-3">Add Product</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tiêu đề</Form.Label>
            <Controller
              control={control}
              name="title"
              render={({
                field: { onChange, onBlur, value }
              }) => (
                <InputGroup style={{ border: errors.title?.type === "required" && '1px solid red' }}>
                  <Form.Control autoFocus required type="text" onChange={e => onChange(e.target.value)}
                    onBlur={onBlur}
                    value={value}
                    disabled
                  />
                </InputGroup>
              )}
              rules={{
                required: true
              }}
              defaultValue={product.title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Danh mục</Form.Label>
            <select value={product.category} disabled  >
              {category?.map((item, index) => {
                return <option key={index} value={item?._id} >{item.title}</option>
              })}
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Giá</Form.Label>
            <Controller
              control={control}
              name="price"
              render={({
                field: { onChange, onBlur, value }
              }) => (
                <InputGroup style={{ border: errors.title?.type === "required" && '1px solid red' }}>
                  <Form.Control autoFocus required type="text" onChange={e => onChange(e.target.value)}
                    onBlur={onBlur}
                    value={value}
                    disabled
                  />
                </InputGroup>
              )}
              rules={{
                required: true
              }}
              defaultValue={product.price}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nội dung</Form.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                  init={tinyConfig}
                  onEditorChange={(event) => {
                    onChange(event)
                  }}
                  onBlur={onBlur}
                  value={value}

                />
              )}
              name="content"
              defaultValue={product.content}
              rules={{ required: true }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Lưu ý</Form.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                  init={tinyConfig}
                  onEditorChange={(event) => {
                    onChange(event)
                  }}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="warn"
              defaultValue={product.warn}
              rules={{ required: true }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tiện ích</Form.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                  init={tinyConfig}
                  onEditorChange={(event) => {
                    onChange(event)
                  }}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="animate"
              defaultValue={product.animate}
              rules={{ required: true }}
            />
          </Form.Group>
          <Form.Group className="mt-4" >
            <Form.Label>Image</Form.Label>
            <div className="d-xl-flex align-items-center">
              <div className="user-avatar xl-avatar">
                {product?.photoURL && <img src={`${SERVER.URL_IMAGE}${product?.photoURL}`} alt="" />}
              </div>
              <div className="file-field">
                <div className="d-flex justify-content-xl-center ms-xl-3">
                  <div className="d-flex">
                    <span className="icon icon-md">
                      <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                    </span>

                    <div className="d-md-block text-start">
                      <div className="fw-normal text-dark mb-1">Choose Image</div>
                      <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form.Group>
          <Button variant="secondary" type="button" className="m-3"
            onClick={() => history.push(Routes.Product.path)}
          >
            Cancel
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
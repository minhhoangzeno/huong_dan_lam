import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { getCategoryThunk } from '../../redux/categorySlice';
import { editTagThunk } from '../../redux/tagSlice';
import { Routes } from '../../routes';

export default () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  let tag = location.state;
  let { addToast } = useToasts();
  let history = useHistory()
  let dispatch = useDispatch();
  let category = useSelector(state => state.category.data);
  const [categoryId, setCategoryId] = useState(tag.category._id);
  const search = () => {
    dispatch(getCategoryThunk())
  }
  useEffect(() => {
    search() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let editData = async (form) => {
    dispatch(editTagThunk(tag._id, { title: form.title, category: categoryId }))
    addToast("Success", { appearance: 'success', autoDismiss: 1000 });
    history.push(Routes.Tag.path)
  }
  return (
    <Container>
      <Row>
        <h3 className="mb-3">Sửa Tag</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
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
                  />
                </InputGroup>
              )}
              rules={{
                required: true
              }}
              defaultValue={tag.title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Danh mục</Form.Label>
            <select onChange={e => setCategoryId(e.target.value)}
              value={categoryId}
            >
              {category?.map((item, index) => {
                return <option key={index} value={item?._id} >{item.title}</option>
              })}
            </select>
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleSubmit(editData)} >
            Submit
          </Button>
          <Button variant="secondary" type="button" className="m-3"
            onClick={() => history.push(Routes.Tag.path)}
          >
            Cancel
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
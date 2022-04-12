import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { addBlogThunk } from '../../redux/blogSlice';
import { addTestThunk } from '../../redux/testSlice';
import { Routes } from '../../routes';

export default () => {

  const { control, handleSubmit, formState: { errors } } = useForm();

  let { addToast } = useToasts();
  let history = useHistory()
  let dispatch = useDispatch();
  let addData = async (form) => {
    //  let resp = await dispatch(addTestThunk({
    //    title: form.title,
    //    content: form.content
    //  }))
    let resp = await dispatch(addTestThunk(form));
    if (resp) {
      alert('Success')
    }
  }
  return (
    <Container>
      <Row>
        <h3 className="mb-3">Add Test</h3>
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
                  />
                </InputGroup>
              )}
              rules={{
                required: true
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Content</Form.Label>
            <Controller
              control={control}
              name="content"
              render={({
                field: { onChange, onBlur, value }
              }) => (
                <InputGroup style={{ border: errors.title?.type === "required" && '1px solid red' }}>
                  <Form.Control autoFocus required type="text" onChange={e => onChange(e.target.value)}
                    onBlur={onBlur}
                  />
                </InputGroup>
              )}
              rules={{
                required: true
              }}
            />
          </Form.Group>



          <Button variant="primary" type="button" onClick={handleSubmit(addData)} >
            Submit
          </Button>
          <Button variant="secondary" type="button" className="m-3"
            onClick={() => history.push(Routes.Blog.path)}
          >
            Cancel
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
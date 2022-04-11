import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup, Card, Col, Container, Dropdown, Row, Table } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { deleteCategoryThunk, getCategoryThunk } from '../../redux/categorySlice';
import { deleteTagThunk, getTagThunk } from '../../redux/tagSlice';
import { Routes } from "../../routes";

export default () => {
  let history = useHistory();
  let tag = useSelector(state => state.tag.data);
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  let dispatch = useDispatch();

  const search = async () => {
    let resp = await dispatch(getCategoryThunk());
    if (resp) {
      setCategories(resp)
      setCategory(resp[0]?._id)
    }
  }
  let { addToast } = useToasts()
  useEffect(() => {
    search()
  }, []);

  useEffect(() => {
    dispatch(getTagThunk(category)) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  let deleteTag = async (tagId) => {
    await dispatch(deleteTagThunk(tagId));

    addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
  }

  // let routerDetailCategory = (data) => {
  //     history.push({
  //         pathname: Routes.CategoryDetail.path,
  //         state: data
  //     })
  // }
  let routerEditTag = (data) => {
    history.push({
      pathname: Routes.TagEdit.path,
      state: data
    })
  }
  return (
    <Container>
      <Row className="mb-4" >
        <Col>
          <Button variant="warning" onClick={() => history.push(Routes.TagAdd.path)} >Add</Button>
        </Col>
      </Row>
      <Row>
        <Row className="mb-4" >
          <Col>
            <select onChange={e => setCategory(e.target.value)}  >
              {categories?.map((item, index) => {
                return <option key={index} value={item?._id} >{item.title}</option>
              })}
            </select>
          </Col>
        </Row>
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
          <Card.Body className="pt-0">
            <Table hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom">#</th>
                  <th className="border-bottom">Title</th>
                  <th className="border-bottom">Danh mục</th>
                  <th className="border-bottom">Settings</th>
                </tr>
              </thead>
              <tbody>
                {tag && tag.map((tagItem, index) => {
                  return (
                    <TableItem index={index + 1} tag={tagItem} key={index} routerEditTag={routerEditTag} deleteTag={deleteTag} />
                  )
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

function TableItem({ index, tag, routerEditTag, deleteTag }) {
  return (
    <tr>
      <td>
        <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
      </td>
      <td>{tag.title}</td>
      <td>{tag.category.title}</td>
      <td>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
            <span className="icon icon-sm">
              <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => routerEditTag(tag)} >
              <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
            </Dropdown.Item>
            <Dropdown.Item className="text-danger" onClick={() => deleteTag(tag._id)}  >
              <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}   

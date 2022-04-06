import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup, Card, Dropdown, Table, Container, Row, Col } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { SERVER } from '../../apis/API';
import { getCategoryThunk } from '../../redux/categorySlice';
import { deleteProductThunk, getProductThunk } from '../../redux/productSlice';
import { Routes } from "../../routes";

export default () => {
    let history = useHistory();
    const [categoryId, setCategoryId] = useState();
    let category = useSelector(state => state.category.data);
    const [product, setProduct] = useState([]);
    let { addToast } = useToasts()
    let dispatch = useDispatch();
    const searchProduct = async () => {
        if (categoryId) {
            let data = await dispatch(getProductThunk(categoryId));
            setProduct(data);
        }
    }
    useEffect(() => {
        searchProduct() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId])
    const searchCategory = async () => {
        let resp = await dispatch(getCategoryThunk())
        setCategoryId(resp[0]?._id)
    }
    useEffect(() => {
        searchCategory() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let deleteProduct = async (productId) => {
        await dispatch(deleteProductThunk(productId));
        addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
        searchProduct()
        // if (resp) {
        //     await dispatch(searchProduct());
        //     addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
        // }
    }

    let routerEditProduct = (data) => {
        history.push({
            pathname: Routes.ProductEdit.path,
            state: data
        })
    }
    let routerDetailProduct = (data) => {
        history.push({
            pathname: Routes.ProductDetail.path,
            state: data
        })
    }
    return (
        <>
            <Container>
                <Row className="mb-4" >
                    <Col>
                        <Button variant="warning" onClick={() => history.push(Routes.ProductAdd.path)} >Add</Button>
                    </Col>
                </Row>
                <Row className="mb-4" >
                    <Col>
                        <select onChange={e => setCategoryId(e.target.value)}  >
                            {category?.map((item, index) => {
                                return <option key={index} value={item?._id} >{item.title}</option>
                            })}
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Card border="light" className="table-wrapper table-responsive shadow-sm">
                        <Card.Body className="pt-0">
                            <Table hover className="user-table align-items-center">
                                <thead>
                                    <tr>
                                        <th className="border-bottom">#</th>
                                        <th className="border-bottom">Title</th>
                                        <th className="border-bottom">Giá</th>
                                        <th className="border-bottom">Image</th>
                                        <th className="border-bottom">Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product && product.map((productItem, index) => {
                                        return (
                                            <TableItem index={index + 1} product={productItem} key={index} routerEditProduct={routerEditProduct} deleteProduct={deleteProduct}
                                                routerDetailProduct={routerDetailProduct}
                                            />
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}


function TableItem({ index, product, routerEditProduct, deleteProduct, routerDetailProduct }) {
    return (
        <>
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                    <img src={`${SERVER.URL_IMAGE}${product.photoURL}`} alt="" width={70} />
                </td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                            <span className="icon icon-sm">
                                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => routerDetailProduct(product)}  >
                                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => routerEditProduct(product)} >
                                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger" onClick={() => deleteProduct(product._id)}  >
                                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>

            </tr>
        </>
    );
}   

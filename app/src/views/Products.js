import React, { useState } from 'react';
import { Form, FormControl, Button, Image, Table } from 'react-bootstrap';
import {
  AiFillInfoCircle,
  AiOutlineClose,
  AiOutlineEdit,
} from 'react-icons/ai';
import Layout from '../components/Layout';
import chair from '../assets/chair.jpeg';
import ModalPopup from '../components/Modal';

const Products = () => {
  const [show, setShow] = useState(false);
  const products = [
    {
      img: chair,
      name: 'Chair',
      category: 'Sofa',
      condition: 'New',
      price: '500 INR',
    },
    {
      img: chair,
      name: 'Chair',
      category: 'Sofa',
      condition: 'New',
      price: '500 INR',
    },
  ];
  return (
    <Layout>
      <section className="m-5">
        <div>
          <h1>Product Inventory Page</h1>
          <p>This is the product inventory page</p>
        </div>

        <div>
          <Form inline className="justify-content-end my-3">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Condition</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>
                    <Image src={product.img} thumbnail />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.condition}</td>
                  <td>{product.price}</td>
                  <td>
                    <AiFillInfoCircle />
                    <AiOutlineClose />
                    <AiOutlineEdit />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div>
          <Button size="sm" onClick={() => setShow(true)}>
            Add Product
          </Button>
          <ModalPopup show={show} setShow={setShow} />
        </div>
      </section>
    </Layout>
  );
};

export default Products;

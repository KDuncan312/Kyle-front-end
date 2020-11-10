import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <section className="m-5">
        <div>
          <h1>Administrator Page</h1>
          <p>This is the administrator's page</p>
        </div>

        <div>
          <h2>
            Welcome: Vikram | <Link to="/login">Logout</Link>
          </h2>
          <div>
            <Link to="/admin/products">Product Inventory</Link>
            <p>Here you can view, check and modify inventory</p>
          </div>
          <div>
            <Link to="/admin/customers">Customer Management</Link>
            <p>Here you can view the customer information</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;

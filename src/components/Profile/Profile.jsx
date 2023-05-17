import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin, Collapse } from "antd";
import "./Profile.scss"
import { FcBusinessman } from "react-icons/fc";
import { RiShoppingBasketFill } from "react-icons/ri";


const Profile = () => {
  const { Panel } = Collapse
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <Spin size="large" />
  }

  return (
    <div className="profile-container">
      <div className="card-container">
        <Card
          title="Profile"
          extra={<span className="role" href="#">{user.role}</span>}
          style={{
            width: 300,
          }}
        >
          <FcBusinessman className="profile-icon"/>
          <p>Name: {user.name}</p>
          <p>Surname: {user.surname}</p>
          <p>Email: {user.email}</p>
        </Card>
      </div>
      <div>
        <h3>Orders</h3>
        {user.Orders && user.Orders.length > 0 ? (
          user.Orders.map(order => {
            return (
              <Collapse key={order.id} defaultActiveKey={['1']} >
                <Panel header={order.createdAt.slice(0, 10)} key="1">
                  <p className="products-order">{order.Products.map(product => product.name + " ;  ")} </p>
                </Panel>
              </Collapse>
            )
          })
        ) : (
          <div className="no-orders">
            <RiShoppingBasketFill className="icon-profil-no-orders" />
            <p>No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

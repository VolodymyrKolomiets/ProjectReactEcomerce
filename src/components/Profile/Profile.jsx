import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin, Collapse } from "antd";
import "./Profile.scss"

const Profile = () => {
  const { Panel } = Collapse
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <Spin size="large" />
  }
  return <div className="profile-container">
    <div className="card-container">
      <Card
        title="Profile"
        extra={<span className="role" href="#">{user.role}</span>}
        style={{
          width: 300,
        }}
      >
        <img style={{
          width: 30,
        }} src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360" alt="" />
        <p>Name: {user.name}</p>
        <p>Surname: {user.surname}</p>
        <p>Email: {user.email}</p>
      </Card>
    </div>
    <div>
      <h3>Orders</h3>
      {user.Orders?.map(order => {
        return (
          <Collapse key={order.id} defaultActiveKey={['1']} >
            <Panel header="Order List" key="1">
              <p className="products-order">{order.Products.map(product => product.name + " ")}</p>
            </Panel>
          </Collapse>
        )
      })}

    </div>
  </div>;
};

export default Profile
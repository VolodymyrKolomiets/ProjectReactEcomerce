import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin, Collapse } from "antd";

const Profile = () => {
  const { Panel } = Collapse
  const { user } = useContext(UserContext);
 
  console.log(user)
  

  
  if(!user){
    return   <Spin size="large" />
  }
  return <div>
    <Card
      title="Profile"
      extra={<a href="#">{user.role}</a>}
      style={{
        width: 300,
      }}
    >
        <img  style={{
        width: 30,
      }} src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360" alt="" />
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Email: {user.email}</p>
    </Card>
    <h3>Orders</h3>
    <Collapse defaultActiveKey={['1']} >
      <Panel header="This is panel header 1" key="1">
        <p>{}</p>
      </Panel>
    </Collapse>
  </div>;
};

export default Profile
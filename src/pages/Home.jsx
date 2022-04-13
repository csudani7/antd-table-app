//global import
import React from "react";
import axios from "axios";

//local import
import CustomTable from "../components/Table";

export default function HomePage() {
  const apiEndPoint = process.env.REACT_APP_API_ENDPOINT;
  const [userList, setUserList] = React.useState([]);
  // Array of column
  const tableColumn = [
    {
      title: "User Id",
      dataIndex: "id",
      key: "id",
      width: "100px",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  //to fetch list of user
  async function fetchUserList() {
    await axios
      .get(`${apiEndPoint}/users`)
      .then((response) => setUserList(response.data))
      .catch((error) => console.log(error));
  }

  React.useEffect(() => {
    fetchUserList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CustomTable dataSource={userList} columns={tableColumn} />;
}

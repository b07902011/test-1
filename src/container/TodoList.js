import "./TodoList.css";
import { useEffect, useState } from "react";
import EditableTable from "../component/EditableTable";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import { tidyUpData } from "../component/Data";

const config = {
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
function CONCAT_SERVER_URL(url) {
  const SERVER_URL = process.env.REACT_APP_BACKEND_URL;
  return url.startsWith(SERVER_URL) ? url : `${SERVER_URL}${url}`;
}
const TodoList = ({ userInfo, setModalShow }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const modifyTableData = (newData) => {
    setData(newData);
  };
  const onQuery = async () => {
    setIsLoading(true);
    await axios
      .post(CONCAT_SERVER_URL("/getTodos"), userInfo, config)
      .then((response) => {
        const rawData = tidyUpData(response.data && response.data.info);
        setData(rawData);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  };
  return (
    <div className="Todo">
      <div className="Todo-table">
        <EditableTable
          data={data}
          setData={modifyTableData}
          handleQuery={onQuery}
          userInfo={userInfo}
          setModalShow={setModalShow}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default TodoList;

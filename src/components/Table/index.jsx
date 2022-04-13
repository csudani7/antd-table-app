//global import
import React from "react";
import { Card, Table } from "antd";
// css import
import "./style.css";

export default function CustomTable(props) {
  const { dataSource, columns } = props;

  return (
    <div className="table-container">
      <Card className="card">
        <Table
          dataSource={dataSource}
          columns={columns}
          scroll={{ y: 340 }}
          pagination={false}
        />
      </Card>
    </div>
  );
}

import React from "react";
import { Layout, Menu, Card, Row, Col, Button } from "antd";
import {
  FileAddOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "new",
      icon: <FileAddOutlined />,
      label: "新建简历",
    },
    {
      key: "templates",
      icon: <AppstoreOutlined />,
      label: "模板市场",
    },
    {
      key: "stats",
      icon: <BarChartOutlined />,
      label: "数据统计",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "账号设置",
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider width={250} theme="light">
        <div className="p-4">
          <h2 className="text-xl font-bold">我的工作台</h2>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["new"]}
          items={menuItems}
          onClick={({ key }) => {
            if (key === "new") {
              navigate("/editor");
            } else if (key === "templates") {
              navigate("/templates");
            }
          }}
        />
      </Sider>
      <Layout>
        <Content className="p-6">
          <div className="mb-6">
            <Button type="primary" onClick={() => navigate("/editor")}>
              新建简历
            </Button>
          </div>

          <h3 className="text-lg font-semibold mb-4">最近编辑的简历</h3>
          <Row gutter={[16, 16]}>
            {/* 这里后续会添加简历卡片组件 */}
            <Col span={8}>
              <Card
                hoverable
                title="示例简历"
                extra={<Button type="link">继续编辑</Button>}
              >
                <p>最后编辑时间：2024-03-22</p>
                <p>完成度：60%</p>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

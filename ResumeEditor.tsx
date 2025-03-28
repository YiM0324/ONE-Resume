import React from "react";
import { Layout, Menu, Button, Space } from "antd";
import {
  SaveOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

const ResumeEditor: React.FC = () => {
  const sections = [
    { key: "personal", label: "个人信息" },
    { key: "education", label: "教育背景" },
    { key: "experience", label: "工作经历" },
    { key: "projects", label: "项目成果" },
    { key: "skills", label: "技能证书" },
    { key: "summary", label: "自我评价" },
  ];

  return (
    <Layout className="min-h-screen">
      {/* 顶部操作栏 */}
      <div className="bg-white shadow-sm px-6 py-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold">简历编辑器</h2>
        <Space>
          <Button icon={<SaveOutlined />}>保存</Button>
          <Button icon={<DownloadOutlined />}>导出</Button>
          <Button icon={<ShareAltOutlined />}>分享</Button>
          <Button icon={<HistoryOutlined />}>历史版本</Button>
        </Space>
      </div>

      <Layout>
        {/* 左侧内容面板 */}
        <Sider width={300} theme="light">
          <Menu
            mode="inline"
            defaultSelectedKeys={["personal"]}
            items={sections}
            style={{ height: "100%" }}
          />
        </Sider>

        {/* 右侧预览面板 */}
        <Content className="p-6 bg-gray-50">
          <div className="bg-white p-6 shadow-sm min-h-[calc(100vh-200px)]">
            {/* 这里后续会添加简历预览组件 */}
            <div className="text-center text-gray-500">简历预览区域</div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ResumeEditor;

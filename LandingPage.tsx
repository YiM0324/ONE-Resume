import React from "react";
import { Button, Row, Col, Steps } from "antd";
import { useNavigate } from "react-router-dom";

const { Step } = Steps;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">简历制作</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button type="link" onClick={() => navigate("/templates")}>
                模板市场
              </Button>
              <Button type="primary" onClick={() => navigate("/dashboard")}>
                开始制作
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 步骤说明 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            三步制作专业简历
          </h2>
          <Steps current={-1} className="max-w-2xl mx-auto">
            <Step title="选择模板" description="从多种专业模板中选择" />
            <Step title="填写内容" description="智能引导，轻松填写" />
            <Step title="下载简历" description="多种格式，一键导出" />
          </Steps>
        </div>

        {/* 模板展示区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 这里后续会添加模板卡片组件 */}
        </div>

        {/* CTA按钮组 */}
        <div className="text-center mt-12">
          <Row gutter={16} justify="center">
            <Col>
              <Button
                type="primary"
                size="large"
                onClick={() => navigate("/dashboard")}
              >
                快速开始
              </Button>
            </Col>
            <Col>
              <Button size="large" onClick={() => navigate("/templates")}>
                浏览模板
              </Button>
            </Col>
            <Col>
              <Button size="large" onClick={() => navigate("/dashboard")}>
                企业入口
              </Button>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

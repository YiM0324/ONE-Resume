import React from "react";
import { Layout, Card, Row, Col, Tag, Space, Radio } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const TemplateMarket: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { label: "全部", value: "all" },
    { label: "科技风", value: "tech" },
    { label: "简约风", value: "simple" },
    { label: "创意类", value: "creative" },
  ];

  const templates = [
    {
      id: 1,
      name: "简约商务风",
      category: "simple",
      thumbnail: "https://via.placeholder.com/300x400",
      description: "适合传统行业、管理岗位",
      tags: ["商务", "简约", "专业"],
    },
    {
      id: 2,
      name: "科技创意风",
      category: "tech",
      thumbnail: "https://via.placeholder.com/300x400",
      description: "适合IT、设计、创意类岗位",
      tags: ["科技", "创意", "现代"],
    },
    {
      id: 3,
      name: "学术专业风",
      category: "creative",
      thumbnail: "https://via.placeholder.com/300x400",
      description: "适合教育、科研、医疗等专业领域",
      tags: ["学术", "专业", "严谨"],
    },
    {
      id: 4,
      name: "创意设计风",
      category: "creative",
      thumbnail: "https://via.placeholder.com/300x400",
      description: "适合设计、艺术、新媒体等创意岗位",
      tags: ["创意", "设计", "艺术"],
    },
  ];

  return (
    <Layout className="min-h-screen bg-gray-50">
      <Content className="p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">简历模板市场</h2>

          {/* 分类筛选 */}
          <div className="mb-8">
            <Radio.Group defaultValue="all" options={categories} />
          </div>

          {/* 模板列表 */}
          <Row gutter={[24, 24]}>
            {templates.map((template) => (
              <Col key={template.id} xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={template.name}
                      src={template.thumbnail}
                      className="h-48 object-cover"
                    />
                  }
                  onClick={() => navigate(`/editor?template=${template.id}`)}
                >
                  <Card.Meta
                    title={template.name}
                    description={template.description}
                  />
                  <div className="mt-4">
                    <Space size={[0, 8]} wrap>
                      {template.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Space>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default TemplateMarket;

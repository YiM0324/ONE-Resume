import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

// 页面组件
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ResumeEditor from './pages/ResumeEditor';
import TemplateMarket from './pages/TemplateMarket';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editor/:id?" element={<ResumeEditor />} />
          <Route path="/templates" element={<TemplateMarket />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App; 
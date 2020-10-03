import { Layout } from 'antd';
const {
  Content,
  Footer,
  Sider,
} = Layout;

const MyLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider
      breakpoint="sm"
      collapsedWidth="0"
      style={{ backgroundColor: '#015DB5' }}
    >
      <p>ejemplo</p>
    </Sider>
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {/* TODO */}
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default MyLayout;

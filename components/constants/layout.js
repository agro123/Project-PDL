import { Layout, Menu} from 'antd';
import { CopyOutlined }from '@ant-design/icons';
import MenuOption from './menuOption';
const {  Content, Sider } = Layout;


const MyLayout = ({ children }) => (
  <>
    <Layout className="layout">
      <Sider
        style={{
          height: '100vh',
          background: '#015DB5',
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['2']}
          theme='dark'
          style={{
            background: '#015DB5',
            height: '100vh',
            color: 'white'
          }}
        >
          <Menu.Item key="1" icon={<CopyOutlined />}><MenuOption label="Ordenes de servicio" url="/ordenesS/controlOrdeneS" /></Menu.Item>
          <Menu.Item key="2"><MenuOption label="other" url="/ordenesS/controlOrdeneS" /></Menu.Item>
          <Menu.Item key="3"><MenuOption label="other" url="/ordenesS/controlOrdeneS" /></Menu.Item>
          <Menu.Item key="4"><MenuOption label="other" url="/ordenesS/controlOrdeneS" /></Menu.Item>
          <Menu.Item key="5"><MenuOption label="other" url="/ordenesS/controlOrdeneS" /></Menu.Item>
          <Menu.Item key="6"><MenuOption label="other" url="/ordenesS/controlOrdeneS" /></Menu.Item>
        </Menu>
      </Sider>
      <Content
        style={{
          padding: '0 0px',
        }}
      >
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  </>
);

export default MyLayout;

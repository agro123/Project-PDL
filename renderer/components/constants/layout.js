import { Layout, Menu,Image  } from 'antd';
import MenuOption from './menuOption';
import {
  FileTextOutlined,
  ReconciliationOutlined,
  ContainerOutlined
} from '@ant-design/icons';
import { autoUpdater } from 'electron';

const theme = "dark"

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const MyLayout = ({ children }) => (
  <>
    <Layout className="layout">
      <Sider
       theme={theme}
        style={{
          /* background: '#001529', */
          flex: 'auto'
        }}
      >
        <Image  src="https://www.anmosugoi.com/wp-content/uploads/2020/01/megumin-sonrojada.jpg"/>
        <Menu
          mode="inline"
          defaultSelectedKeys={['2']}
          theme={theme}

        >
          <SubMenu key="sub1" icon={<FileTextOutlined />} title="Cotización">
            <Menu.Item key="1"><MenuOption label="Crear" url="/Cotizaciones/cotizacion" /></Menu.Item>
            <Menu.Item key="2"><MenuOption label="Ver" url="/Cotizaciones/cotizaciones" /></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<ReconciliationOutlined />} title="Orden de servcio">
            <Menu.Item key="5"><MenuOption label="Crear" url="/ordenS/ordenServicio" /></Menu.Item>
            <Menu.Item key="6"><MenuOption label="Ver" url="/ordenS/ordenesServicio" /></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={< ContainerOutlined />} title="Cuenta de cobro">
            <Menu.Item key="3"><MenuOption label="Crear" url="/cuentaCobro/cuentaCobro" /></Menu.Item>
            <Menu.Item key="4"><MenuOption label="Ver" url="/cuentaCobro/cuentasCobro" /></Menu.Item>
          </SubMenu>
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

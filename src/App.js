import './App.css'
import DetailedOrder from './modules/detailedOrder/index'
import Orders from './modules/orders/index'
import { Routes, Route } from 'react-router-dom'
import { Layout, Image } from 'antd'
import SideMenu from './component/SideMenu'
import RestaurantMenu from './modules/RestaurantMenu'
import CreateMenuItem from './modules/CreateMenuItem'
import OrderHistory from './modules/OrderHistory'
import Settings from './modules/Settings'

const { Sider, Content, Footer } = Layout

function App() {
  return (
    <Layout>
      <Sider style={{ height: '100vh', backgroundColor: 'grey' }}>
        <img
          src="https://seeklogo.com/images/U/uber-eats-logo-CA3BA2098B-seeklogo.com.png"
          alt="uberImage"
          style={{ maxWidth: '200px' }}
        ></img>
        <SideMenu></SideMenu>
      </Sider>
      <Layout>
        <Content style={{ background: 'lightgray' }}>
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path="order/:id" element={<DetailedOrder />} />
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="menu/create" element={<CreateMenuItem />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Uber Eats Dashboard @2022
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App

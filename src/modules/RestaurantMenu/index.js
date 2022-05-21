import { Card, Table, Button } from 'antd'
import dishes from '../../assests/data/dishes.json'
import { Link } from 'react-router-dom'

function RestaurantMenu() {
  const tableColumns = [
    { title: 'Menu Item', dataIndex: 'name', key: 'name' },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `Rs. ${price}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <Button danger> Remove</Button>,
    },
  ]
  const renderNewItemButton = () => {
    return (
      <Link to="create">
        <Button type="primary">Add Item</Button>
      </Link>
    )
  }

  return (
    <Card title={'Menu'} style={{ margin: '20' }} extra={renderNewItemButton()}>
      <Table dataSource={dishes} columns={tableColumns} rowKey="id"></Table>
    </Card>
  )
}

export default RestaurantMenu

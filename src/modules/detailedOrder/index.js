import { Card, Descriptions, Divider, List, Button } from 'antd'
import dishes from '../../assests/data/dishes.json'
import { useParams } from 'react-router-dom'

const DetailedOrder = () => {
  const { id } = useParams()
  return (
    <Card title={`Order number ${id}`} style={{ marginLeft: 50 }}>
      {/* discriptions allows to define table */}
      {/* bordered = border css. column= number of columns on screen */}
      <Descriptions borderd column={{ lg: 1, md: 1, sm: 1 }}>
        {/* Table items */}
        <Descriptions.Item label="Customer">Shiva Meti</Descriptions.Item>
        <Descriptions.Item label="Address">
          JP Nagar, Challakere, Karnataka
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(dish) => (
          <List.Item>
            <div style={{ fontWeight: 'bold' }}>
              {dish.name} x {dish.quantity}
            </div>
            <div> Rs {dish.price} </div>
          </List.Item>
        )}
      ></List>
      <Divider></Divider>
      <div style={styles.totalContainer}>
        <h2>Total</h2>
        <h2 style={styles.totalPrice}>Rs 32.97</h2>
      </div>
      <Divider></Divider>
      <div style={styles.buttonsContainer}>
        <Button block type="danger" size="large" style={styles.button}>
          Decline Order
        </Button>
        <Button block type="primary" size="large" style={styles.button}>
          Accept Order
        </Button>
      </div>
      <Divider borderd></Divider>
      <div>
        <Button block type="primary" size="large">
          Food is done
        </Button>
      </div>
    </Card>
  )
}

const styles = {
  totalContainer: {
    flexDirection: 'row',
    display: 'flex',
  },

  totalPrice: {
    marginLeft: 'auto',
    fontWeight: 'bold',
  },

  buttonsContainer: {
    display: 'flex',
    paddingBottom: 30,
  },

  button: {
    marginRight: 30,
    marginLeft: 30,
  },
}
export default DetailedOrder

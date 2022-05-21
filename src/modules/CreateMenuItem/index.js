import { Form, Input, Button, Card, InputNumber } from 'antd'

const CreateMenuItem = () => {
  const { TextArea } = Input
  return (
    <Card title="New Menu Item" style={{ margin: '20' }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Dish Name" required>
          <Input placeholder="Enter dish name"></Input>
        </Form.Item>
        <Form.Item label="Restaurant Description" required>
          <TextArea rows={4} placeholder="Enter dish description"></TextArea>
        </Form.Item>
        <Form.Item label="Price (Rs)" required>
          <InputNumber></InputNumber>
        </Form.Item>
        <Form.Item >
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
export default CreateMenuItem

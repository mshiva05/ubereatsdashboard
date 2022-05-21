import { Card, Form, Input, Button } from 'antd'
import { useState } from 'react'
import ReactGoogleAutocomplete from 'react-google-autocomplete'

function Settings() {
  const [address, setAddress] = useState(null)
  console.log(address)
  return (
    <Card title="Restaurant Details" style={{ margin: '20' }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Restaurant Name" required>
          <Input placeholder="Enter Restaurant Name"></Input>
        </Form.Item>
        <Form.Item label="Restaurant Address" required>
          <ReactGoogleAutocomplete
            selectProps={{
              value: address,
              onchange: setAddress,
            }}
          ></ReactGoogleAutocomplete>
        </Form.Item>
        <Form.Item>
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Settings

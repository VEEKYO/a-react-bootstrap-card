import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <container>
        <Form>
          <Row>
            <Col md>
          
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Example@email.com" />
          </Form.Group>
          </Col >
          <Col md>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          </Col>
          </Row>
          <Button variant='secondary' type='submit'>Login</Button>
        </Form>
        <Card className='mb-3'style={{color: '#000'}}>
          <Card.Img src='https://picsum.photos/200/50'/>
          <Card.Body>
            <Card.Title>
              A Card
            </Card.Title>
              <Card.Text>
                A simple react bootstrap card
              </Card.Text>
              <Button variant='primary'>Read More</Button>
            
          </Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3 </Breadcrumb.Item>
        </Breadcrumb>
        <Alert>This is a button</Alert>
        <Button variant='success'>Test Button</Button>
        </container>
      </header>
    </div>
  );
}

export default App;

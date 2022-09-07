import React, { useContext, useEffect, useState } from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

const App = () => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setIsAuth(true);
    }).finally(() => setLoading(false))
  }, [])
  
  if(loading){
    return (  <Spinner animation="border" variant="primary" /> )
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
      <div style={{height: '50px'}}>
      </div>
      <Nav className='f_flex justify-content-center align-items-center p-3'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </BrowserRouter>
  );
}

export default App;

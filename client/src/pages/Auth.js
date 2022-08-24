import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../styles/Auth.css';
import { Form, Card, Col, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {

   const isLocation = useLocation().pathname === LOGIN_ROUTE;

  return (
    <Container className="conteiner">
      <Card className="card">
        {isLocation
        ?<h2 className="card_header">Авторизация</h2>
        :<h2 className="card_header">Регистрация</h2>
        }
        <Form className="card_form">
          <Form.Control
            className="card_form_control"
            placeholder="Введите логин..."
          />
          <Form.Control
            className="card_form_data"
            placeholder="Введите пароль..."
          />
          <Col className="card_form_control">
          {isLocation
            ?<div className="card_form_control_reg">
               Нет акканута? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйся</NavLink>
             </div>
            :<div className="card_form_control_reg">
              Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
             </div>
          }
          {isLocation
          ?<Button
            variant="outline-success">
            Войти
          </Button>
          :<Button
            variant="outline-primary">
            Зарегистрироваться
          </Button>
          }
          </Col>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;

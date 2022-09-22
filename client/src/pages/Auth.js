import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Form, Card, Col, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import styles from './styles/Auth.module.scss';
import CustomButtonSuccess from '../components/UI/button/CustomButtonSuccess';
import CastomButton from '../components/UI/button/CastomButton';

const Auth = observer( () => {

   const isLocation = useLocation().pathname === LOGIN_ROUTE;
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const {user} = useContext(Context);


   const click = async () => {
    try{
      let response;
      if(isLocation){
        response = await login(email, password);
      }
      else{
        response = await registration(email, password);
      }
      user.setIsAuth(true);
      user.setUser(true);
      navigate(MAIN_ROUTE);
    }
    catch (e)
    {
      alert(e.response.data.message);
    }

   }

  return (
    <Container>
    <div className={styles.authConteiner}>
      <Card className={styles.authCard}>
        {isLocation
        ?<h2 className={styles.card_header}>Авторизация</h2>
        :<h2 className={styles.card_header}>Регистрация</h2>
        }
        <Form className={styles.card_form}>
          <Form.Control
            className={styles.card_form_control}
            placeholder="Введите логин..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className={styles.card_form_control}
            placeholder="Введите пароль..."
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Col className={styles.card_form_control}>
          {isLocation
            ?<div className={styles.card_form_control_reg}>
               Нет акканута? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйся</NavLink>
             </div>
            :<div className={styles.card_form_control_reg}>
              Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
             </div>
          }
          {isLocation
          ?<CastomButton onClick={click}
            variant="outline-success">
            Войти
          </CastomButton>
          :<CastomButton onClick={click}
            variant="outline-primary">
            Зарегистрироваться
          </CastomButton>
          }
          </Col>
      </Card>
      </div>
      </Container>
  );
});

export default Auth;

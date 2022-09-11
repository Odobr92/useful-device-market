import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/NavFooter.css';

const NavFooter = () => {
  const myEmail =
    'mailto:odobr92@gmail.com?subject=Обратная связь (YoU Market)&body=Здравствуйте! Напишите что-нибудь';
  const myEmailMessage =
    'Адрес почты odobr92@gmail.com, будет открыта форма для отправки сообщения!';
  const mySource = 'https://github.com/Odobr92/useful-device-market';
  const mySourseMessage = 'Вас направляет на исходный код данного проекта!';

  return (
    <Nav
      className="d_flex justify-content-center align-items-center p-3"
      onSelect={(event) => alert(event)}
    >
      <Nav.Item>
        <Nav.Link href={mySource} eventKey={mySourseMessage}>
          <FontAwesomeIcon icon="fa-brands fa-github" className="nav_icon" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={myEmail} eventKey={myEmailMessage}>
          <FontAwesomeIcon icon="fa-regular fa-envelope" className="nav_icon" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavFooter;

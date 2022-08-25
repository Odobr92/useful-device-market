import React, { useContext } from 'react';
import {ListGroup } from 'react-bootstrap';
import { Context } from '..';
import {observer} from 'mobx-react-lite';
import '../styles/TypeBar.css'

const TypeBar = observer( () => {
  const { type } = useContext(Context);

  return (
      <ListGroup className='mt-3'>
        {
            type.type.map(el => <ListGroup.Item 
                className='listItem'
                active = {el.id == type.selectedType.id}
                onClick = {() => type.setSelectedType(el)} 
                key={el.id}>
                {el.name}
                </ListGroup.Item>)
        }
      </ListGroup>
  );
});

export default TypeBar;
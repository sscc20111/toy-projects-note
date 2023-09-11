import React, { useEffect, useRef, useState } from 'react';
import { Button, CloseButton, Container, Figure, FormLabel, ListGroup, ListGroupItem } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserPlus, faUserEdit, faListUl, faPaintBrush, faSave, faPalette, faFile } from "@fortawesome/free-solid-svg-icons";

import '../css/common.css';
import './css/todostyle.css';
import './css/media.css';
import FormRange from 'react-bootstrap/esm/FormRange';


const NoteApp = () => {
    const [ListText, setText] = useState('');

    return (
        <Container>
            <Row>
                <Col className='todolist show'>
                    <div className='alert__text'>
                        <p>please type some words in the text box.</p>
                        <CloseButton className='close'></CloseButton>
                    </div>
                    <div className='lists'></div>
                    <div className='completed__lists hide'></div>
                    <div className='todolist__typebox'>
                        <input type="text" className="todolist__input" value={ListText} onChange={(e) => setText(e.target.value)} />
                        <Button className='todolist__btn'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Button>
                    </div>
                    <div className=''></div>
                </Col>
                <Col className='todolist__info'>
                    <header>
                        <input type="file" accept="image/*" className="img-upload"></input>
                        <Figure className='profile__img'><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon></Figure>
                        <h2 className='todo_user'></h2>
                        <FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon>
                    </header>
                    <div className='weahter'>
                        <p className='temperature'></p>
                    </div>
                    <div className='time'>
                        <p className="date">TUE, FEB 6</p>
                        <h3 className="currentTime">14:15</h3>
                    </div>
                    <div className='drawing__tool'></div>
                    <Row className='palette__tool'>
                        <Col className='palette'><FontAwesomeIcon icon={faPalette}></FontAwesomeIcon></Col>
                        <Col className='new-layer'><FontAwesomeIcon icon={faFile}></FontAwesomeIcon></Col>
                    </Row>
                    <ul className='color'>
                        <li className='colors'></li>
                        <li className='colors'></li>
                        <li className='colors'></li>
                        <li className='colors'></li>
                        <li className='colors'></li>
                    </ul>
                    <FormLabel></FormLabel>
                    <FormRange className='controller'></FormRange>
                    <Row className='app'>
                        <Col className='todo'><FontAwesomeIcon icon={faListUl}></FontAwesomeIcon></Col>
                        <Col className='draw'><FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon></Col>
                    </Row>
                    <div className='save-btn'><FontAwesomeIcon icon={faSave}></FontAwesomeIcon></div>
                </Col>
            </Row>
        </Container>
    );
}

export default NoteApp;

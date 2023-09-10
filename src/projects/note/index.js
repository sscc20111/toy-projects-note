import React, { useEffect, useRef, useState } from 'react';
import { Button, CloseButton, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileWink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import './css/common.css';
import './css/media.css';
import './css/style.css';
import Popup from './js/popup';

const NoteApp = () => {
    const inputRef = useRef(null);
    const [dataUser, setUser] = useState('');

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const Appstart = (e) =>{
        e.preventDefault()
        const popup = new Popup();

        if(dataUser != ""){
            console.log(dataUser)
        }else{
            popup.alertNoText();
        }
    }
    
    const Popclose = (e) => {
        e.preventDefault()
        const popup = new Popup();
        popup.removeAlert();
    }

    return (
        <Container>
            <Row md="auto" className='host-wrap'>
                <Col className='host'>
                    <FontAwesomeIcon icon={faFaceSmileWink} />
                </Col>
                <Col className='host'>
                    <h1>Not To-do List</h1>
                </Col>
            </Row>
            <Row className='message-wrap'>
                <Col>
                    <div className='message-one'>Hello, There! 👋🏻</div>
                    <div className='message-two'>What's your name?</div>
                    <span className='ms-time'>{`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}</span>
                </Col>
            </Row>
            <Row className='user-wrap'>
                <div className='user'>
                    <form className="user-form" onSubmit={Appstart}>
                        <input
                        className='user-name'
                        type="text"
                        ref={inputRef}
                        value={dataUser}
                        onChange={(e) => setUser(e.target.value)} />
                        <Button variant="primary" type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </form>
                </div>
            </Row>
            <Row md="auto" className='alert__text'>
                <Col><p>please type some words in the text box.</p></Col>
                <Col><CloseButton onClick={Popclose} ></CloseButton></Col>
            </Row>
        </Container>
    );
}

export default NoteApp;

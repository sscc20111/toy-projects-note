import React, { useEffect, useState } from 'react';
import { Button, CloseButton, Container, Figure, FormLabel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormRange from 'react-bootstrap/esm/FormRange';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserEdit, faListUl, faPaintBrush, faSave, faPalette, faFile, faCheck } from "@fortawesome/free-solid-svg-icons";

import '../css/common.css';
import './css/todostyle.css';
import './css/media.css';
import Lists from './js/todo.js'
import Clock from './js/clock';
import ImgApp from './js/img';
import Weather from './js/weather';
import Popup from '../js/popup';



const NoteApp = () => {
const storedArrayString = localStorage.getItem('list');
const storedArray = JSON.parse(storedArrayString);

    const [ListText, setText] = useState('');
    const [ListData, setList] = useState(storedArray);
    const [dataUser, setData] = useState(localStorage.getItem('UserName'));
    const [UserName, setUser] = useState(localStorage.getItem('UserName'));
    const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);
    
    const toggleForms = () => {
        setIsRegisterFormVisible(!isRegisterFormVisible);
    };
    const UserNameChange = () => {
        const UserInput = document.querySelector('.userName__input');
        UserInput.classList.add('show')
        toggleForms();
        
        setUser('')
    }
    const UserNameDataChange = () => {
        const UserInput = document.querySelector('.userName__input');
        UserInput.classList.remove('show')
        toggleForms();

        setUser(dataUser);
        localStorage.setItem('UserName', dataUser);
    }

    const ListPush = (ListText) => {
        const popup = new Popup();
        if(ListText === ''){
            popup.alertNoText();
        }else{
            if(ListData == null){
                setList([ListText]);
            }else{
                setList([...ListData,ListText]);
            }
            setText('')
        }
        
    }
    useEffect(() => {
        localStoragePush();
    }, [ListPush]);
    const Popclose = (e) => {
        e.preventDefault()
        const popup = new Popup();
        popup.removeAlert();
    }
    const localStoragePush = () => {
        localStorage.setItem('list', JSON.stringify(ListData));
    }

    return (
        <Container>
            <Row>
                <Col className='todolist show'>
                    <div className='alert__text'>
                        <p>please type some words in the text box.</p>
                        <CloseButton className='close' onClick={Popclose}></CloseButton>
                    </div>
                    <div className='lists'><Lists ListItem={ListData}/></div>
                    <div className='completed__lists hide'></div>
                    <div className='todolist__typebox'>
                        <input type="text" className="todolist__input" value={ListText} onChange={(e) => setText(e.target.value)} />
                        <Button className='todolist__btn' onClick={() => ListPush(ListText)}><FontAwesomeIcon icon={faPlus} /></Button>
                    </div>
                    <div className=''></div>
                </Col>
                <Col className='todolist__info'>
                    <header>
                        <ImgApp />
                        <h2 className='todo_user'>{UserName}</h2>
                        {isRegisterFormVisible ? (
                            <FontAwesomeIcon icon={faCheck} className='fa-user-edit checked' onClick={UserNameDataChange} />
                            ) : (
                            <FontAwesomeIcon icon={faUserEdit} className='fa-user-edit' onClick={UserNameChange} />
                        )}
                        <input type='text' className='userName__input' value={dataUser} onChange={(e) => setData(e.target.value)}></input>
                    </header>
                    <Weather />
                    <div className='time'>
                        <Clock type='todo' />
                    </div>
                    <div className='drawing__tool'></div>
                    <Row className='palette__tool'>
                        <Col className='palette'><FontAwesomeIcon icon={faPalette} /></Col>
                        <Col className='new-layer'><FontAwesomeIcon icon={faFile} /></Col>
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
                        <Col className='todo'><FontAwesomeIcon icon={faListUl} /></Col>
                        <Col className='draw'><FontAwesomeIcon icon={faPaintBrush} /></Col>
                    </Row>
                    <div className='save-btn'><FontAwesomeIcon icon={faSave} /></div>
                </Col>
            </Row>
        </Container>
    );
}

export default NoteApp;

import React, { useState } from 'react';

import { FormLabel } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormRange from 'react-bootstrap/esm/FormRange';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faPaintBrush, faSave, faPalette, faFile } from "@fortawesome/free-solid-svg-icons";


const Tools = ({ handleCanvasOpen, handleCanvasClose, drawColor, drawRange, handleSaveClick }) => {
    const [ToolsOpen, setToolsOpen] = useState(false);
    const [ColorOpen, setColorOpen] = useState(false);
    const [Focused, setFocused] = useState(false);
    const [pointer, setpointer] = useState(false);
    const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(true);

    const toggleForms = () => {
        setColorOpen(!ColorOpen);
    };
    const handleToggleFocused = (e) => {
        e.target.classList.toggle('btnFocused');
    };
    const toggleFocused = () => {
        setFocused(!Focused);
    };
    const pointerOpen = () => {
        setpointer(!pointer);
    };
    const handleToolsOpen = () => {
        handleCanvasOpen();
        setToolsOpen(true);
        setIsRegisterFormVisible(false);

    };

    const handleToolsClose = () => {
        handleCanvasClose();
        setToolsOpen(false);
        setIsRegisterFormVisible(true);
    };



    const SaveClick = () => {
        handleSaveClick()
    }




    return(
        <>
            <Row>
                <Col style={{display:'flex'}} className='row'>
                    <FormRange min = ".1" max= "5" step="0.1" onChange={(e) => {drawRange(e)}} className={`controller ${pointer ? 'scaleToOne' : ''}`}></FormRange>
                </Col>
                <Col>
                    <ul className={`color ${ColorOpen ? 'scaleToOne' : ''}`}>
                        <li className='colors' style={{ backgroundColor:'#E17055' }} onClick={(e) => {drawColor(e)}}></li>
                        <li className='colors' style={{ backgroundColor:'#FDCB6E' }} onClick={(e) => {drawColor(e)}}></li>
                        <li className='colors' style={{ backgroundColor:'#00B894' }} onClick={(e) => {drawColor(e)}}></li>
                        <li className='colors' style={{ backgroundColor:'#2F61D2' }} onClick={(e) => {drawColor(e)}}></li>
                        <li className='colors' style={{ backgroundColor:'#6C5CE7' }} onClick={(e) => {drawColor(e)}}></li>
                    </ul>
                </Col>
                <Col></Col>
            </Row>

            <Row xs="auto" className={`drawing__tool ${ToolsOpen ? 'scaleToOne' : ''} my-3`}>
                <Col style={{alignItems:'center', zIndex:9}} className='brush-btn me-3' onClick={(e) => {handleToggleFocused(e); pointerOpen(e);}}>
                    <svg version="1.1" id="brush-tip" className="brush-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" style={{enableBackground:'new 0 0 80 80'}} xmlSpace="preserve">
                            <path d="M43.77,31.21c0.28-0.21,0.56-0.45,0.81-0.72c1.22-1.27,2.64-3.71,2.47-8.1c-0.14-3.49-1.98-5.47-3.61-7.22
                                c-1.56-1.67-2.79-2.99-2.38-5.27c0.04-0.22-0.05-0.45-0.22-0.59c-0.11-0.09-0.25-0.14-0.39-0.14c-0.08,0-0.16,0.02-0.24,0.05
                                c-3.5,1.48-7.27,6.24-7.27,13.19c0,3.15,0.73,5.77,2.11,7.55c0.36,0.47,0.76,0.87,1.2,1.21L43.77,31.21z M41.54,27.62
                                c-0.05-0.33,0.02-0.65,0.21-0.92c1.4-1.96,0.87-3.66,0.84-3.73c-0.15-0.44-0.04-0.94,0.3-1.28c0.03-0.03,0.06-0.06,0.09-0.08
                                c0.11-0.09,0.24-0.16,0.37-0.21c0.64-0.23,1.35,0.11,1.58,0.76c0.04,0.12,1,2.95-1.17,5.98c-0.04,0.06-0.08,0.11-0.13,0.16
                                c-0.43,0.43-1.1,0.48-1.59,0.13C41.77,28.23,41.59,27.95,41.54,27.62z" />
                    </svg>
                    <svg version="1.1" id="brush-body" className="brush-svg"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" style={{enableBackground:'new 0 0 80 80'}} xmlSpace="preserve">
                            <path d="M40,68.2c1.51,0,2.76-1.16,2.86-2.67c0.07-0.94,1.63-23.16,1.63-26.37c0-1.6-0.35-4.01-0.73-6.17l-7.53-0.04
                                c-0.38,2.16-0.73,4.58-0.73,6.2c0,3.25,1.56,25.43,1.63,26.37C37.24,67.04,38.49,68.2,40,68.2z" />
                    </svg>
                </Col>
                <Col style={{alignItems:'center', zIndex:8}} className="fill-btn me-3" onClick={handleToggleFocused}>
                    <svg version="1.1" id="paint-top" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" viewBox="0 0 80 80" style={{enableBackground:'new 0 0 80 80'}} xmlSpace="preserve">
                    <path d="M56.91,19.83c0,0.92-0.39,1.75-1.02,2.33l-6.34,1.15l-2.47-0.01c-1.69,1.86-0.29,4.73-0.22,9.23c0.08,5.8-7.58,7.55-6.76,1
                        c0.35-2.73,3.81-7.15-0.19-9.14c-2.74-1.36-3.94,2.16-5.38,3.42c-2.56,2.26-6.23-1.61-9.2-4.59h-0.09l-5.49-0.45v-0.29
                        c-0.98-0.55-1.64-1.6-1.64-2.8c0.01-1.77,1.45-3.21,3.22-3.2l32.39,0.13C55.49,16.62,56.92,18.06,56.91,19.83z"/>
                    </svg>
                    <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" viewBox="0 0 80 80" style={{enableBackground:'new 0 0 80 80'}} xmlSpace="preserve">
                    <path d="M-259.23,31.21c0.28-0.21,0.56-0.45,0.81-0.72c1.22-1.27,2.64-3.71,2.47-8.1c-0.14-3.49-1.98-5.47-3.61-7.22
                        c-1.56-1.67-2.79-2.99-2.38-5.27c0.04-0.22-0.05-0.45-0.22-0.59c-0.11-0.09-0.25-0.14-0.39-0.14c-0.08,0-0.16,0.02-0.24,0.05
                        c-3.5,1.48-7.27,6.24-7.27,13.19c0,3.15,0.73,5.77,2.11,7.55c0.36,0.47,0.76,0.87,1.2,1.21L-259.23,31.21z M-261.46,27.62
                        c-0.05-0.33,0.02-0.65,0.21-0.92c1.4-1.96,0.87-3.66,0.84-3.73c-0.15-0.44-0.04-0.94,0.3-1.28c0.03-0.03,0.06-0.06,0.09-0.08
                        c0.11-0.09,0.24-0.16,0.37-0.21c0.64-0.23,1.35,0.11,1.58,0.76c0.04,0.12,1,2.95-1.17,5.98c-0.04,0.06-0.08,0.11-0.13,0.16
                        c-0.43,0.43-1.1,0.48-1.59,0.13C-261.23,28.23-261.41,27.95-261.46,27.62z"/>
                    <path d="M-162,68.2c1.51,0,2.76-1.16,2.86-2.67c0.07-0.94,1.63-23.16,1.63-26.37c0-1.6-0.35-4.01-0.73-6.17l-7.53-0.04
                        c-0.38,2.16-0.73,4.58-0.73,6.2c0,3.25,1.56,25.43,1.63,26.37C-164.76,67.04-163.51,68.2-162,68.2z"/>
                    <path d="M-45.09,19.83c0,0.92-0.39,1.75-1.02,2.33l-6.34,1.15l-2.47-0.01c-1.69,1.86-0.29,4.73-0.22,9.23c0.08,5.8-7.58,7.55-6.76,1
                        c0.35-2.73,3.81-7.15-0.19-9.14c-2.74-1.36-3.94,2.16-5.38,3.42c-2.56,2.26-6.23-1.61-9.2-4.59h-0.09l-5.49-0.45v-0.29
                        c-0.98-0.55-1.64-1.6-1.64-2.8c0.01-1.77,1.45-3.21,3.22-3.2l32.39,0.13C-46.51,16.62-45.08,18.06-45.09,19.83z"/>
                    <g>
                        <path d="M54.4,49.61l-0.03,8.38c-0.01,1.51-1.25,2.74-2.76,2.73L21.59,60.6c-1.51,0-2.74-1.24-2.73-2.76L19,22.77l5.49,0.45
                            l-0.13,31.9l24.52,0.1l0.03-7.8c1.07,0.5,2.05,0.93,2.93,1.28C52.8,49.09,53.65,49.39,54.4,49.61z"/>
                        <path d="M60.53,48.38c-0.51,0.56-1.2,0.83-2.16,0.83c-1.18,0-2.77-0.43-4.97-1.3c-2.46-0.96-5.69-2.49-9.59-4.54
                            c-4.23-2.23-8.37-4.6-10.82-6.03c-0.43,0.21-0.91,0.33-1.42,0.33c-1.75-0.01-3.16-1.44-3.16-3.19c0.01-1.74,1.44-3.16,3.19-3.15
                            c1.74,0.01,3.16,1.43,3.15,3.18v0.11c2.24,1.31,5.84,3.37,9.6,5.37c8,4.27,11.58,5.51,13.11,5.86c-0.13-0.22-0.31-0.48-0.53-0.79
                            c-0.14-0.18-1.11-1.39-2.5-2.72l-0.01,0.87c0,0-4.26-1.64-5.48-2.26l0.07-17.64H48.8l6.34-1.15c-0.19,0.18-0.4,0.33-0.63,0.46
                            l-0.07,15.47c2.84,2.16,4.97,4.89,5.06,5.01c0.01,0,0.01,0.01,0.02,0.02c0,0.01,0.01,0.02,0.02,0.02
                            C60.23,44.11,62.09,46.69,60.53,48.38z"/>
                    </g>
                    </svg>
                </Col>
                <Col style={{zIndex:7}} className={`palette me-3 ${ToolsOpen ? 'scaleToOne' : ''} ${Focused ? 'btnFocused' : ''}`} onClick={(e) => {toggleForms(e.target); toggleFocused(e);}}><FontAwesomeIcon icon={faPalette} /></Col>
                <Col style={{zIndex:4}} className={`save-btn ${ToolsOpen ? 'scaleToOne' : ''}`} onClick={SaveClick}><FontAwesomeIcon icon={faSave} /></Col>
            </Row>

            <Row xs="auto" className='app'>
                <Col style={{zIndex:6}} className='todo' onClick={() => {  handleToolsClose(); }}><FontAwesomeIcon icon={faListUl} /></Col>
                {isRegisterFormVisible ? (
                    <Col style={{zIndex:5}} className='draw mx-3' onClick={() => {  handleToolsOpen(); }}><FontAwesomeIcon icon={faPaintBrush} /></Col>
                ) : (
                    <Col style={{zIndex:5}} className={`new-layer mx-3 ${ToolsOpen ? 'scaleToOne' : ''}`}><FontAwesomeIcon icon={faFile} /></Col>
                )}
            </Row>
        </>
    ) 
}


export default Tools;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { gsap } from 'gsap';
import { Power3 } from 'gsap';
import { useState } from 'react';
import './style.css'


const ProjectsView = (props) => {
    const getImageSource = (project) => {
        switch (project) {
            case 'todo': return require('./img/todo.png');
            case 'canvas': return require('./img/canvas.png');
            case 'GSAP': return require('./img/GSAP.png');
            case 'GuestBook': return require('./img/GuestBook.png');
            default: return require('./img/todo.png');
        }
    };

    return(
        <div className='ViewWrap'>
            <figure className='imgBox'>
                <img src={getImageSource(props.project)}></img>
            </figure>
        </div>
    )
}

const Main = () => {
    const toyProjects = ['todo'];
    const myProjects = ['canvas', 'GSAP', 'GuestBook'];

    const [viewimg,setViewimg] = useState('')

    
    const active = (project) => {
        setViewimg(project)
        const target = document.querySelector('.ViewWrap')
        gsap.killTweensOf(target);
        gsap.set(target, {opacity:0})
        gsap.to(target, {opacity: 1, duration:0.6,  ease: Power3.easeInOut})
    }
    return (
        <Container className='projectsWrap d-flex pt-5'>
            <div className='projectslist' style={{width:'45%'}}>
                <h4 className='fs-6 fw-light mb-2'>( toyProjects )</h4>
                <div className='toyProjects mb-5'>
                    <div key={'todo'} className="mb-3 fs-5 fw-normal d-flex">
                        <Form.Check
                            type='radio'
                            name="group"
                            label={'todo'}
                            id={'todo'}
                            onChange={()=>{active('todo')}}
                        />
                        <span className='fillbar'></span>
                    </div>
                {/* {toyProjects.map((Projects) => (
                    <div key={Projects} className="mb-3 fs-5 fw-normal d-flex">
                        <Form.Check
                            checked
                            type='radio'
                            name="group"
                            label={Projects}
                            id={Projects}
                            onClick={()=>{active(Projects)}}
                        />
                        <span className='fillbar'></span>
                    </div>
                ))} */}
                </div>
                <h4 className='fs-6 fw-light mb-2'>( myProjects )</h4>
                <div className='myProjects'>
                {myProjects.map((Projects) => (
                    <div key={Projects} className="mb-3 fs-5 fw-normal d-flex">
                        <Form.Check
                            type='radio'
                            name="group"
                            label={Projects}
                            id={Projects}
                            onClick={()=>{active(Projects)}}
                        />
                        <span className='fillbar'></span>
                    </div>
                ))}
                </div>
            </div>
            <div className='projectView ms-5' style={{width:'55%'}}>
                <ProjectsView project={viewimg}></ProjectsView>
            </div>
        </Container>
    );
}

export default Main;

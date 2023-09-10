import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const Main = () => {
    const projects = [
        {projectName : 'note',      bg : 'Primary'},
        {projectName : 'project2',  bg : 'Secondary'},
        {projectName : 'project3',  bg : 'Success'},
        {projectName : 'project4',  bg : 'Danger'},
        {projectName : 'project5',  bg : 'Warning'},
        {projectName : 'project6',  bg : 'Info'},
        {projectName : 'project7',  bg : 'Light'},
    ]
    return (
        <Container>
            <Row md="auto">
                {projects.map((projects, idx) => (
                    <Col key={projects.projectName}>
                        <Link to={`/projects/${projects.projectName}`}>
                            <Card
                            bg={projects.bg.toLowerCase()}
                            text={projects.bg.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className='mb-2'
                            >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>{projects.projectName} title</Card.Title>
                                    <Card.Text>sample text</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Main;

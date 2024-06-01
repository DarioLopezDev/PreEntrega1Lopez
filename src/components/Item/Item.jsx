import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item ({item}) {

    return (
        <Card data-bs-theme="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"./src/assets/img/" + item.imagen} />
                    <Card.Body>
                        <Card.Title>{item.marca} {item.sabor} {item.medida} ml</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" as={Link} to= {`/item/${item.id}`}>Ver Mas Detalles</Button>
                    </Card.Body>
                </Card>
    )
}

export default Item
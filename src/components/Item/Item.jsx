import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item ({item}) {

    return (
        <Card data-bs-theme="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"./src/assets/img/" + item.imagen} />
                    <Card.Body>
                        <Card.Title><b>{item.marca} {item.sabor} {item.medida} ml</b></Card.Title>
                        <Card.Text>
                            <b>Categoria</b>: {item.categoria}
                            <br/>
                            <b>Precio</b>: {item.precio}
                        </Card.Text>
                        <Button variant="primary" as={Link} to= {`/item/${item.id}`}>Ver Mas Detalles</Button>
                    </Card.Body>
                </Card>
    )
}

export default Item
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';


function ItemDetail  ({item})  {
  return (
    <Card data-bs-theme="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"../src/assets/img/" + item.imagen} />
                    <Card.Body>
                        <Card.Title>{item.marca} {item.sabor} {item.medida} ml</Card.Title>
                        <Card.Text>
                            <b>Categoria</b>: {item.categoria}
                            <br/>
                            <b>Precio</b>: {item.precio}
                        </Card.Text>
                          <Counter/>
                    </Card.Body>
                </Card>
  )
}
export default ItemDetail
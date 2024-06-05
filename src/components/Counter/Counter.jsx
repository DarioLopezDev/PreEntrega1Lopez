import { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Counter() {
    const [number, SetNumber] = useState(0);

    const sumar = () => {
        SetNumber(number + 1);
    }
    const restar = () => {
        SetNumber(number - 1);
    }

    return (
        <div>
            <Button variant="danger" onClick={restar}>-</Button>
            <b>{number}</b>
            <Button variant="success" onClick={sumar}>+</Button>
        </div>
    )
}

export default Counter
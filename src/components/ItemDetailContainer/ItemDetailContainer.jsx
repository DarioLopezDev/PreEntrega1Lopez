import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import data from "../../../src/assets/dB/dB.json";
/* import solicitarDatos from '../../helpers/SolicitarDatos.js'; */

function ItemDetailContainer ({itemId}) {
const [item, setItem] = useState(null)
const {id} = useParams()

function verDetallesPorId (id){
return new Promise ((resolve,reject) => {
  const item = data.find ((el) => el.id === id);
  if (item) {
    resolve (item)
  } else {
    reject ({
      error : "no se encontro el producto"
    })
  }
})
}
useEffect(() => {
verDetallesPorId (itemId)
  .then((results) => {
    setItem(results);
    })
},[itemId])


  return (
    <div>
      {item && <ItemDetail item = {item}/>}
    </div>
  )
}

export default ItemDetailContainer
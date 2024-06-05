import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import data from "../../../src/assets/dB/dB.json";

function ItemDetailContainer () {
const [item, setItem] = useState(null)
const id = useParams().id;

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
verDetallesPorId (Number(id))
  .then((results) => {
    setItem(results);
    })
},[id])


  return (
    <div>
      {item && <ItemDetail item = {item}/>}
    </div>
  )
}

export default ItemDetailContainer
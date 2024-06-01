import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
/* import {ItemDetail} from '../ItemDetail/ItemDetail.jsx' */
const ItemDetailContainer = () => {
const [items, setItems] = useState({


})
const {id} = useParams()

useEffect(() => {
  if (!id){
  fetch ('./src/assets/dB/dB.json')
  .then(res => res.json())
  .then(results => setItems(results))
  return
}
fetch (`./src/assets/dB/dB.json`)
  .then(res => res.json())
  .then(results => setItems(results))
},[id])


  return (
    <div>
     {/*  <p>REACT DEJO DE FUNCIONAR</p><ItemDetail/> */}
    </div>
  )
}

export default ItemDetailContainer
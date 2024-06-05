import {useState, useEffect} from 'react'
import data from "../../../src/assets/dB/dB.json";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
const [items, setItems] = useState([])
const categoria = useParams().categoria;
console.log (categoria);

function solicitarDatos () {
  return new Promise ((resolve,reject) => {
      setTimeout(() => {
     resolve(data);
    },500)
  })
  }

useEffect(() => {
  solicitarDatos()
  .then ((res) => {
    if (categoria){
      setItems(res.filter((item) => item.categoria === categoria));
    } else {
      setItems(res);
    }
  })
},[categoria])

/* useEffect(() => {
  if (!categoria){
  fetch ('./src/assets/dB/dB.json')
  .then(res => res.json())
  .then(results => setItems(results))
  return
}
fetch ('./src/assets/dB/dB.json')
  .then(res => res.json())
  .then(results => setItems(results))
},[categoria]) */

  return (
    <div>
      <ItemList items = {items}/>
    </div>
  )
}

export default ItemListContainer
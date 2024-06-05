import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
const [items, setItems] = useState([])
const id = useParams()

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
      <ItemList items = {items}/>
    </div>
  )
}

export default ItemListContainer
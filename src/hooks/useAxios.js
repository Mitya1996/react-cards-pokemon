import { useState } from "react";
import axios from "axios";

function useAxios(url, getData) {
  const [items, setItems] = useState([]);
  const addItem = async () => {
    let response = await axios.get(url);
    let newItem = getData(response);
    setItems((oldItems) => [...oldItems, newItem]);
  };
  return [items, addItem];
}

export default useAxios;

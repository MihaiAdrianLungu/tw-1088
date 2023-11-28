import { useState, useEffect } from 'react';
import './App.css';
import Order from './Order';
import useFetch from './useFetch';

function App() {
  const [contor, setContor] = useState(0);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState('');
  // const {data, error} = useFetch('https://jsonplaceholder.typicode.com/todos');

  const fetchData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    const response = await result.json();

    setOrders(response);
  }

  useEffect(() => { 
    console.log('here')
    fetchData();
  }, [])

  // if (error) {
  //   return <p>{error}</p>
  // }

  return (
    <div className="App">
      <div>Contor value: {contor}</div>
      <button onClick={() => setContor(contor + 1)}>Increment</button>
      <input type='text' name='name' onChange={(e) => setName(e.target.value)} />

      {orders.length > 0 && orders?.map(order => (
        <Order order={order} key={order.id} />  
      ))}

    </div>
  );
}

export default App;

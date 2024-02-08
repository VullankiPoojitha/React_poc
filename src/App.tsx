import { useEffect } from 'react'
import axios from 'axios'

// import './App.css'

function App() {

  useEffect(()=>{
    // axios.get('https://jsonplaceholder.typicode.com/user').then((res)=>console.log(res)).catch((err)=>console.log(err))
    async function ApiFetch() {
          const aa = axios.get('https://fakestoreapi.com/products/categories');
          console.log(aa, 'datadata')
          const data = await aa;
          console.log(data, 'datadatadata')
      }
      ApiFetch();
  },[])
 

  return (
    <>
     <div>Hello</div>
    </>
  )
}

export default App

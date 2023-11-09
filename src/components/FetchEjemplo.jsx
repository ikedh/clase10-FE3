import React, { useEffect, useState } from 'react'

const FetchEjemplo = () => {

    const [vector, setVector] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async () =>{
        const data = await
        fetch('https://jsonplaceholder.typicode.com/users')
        const convert = await data.json()
        console.log(data);
        setVector(convert)
        console.log(setVector);
    }

  return (
    <>
            <h3>Fetch</h3>
            <div>
                <ul>
                    {vector.map(obj=>(
                        <li key={obj.id}>
                            {obj.name}
                        </li>
                    ))}
                </ul>
            </div>
    </>
  )
}

export default FetchEjemplo
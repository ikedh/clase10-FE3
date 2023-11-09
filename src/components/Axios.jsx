import React from 'react'
import axios from 'axios'

const Axios = () => {

    const handleComments = async ()=>{
        try {
            const url = "https://jsonplaceholder.typicode.com/comments"
            const res = await axios.get(url)
            console.log(res.data[0].email);

        } catch (error) {
            console.log(error);
        }
    }


    const handlePost = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts";
            const send = {
                id: 1,
                title: 'Axios',
                body: 'post mediante Axios',
                userId: 1
              }
            const res = await axios.post(url,send)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <>
        <button
            onClick={handleComments}
        >
            Traer Comentarios
        </button>

        <button
            onClick={handlePost}
        >
            Postear
        </button>
    </>
  )
}

export default Axios
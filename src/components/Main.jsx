import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../requests'

const Main = () => {
  
    const [movies,setMovies] = useState([]) 

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(requests.requestPopular)
            const data = await response.data.results
            setMovies(data)
            console.log(data)
        }
        fetchData()
    },[])


    return (
    <div>
        <h2 className='text-white '>Main Page</h2>
    </div>
  )
}

export default Main
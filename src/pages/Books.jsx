import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "../styles/book.css"


const Books = () => {
  const baseUrl = "https://careful-mature-sceptre.glitch.me/books"
  // const baseUrl = "http://localhost:3000/books"
  const [bookData, setBookData] = useState([])
  const navigate=useNavigate()

  useEffect(() => {
    getBookData(baseUrl)
  }, [])
  const getBookData = (url) => {
    axios.get(url)
      .then((result) => {
        console.log(result.data, "data")
        setBookData(result.data.books)
        return result.data
      }).catch((err) => {
        console.log(err, "error")
      })
  }



  const deleteBook = (url, id) => {
    axios.delete(`${url}/${id}`)
      .then((result) => {
        console.log(result.data, "deletedbook")
        getBookData(baseUrl)
        return result.data
      }).catch((err) => {
        console.log(err, "error")
      })

  }
  // Delete Data 

  const addBook=()=>{
       navigate("/bookAdd")
  }


  return (
    <div>
    <button onClick={addBook}>BookAdd</button>
      <div className='container'>
        {bookData.map((e) => {
          return (<div className='card' key={e.id}>
            <img src={e.coverImage} alt="book image" />
            <h5>{e.name}</h5>
            <h5>{e.category}</h5>
            <h5>{e.price}</h5>
            <h5>{e.author}</h5>
            <h5>{e.publishingYear}</h5>
            {/* <h5>{e.description}</h5> */}
            <button>edit</button>
            <button onClick={ ()=>deleteBook(baseUrl,e.id)}>delete</button>
            <button><Link style={{ color: "white", textDecoration: "none" }} to={`/bookDetail/${e.id}`}>view</Link></button>


          </div>)
        })}
      </div>

    </div>
  )
}

export default Books

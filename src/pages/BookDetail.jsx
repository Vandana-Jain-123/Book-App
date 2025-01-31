import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../styles/bookDetail.css"
import { useParams } from 'react-router-dom'
const BookDetail = () => {
  const [singleBook, setSingleBook] = useState({})
  const baseUrl = "https://careful-mature-sceptre.glitch.me/books"

  const { id } = useParams()

  useEffect(() => {
    getSingleBookData(baseUrl, id)
  }, [])

  const getSingleBookData = (url, id) => {
    axios.get(`${url}/${id}`)
      .then((result) => {
        console.log(result.data, "singlebook")
        setSingleBook(result.data)
        return result.data
      }).catch((err) => {
        console.log("err", err)
      })
  }


  return (
    <>

      <div>
        {


          <div className='bookDetail' key={singleBook.id}>
            <img src={singleBook.coverImage} alt="image" />
            <h3>{singleBook.name}</h3>
            <h4>{singleBook.category}</h4>
            <h5>{singleBook.price}</h5>
            <h5>{singleBook.author}</h5>
            <h5>{singleBook.publishingYear}</h5>
          </div>
        }
      </div>
    </>
  )
}

export default BookDetail

import React from 'react'
import "../styles/bookAdd.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookAdd = () => {
    const navigate = useNavigate()
    const [book, setBook] = useState({
       
        name: " ",
        category: "",
        price: "",
        author: "",
        publishingYear: "",
        coverImage: "https://dummyimage.com/150x200/ff6347/ffffff&text=The+Great+Gatsby",
        description: "A novel about the American ",
    });

    const baseUrl = "https://careful-mature-sceptre.glitch.me/books"

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Updated Book Details:", book);
        newBookAdd(baseUrl, book)
        navigate("/books")
    };

    const newBookAdd = (url, obj) => {
        axios.post(url, obj)
            .then((result) => {
                return result.data
            }).catch((err) => {
                console.log("err", err)
            })
    }


    return (
        <>
            <div className="form-container">
                <h2>Book Details Form</h2>
                <form>
                    <div className="form-group">

                        <label >Book Name:</label>
                        <input type="text" name="name" value={book.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <input type="text" name="category" value={book.category} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Price (INR):</label>
                        <input type="number" name="price" value={book.price} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <input type="text" name="author" value={book.authory} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Publishing Year:</label>
                        <input type="number" name="year" value={book.publishingYear} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea name="description" value={book.description} onChange={handleChange}>A novel about the American dream, set in the Jazz Age of the 1920s.</textarea>
                    </div>
                    <button onClick={handleSubmit} className="form-group">Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookAdd





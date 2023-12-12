/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// import { useState, useEffect } from "react";

export default function Books(props) {





   

   // books map function
   const allBooks = (book) => {
      return (
         <div key={book.id} className="card " style={{ width: "15rem" }}>
            <img src={book.image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
               <h5 className="card-title">
                  <strong>{book.title}</strong>
               </h5>
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">{book.author}</li>
               <li className="list-group-item">{book.genre}</li>
               <li className="list-group-item">{book.date}</li>
            </ul>
            <div>
               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => props.handleShowBooks(book)}
               >
                  View Book
               </button>
            </div>
         </div>
      );
   };

   return (
      <>
         <div className="container">
            <div className="row">{props.allBooks.map(allBooks)}</div>
            <button type="button" className="btn btn-light">
               Add new Book
            </button>
         </div>
         <br></br>
         <div>
            <button type="button">Add a new Book</button>
         </div>
      </>
   );
}

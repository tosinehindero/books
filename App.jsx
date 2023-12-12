import Header from "../components/Header";
import Footer from "../components/Footer";
import Books from "../components/Books";
import { useState, useEffect } from "react";
import bookData from "../components/Data";
import bookData2 from "../components/Data2";
// import AddNewBookForm from '../components/AddNewBookForm'
import "./styles.css";
// import EditReviewForm from '../components/EditReviewForm'
// import AddNewReviewForm from '../components/AddNewReviewForm'
import BookDetails from "../components/BookDetails";




function App() {
   const [booksData] = useState(bookData);
   const [reviews] = useState(bookData2);

   const [bookDetails, setBooksDetail] = useState(false);

   const [selectedId, setSelectedId] = useState();

   

      //show books function
      const handleShowBooks = (book) => {
        setSelectedId(book);
        
        showBook();
     };

   //useEffect
   useEffect(() => {}, [selectedId]);


    //  console.log(selectedId);
    //  console.log(reviews)



   const showBook = () => {
      setBooksDetail(true);
   };

   const closeBookDetails = () => {
      setBooksDetail(false);
   };

   return (
      <>
         <Header />
         <Books  allBooks={booksData} handleShowBooks={handleShowBooks} />
         {/* <AddNewBookForm /> */}
         {/* <EditReviewForm/> */}
         {/* <AddNewReviewForm /> */}
         <BookDetails
            trigger={bookDetails}
            closeBookDetails={closeBookDetails}
            booksData={booksData}
            selectedId ={selectedId}
            reviews = {reviews}
         />
         <Footer />
      </>
   );
}

export default App;

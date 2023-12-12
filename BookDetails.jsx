/* eslint-disable react/prop-types */
import "./bookDetails.css";
import ReviewsTable from "./ReviewsTable";

export default function BookDetails({
   trigger,
   closeBookDetails,
   selectedId,
   reviews,
}) {

   
   // const selectedReview = reviews.find((review) => reviews.bookId === selectedId);
   // console.log(selectedReview[0])
   // console.log(selectedId);
   console.log(reviews[2].body);


   // close bookdetail page function
   const closePopUpBookDetails = () => {
      closeBookDetails();
   };





   return trigger ? (
      <div className="container" id="pop-up">
         <div className="row" id="popup-inner">
            <div className="col">
               <div>
                  <h1>{selectedId.title}</h1>
                  <p>Author: {selectedId.author}</p>
                  <p>Genre: {selectedId.genre}</p>
                  <p>Publication date: {selectedId.date}</p>
               </div>
            </div>
            <br></br>
            <div className="col">
               <div>
                  <div className="card">
                     <img
                        src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81H+63TZuFL._SY466_.jpg"
                        className="card-img-top"
                        alt="..."
                     />
                  </div>
               </div>
            </div>
            <div className="col">
               <button className="close-btn" onClick={closePopUpBookDetails}>
                  close
               </button>
            </div>
         </div>
        <ReviewsTable reviews={reviews} selectedId={selectedId} />
      </div>
   ) : (
      ""
   );
}

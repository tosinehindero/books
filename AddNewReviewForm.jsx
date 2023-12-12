export default function AddNewReviewForm() {
   return (
      <div className=" container">
         <div className="row">
            <div className="col">
               <select className="form-select" aria-label="Default select example">
                  <option selected>Rate this book</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
               </select>
               <div className="mb-3">
                  <label htmlFor="give-review" className="form-label">
                     Give your review
                  </label>
                  <textarea
                     className="form-control"
                     id="give-review"
                     rows="3"
                  ></textarea>
               </div>
               <div>
                  <input type="submit" />
               </div>
            </div>
         </div>
      </div>
   );
}

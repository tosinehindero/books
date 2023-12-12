function EditReviewForm() {
   return (
      <div className=" container">
         <div className="row">
            <div className="col">
               <select className="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Three</option>
                  <option value="5">Three</option>
               </select>
               <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                     Example textarea
                  </label>
                  <textarea
                     className="form-control"
                     id="exampleFormControlTextarea1"
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

export default EditReviewForm;

/* eslint-disable react/prop-types */







export default function ReviewsTable({reviews, selectedId}) {

    console.log(reviews[0].bookId)
    console.log(reviews.bookId)
    console.log(reviews)


const allReview = (rev,selectedId)=>{
    const revs = reviews.find((rev) => rev.bookId === selectedId);
    console.log(revs)
    return (<tr key={rev.id}>
        <td>{rev.id}</td>
        <td>{rev.rating}</td>
        <td>{rev.body}</td>
        <td>{rev.createdAt}</td>
        <td>{rev.updateAt}</td>
        <button>edit</button>
        <button>delete</button>
     </tr>)
}



  return (
    <div className="row" id="popup-inners">
    <div className="col">
       <div>
          <table className="table">
             <thead>
                <tr>
                   <th scope="col">#</th>
                   <th scope="col">Rating</th>
                   <th scope="col">Body</th>
                   <th scope="col">Date</th>
                   <th scope="col">Date</th>
                   <th scope="col">Action</th>
                </tr>
             </thead>
             <tbody>
                {reviews.map(allReview)}

             </tbody>
          </table>
       </div>
    </div>
 </div>
  )
}



export default function AddNewBookForm() {
  return (
    <div className="container">
      <div className=" row">
        <div className="col">
        <div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" placeholder="title"/>
</div>
<div className="mb-3">
  <label htmlFor="Author" className="form-label">Author</label>
  <input type="text" className="form-control" id="Author" placeholder="Author"/>
</div>
<div className="mb-3">
  <label htmlFor="cover image" className="form-label">cover image</label>
  <input type="text" className="form-control" id="cover image" placeholder="cover image"/>
</div>
<div className="mb-3">
  <label htmlFor="genre" className="form-label">genre</label>
  <input type="text" className="form-control" id="genre" placeholder="genre"/>
</div>
<div className="mb-3">
  <label htmlFor="publication date" className="form-label">publication date</label>
  <input type="text" className="form-control" id="publication date" placeholder="publication date"/>
</div>
<div className="mb-3">
  <label htmlFor="cover-image" className="form-label">cover-image</label>
  <input className="form-control" type="file" id="cover-image"/>
</div>
<div>
  <input type="submit" />
</div>
        </div>
      </div>
    </div>
  )
}

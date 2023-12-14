import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modale() {
    const [title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[image,setImage]=useState("")
    const[rating,setRating]=useState(0)
    const[trailer,setTrailer]=useState("")
    
    const movie={title:title,description:description,poster:image,rating:rating,trailer:trailer}
    console.log(movie)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Addmovie=()=>{
    localStorage.setItem("movie",JSON.stringify(movie))
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie title</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Put Movie title"
                autoFocus
                onChange={(event)=>setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Put Movie description"
                autoFocus
                onChange={(event)=>setDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie image</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Put Movie image"
                autoFocus
                onChange={(event)=>setImage(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie rating</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Put Movie rating"
                autoFocus
                onChange={(event)=>setRating(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie trailer</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Put Movie trailer"
                autoFocus
                onChange={(event)=>setTrailer(event.target.value)}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Addmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
function Moviecards({ movie }) {
    console.log(movie)
    return (

        <div style={{display:'flex',gap:'100px',marginBottom:'50px',marginLeft:'50px'}}>
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={movie.poster} />
         <Card.Body>
           <Card.Title>{movie.title}</Card.Title>
           <Card.Text>
           {movie.description}
          </Card.Text>
          <ReactStars
  count={5}
  value={movie.rating} 
  size={24}
  color2={'gold'} />

         </Card.Body>
        </Card>
        <iframe height="500" width="800" src={movie.trailer}></iframe>
        </div>
    );
}

export default Moviecards;
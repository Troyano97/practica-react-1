import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta({name, weight, base_experience}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Peso: {weight}
          Experiencia base: {base_experience}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function DummyProducts() {
    let Products=[
        {imageSrc:"https://img105.savana.com/goods-pic/140ede559c6940e1985c2b814b6c5f25_w540_h720_q85.webp",title:"Cloths"},


         {imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiRHYrFGvUB-brSVfMHmrJaxw75wQfF9DBA&s",title:"Laptop"},


          {imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYiyQHI1p3pzLv_72bVc0PFXx7wySuI5qew&s",title:"Men Cloth"},

           {imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i6rKwXBt9ve_RUxmn5T4IzgoZr6tgBWGew&s",title:"Phone"},

         


    
    ];
  return (
    <Row xs={1} md={4} className="g-4">
      {Products.map((item,idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.imageSrc} height="250px"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="btn btn-warning">Add to cart</button>
              <button className="btn btn-success mx-2">Buy</button>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DummyProducts;
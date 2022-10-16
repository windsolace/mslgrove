import Carousel from 'react-bootstrap/Carousel';

function CarouselFade({className}) {
  return (
    <Carousel fade interval="3000" className={className}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1450458/pexels-photo-1450458.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1450458/pexels-photo-1450458.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarouselFade;
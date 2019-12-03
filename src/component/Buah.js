import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const items = [
  {
    src: 'https://i-love-png.com/images/apple_fruit_png_48889.png',
    altText: 'APEL',
    caption: "APEL",
    harga: 20000
  },
  {
    src: 'https://www.trzcacak.rs/myfile/full/44-445096_among-banana-fruit.png',
    altText: 'PISANG',
    caption: "PISANG",
    harga: 30000
  },
  {
    src: 'http://www.pngplay.com/wp-content/uploads/2/Watermelon-PNG-Free-File-Download.png',
    altText: 'SEMANGKA',
    caption: "SEMANGKA",
    harga: 40000
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div style={{textAlign:'center', padding:'50px', background:'#424242'}}>
            <img src={item.src} alt={item.altText} width='700px' height='400px'/>
        </div>
        {/* <CarouselCaption captionText={`Rp. ${item.harga.toLocaleString()}`} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  const cardBuah = items.map((item)=>{
    return(
      <Card>
        <div style={{height:'300px', padding:'10px'}}>
          <CardImg top width="20%" src={item.src} alt="foto Buah" />
        </div>
        <CardBody style={{textAlign:'center'}}>
          <CardTitle><h3>{item.caption}</h3></CardTitle>
          <CardSubtitle><h5>Rp. {item.harga.toLocaleString()}</h5></CardSubtitle>
          <Button color="success">Add to Cart</Button>
        </CardBody>
      </Card>
    )
  })

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

      <div>
        <CardDeck style={{padding:'30px'}}>
          {cardBuah}
        </CardDeck>
      </div>
    </div>
  );
}

export default Example;
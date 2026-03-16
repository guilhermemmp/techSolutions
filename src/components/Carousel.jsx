import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarouselHome() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="https://sydneyretro.com.au/cdn/shop/collections/PS2_Banner_1296x.png?v=1686549587" />
      </div>
      <div>
        <img src="https://i.pinimg.com/1200x/96/c4/6e/96c46e4b491050236cad93d500d65179.jpg" />
      </div>
      <div>
        <img src="https://i.pinimg.com/1200x/ee/c4/91/eec4912f8c25e4f6c2d0e36ae2cba820.jpg" />
      </div>
    </Carousel>
  );
}
export default CarouselHome;

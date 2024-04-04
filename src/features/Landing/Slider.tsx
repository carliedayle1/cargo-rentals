import { Carousel } from "@mantine/carousel";
import { Center, Image } from "@mantine/core";
const images = [
  "https://res.cloudinary.com/dyig14kaf/image/upload/v1712176733/cars2_vare2h.png",
  "https://res.cloudinary.com/dyig14kaf/image/upload/v1712178215/cars1_e5cryl.png",
];

export const Slider = () => {
  return (
    <Carousel withIndicators loop>
      {images.map((image, index) => (
        <Carousel.Slide key={index}>
          <Center h={{ base: 300, md: 400, xl: 600 }}>
            <Image src={image} alt="" />
          </Center>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

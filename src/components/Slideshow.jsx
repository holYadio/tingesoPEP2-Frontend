import React, {useState} from "react";
import { Carousel, Button } from "react-bootstrap";

export default function Slideshow() {
    const [index, setIndex] = useState(0);
    const imagenesCarrusel = [
        'https://i.postimg.cc/jdM4NsdN/almacen.jpg',
        'https://i.postimg.cc/xTzGqBFy/acopio-Leche.jpg',
        'https://i.postimg.cc/VkPqt4xy/leche.jpg',
        'https://i.postimg.cc/Jh1j607P/vacaLola.png',
        'https://i.postimg.cc/FHbjV3vY/vacas.jpg',
        '../assets/polishcow.mp4'
    ];
    const handleSelect = (selectedIndex, e) => {
        if (selectedIndex === 5) {
            return;
        }
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
                {imagenesCarrusel.map((imagenesCarrusel, idx) => (
                <Carousel.Item key={idx}>
                    {idx === 5 ? (
                    <div>
                        <video controls autoPlay>
                        <source src={imagenesCarrusel} type="video/mp4" />
                        </video>
                        <Button variant="primary" onClick={() => setIndex(idx)}>Ver Video</Button>
                    </div>
                    ) : (
                    <img className="carousel-image" src={imagenesCarrusel} alt={`Item ${idx + 1}`} />
                    )}
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
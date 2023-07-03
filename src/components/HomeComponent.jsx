import React, {useState} from "react";
import { Carousel, Col, Row } from "react-bootstrap";


export default function Home(){
    const [index, setIndex] = useState(0);
    const [isSongPlaying, setIsSongPlaying] = useState(false);

    const imagenesCarrusel = [
        'https://i.postimg.cc/WbVsw6zL/acopio-Leche.jpg',
        'https://i.postimg.cc/PrMT3pvL/almacen.jpg',
        'https://i.postimg.cc/7Ln3bN5H/leche.jpg',
        'https://i.postimg.cc/L8CRScT2/vacas.jpg',
        'https://i.postimg.cc/K8vFdGt0/vacalola.jpg',
        'https://i.imgur.com/JITsL2s.gif'
    ];
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        if (index === 5 && !isSongPlaying) {
            setIsSongPlaying(true);
            const audio = document.getElementById("polishCow");
            audio.play();
            setIndex(0);
        } else if (index === 4 ){
            setIndex(0);
            setIsSongPlaying(false);
            const audio = document.getElementById("polishCow");
            audio.pause();
        }
    };
    return(
        <div className="home-container d-flex justify-content-center">
            <div>
                <br />
                <Row>
                    <Col>
                        <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
                            {imagenesCarrusel.map((imagenesCarrusel, idx) => (
                            <Carousel.Item key={idx}>
                                {idx === 5 ? (
                                <div className="carousel-image-container">
                                    <img  src={imagenesCarrusel} className="gif" alt={`Item ${idx + 1}`} />
                                    <audio id="polishCow" loop src="https://jhoisan.s3.sa-east-1.amazonaws.com/PolishCow.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXNhLWVhc3QtMSJIMEYCIQCW5dHFpa3a9iUSu65x7TnxZXmwJhGem8jILnlKiUtedAIhAOCMEJ4NAFUKIghIqRbqoit8lnq%2BGPR6s6yddwBDoVOcKu0CCOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTgxODc2MjQ1MjAyIgws0NLkI7EwgUvJ9cgqwQJ8JelDZrcDQqgO5dTAMnHUkCHdESGYCZRVLtxHs4pbyJ0PtY2ugImGJA%2BBaOZa9bpJ5oLYEO9sU4cvjiLUTdV6%2BsroReIvcyPeZdBe4MkTvUAE1ItZOfsT1Dkiz0auxY%2BF3GG6EuSbpIFwv52CG44rw4T%2BHZvm8m1UgrO0QYYn76rWiyAvr9%2FKI99xhqTfJYqVe0cESI%2Bs2T3LalYKTbe%2BtOhDjwESP5tH0f63UFdH4lMuvFXWk0b7W34LN70ua8gvRiKbrQqdwl1CrkNbbgzRNSmBkDufAgnBAjQBbt0%2BFk62vaz1YBla%2FkKfOpjL6UXr9NgX9MZwqHXgwibVsTEDOJegLWL2V5NZiDAYbuVmMhow%2FkpfrmsTdn9Z7sl52gRzPaLiw3DcX3kgdWRzMjD5NAgwUOJhTY4bpasFe395rz8wtsqJpQY6sgIYza03LA%2BKl0WoEsQFiJF%2FtMGY%2BzsTVWW6P8e7ENN3S2Y%2ByKO%2B9CrdqCYvN5yHBoT%2BdZw56cRvXGMxskYEfQhsEQRLi6jU2lOsjiesI1FhEDh%2FqExSYmHbV8T6EBDSoAhguabfUNpKVGz1aZQyQRbE%2FEPaH4nS7m9R2KtggChmh%2F5C1ZXSArMF%2BuLUdIKmc%2B4ExoBOoQQhtI%2FcbR6GI5J66Cn8nY5gOGARsgPgwyPzPAzdc1E2%2Bd3MXVEGIgZwE6ajODBEcDlhjPaQtREYJRmcQLDTnJGewbKeBvvVd5tBVT0nlyq4vdsyGkBiKC3iXxMq3%2FkzFFrN6Vb6z2EOi7uDDJ4dZiJ5nfBTUCjB45McguBJD7rQ0Ip7eU0lMk02yrLXBWCuMrFhMp21OyKusMAzGOA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230703T061045Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIASUWFLILJOSL2XOXH%2F20230703%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=30056fa6f1af8121c56e57e6eea20df870cd1b89d9384af84f0c6699a2ac72fd" >
                                        no soportado
                                    </audio>
                                </div>
                                ) : (
                                <div className="carousel-image-container">
                                    <img className="carousel-image" src={imagenesCarrusel} alt={`Item ${idx + 1}`} />
                                </div>
                                )}
                            </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <h1 className="text-center">Bienvenido a la página de la Cooperativa Lechera</h1>
                    <br/>
                    <div className="columns-container">
                        <Col xs={12} md={6}>
                            <h2 className="text-center">Visión de la empresa</h2>
                            <p className="text-justify">Ser la empresa líder en la producción y distribución de productos lácteos de alta calidad, reconocida por nuestra excelencia, innovación y compromiso con la satisfacción del cliente. Nos esforzamos por ser una compañía sostenible que contribuya al bienestar de nuestros empleados, clientes y comunidades en las que operamos.</p>
                        </Col>
                        <div className="vertical-line"></div> {/* Línea vertical */}
                        <Col xs={12} md={6}>
                            <h2 className="text-center">Misión de la empresa</h2>
                            <p className="text-justify">En MilkStgo, nuestra misión es ofrecer productos lácteos frescos y saludables que sean deliciosos y nutritivos. Nos comprometemos a utilizar las mejores prácticas en la producción y el procesamiento de la leche, manteniendo altos estándares de calidad y seguridad alimentaria. A través de la constante innovación y mejora, buscamos satisfacer las necesidades cambiantes de nuestros clientes y brindarles una experiencia excepcional en cada interacción.</p>
                        </Col>
                    </div>
                </Row>
                <br/>
                <Row>
                    <div>
                        <h2 className="text-center">Objetivo de la página</h2>
                        <p className="text-justify">El objetivo de la página web de MilkStgo es facilitar y agilizar el proceso de cálculo y pago a nuestros proveedores de leche. Mediante una plataforma en línea intuitiva y segura, nuestros proveedores podrán registrar los volúmenes de leche enviados, acceder a información actualizada sobre precios y tarifas, y obtener cálculos precisos de los pagos correspondientes. Nuestra página web también proporcionará un historial detallado de las transacciones y permitirá una comunicación fluida entre los proveedores y nuestro equipo de contabilidad, mejorando la eficiencia y la transparencia en el proceso de pago. En MilkStgo, valoramos las relaciones comerciales sólidas y el cumplimiento puntual de los pagos, y nuestra página web será una herramienta clave para lograrlo.</p>
                    </div>
                </Row>
                <br/>
            </div>
        </div>
    );
}

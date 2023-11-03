import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from "react-responsive-carousel";
const SiemaComponent = ({images}) => {
    const imagesTemp = images.map((image) => (
        <div key={image.src} className="modal__img">
            <img className="js-img" src={image.src} alt={image.alt} />
        </div>
    ))
    return (
        <Carousel showThumbs={false}>
            {imagesTemp}
        </Carousel>
    );
};

export default SiemaComponent;
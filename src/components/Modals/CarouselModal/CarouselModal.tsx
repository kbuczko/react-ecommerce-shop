import "./CarouselModal.css";
import close from "../../../images/icon-close.svg";
import product11 from "../../../images/image-product-1.jpg";
import product12 from "../../../images/image-product-2.jpg";
import product13 from "../../../images/image-product-3.jpg";
import product14 from "../../../images/image-product-4.jpg";
import product11Thumbnail from "../../../images/image-product-1-thumbnail.jpg";
import product12Thumbnail from "../../../images/image-product-2-thumbnail.jpg";
import product13Thumbnail from "../../../images/image-product-3-thumbnail.jpg";
import product14Thumbnail from "../../../images/image-product-4-thumbnail.jpg";
import previous from "../../../images/icon-previous.svg";
import next from "../../../images/icon-next.svg";
import {useState} from "react";
import {Image} from "./Image";

const imgs: Image[] = [
  {mainSrc: product11, thumbnailSrc: product11Thumbnail},
  {mainSrc: product12, thumbnailSrc: product12Thumbnail},
  {mainSrc: product13, thumbnailSrc: product13Thumbnail},
  {mainSrc: product14, thumbnailSrc: product14Thumbnail},
];

const CarouselModal: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({open, onClose}) => {
  const [activeImg, setActiveImg] = useState(imgs[0].mainSrc);

  const handleNextImg = (img: string) => {
    const imgPosition = imgs.findIndex((image) => image.mainSrc === img);
    if (imgPosition < imgs.length - 1) {
      setActiveImg(imgs[imgPosition + 1].mainSrc);
    } else setActiveImg(imgs[0].mainSrc);
  };

  const handlePreviousImg = (img: string) => {
    const imgPosition = imgs.findIndex((image) => image.mainSrc === img);
    if (imgPosition > 0) {
      setActiveImg(imgs[imgPosition - 1].mainSrc);
    } else setActiveImg(imgs[imgs.length - 1].mainSrc);
  };
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal">
        <button className="modal__close" onClick={onClose}>
          <img src={close} alt="" />
        </button>
        <section className="main__product">
          <div className="main__img">
            <img src={activeImg} alt="" />
            <div className="main__img-actions">
              <button className="main__img-actions-prev">
                <img
                  src={previous}
                  alt=""
                  onClick={() => handlePreviousImg(activeImg)}
                />
              </button>
              <button
                className="main__img-actions-next"
                onClick={() => handleNextImg(activeImg)}
              >
                <img src={next} alt="" />
              </button>
            </div>
          </div>

          <div className="main__thumbnails">
            {imgs.map((img) => {
              return (
                <div
                  key={img.thumbnailSrc}
                  className={`${
                    img.mainSrc === activeImg ? "main__thumbnails-active" : ""
                  }`}
                >
                  <img
                    src={img.thumbnailSrc}
                    alt="img"
                    onClick={() => setActiveImg(img.mainSrc)}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarouselModal;

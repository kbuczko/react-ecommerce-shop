import image1 from "../../../../images/image-product-1.jpg";
import image1Thumbnail from "../../../../images/image-product-1-thumbnail.jpg";
import image2Thumbnail from "../../../../images/image-product-2-thumbnail.jpg";
import image3Thumbnail from "../../../../images/image-product-3-thumbnail.jpg";
import image4Thumbnail from "../../../../images/image-product-4-thumbnail.jpg";
import "./ProductPreview.css";

const ProductPreview: React.FC<{onOpenModal: (img: string) => void}> = ({
  onOpenModal,
}) => {
  const imgs = [
    image1Thumbnail,
    image2Thumbnail,
    image3Thumbnail,
    image4Thumbnail,
  ];
  return (
    <section className="main__product">
      <div className="main__img">
        <img src={image1} alt="" />
      </div>
      <div className="main__thumbnails">
        {imgs.map((img) => (
          <img key={img} src={img} alt="" onClick={() => onOpenModal(img)} />
        ))}
      </div>
    </section>
  );
};

export default ProductPreview;

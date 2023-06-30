import "./Main.css";
import ProductPreview from "./Product/ProductPreview/ProductPreview";
import ProductDetails from "./Product/ProductDetails/ProductDetails";

const Main: React.FC<{onOpenModal: () => void}> = ({onOpenModal}) => {
  return (
    <main className="main">
      <ProductPreview onOpenModal={onOpenModal} />
      <ProductDetails />
    </main>
  );
};

export default Main;

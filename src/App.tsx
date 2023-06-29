import {useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CarouselModal from "./components/Modals/CarouselModal/CarouselModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (imgPath) => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <CarouselModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onOpen={handleOpenModal}
      />
      <Header />
      <Main onOpenModal={handleOpenModal} />
    </div>
  );
}

export default App;

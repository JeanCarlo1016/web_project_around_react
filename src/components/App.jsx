import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { api } from "../utils/api";
import { useCurrentUser } from "../context/CurrenUserContext";

function App() {
  const [popupState, setPopupState] = useState(null);
  const { currentUser, setCurrentUser } = useCurrentUser();
  const [cards, setCards] = useState([]);

  const fetchInitialCards = async () => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log("Error al traer las tarjetas iniciales", err);
      });
  };

  const fetchProfileInfo = async () => {
    api
      .getProfileInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("Error al traer la informacion del perfil", err);
      });
  };

  useEffect(() => {
    Promise.all([fetchProfileInfo(), fetchInitialCards()]);
  }, []);

  const handleOpenPopup = (popupConfig) => {
    setPopupState(popupConfig);
  };

  const handleClosePopup = () => {
    setPopupState(null);
  };

  return (
    <div className="page__content">
      <Header />
      <Main
        cards={cards}
        setCards={setCards}
        popup={popupState}
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
      />

      <Footer />
      <script type="module" src="../scripts/index.js"></script>
    </div>
  );
}

export default App;

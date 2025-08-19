import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  const [popupState, setPopupState] = useState(null);

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

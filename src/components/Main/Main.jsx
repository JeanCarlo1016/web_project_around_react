import { useState } from "react";
import Popup from "../Main/Popup/Popup";
import AvatarPopup from "../../Form/EditAvatar/EditAvatar";
import NewCard from "../../Form/NewCard/NewCard";
import EditProfile from "../../Form/EditProfile/EditProfile";
import { initialCards } from "../../utils/utils";
import Cards from "../Card/Cards";
import Profile from "../Profile/Profile";

function Main({ popup, onOpenPopup, onClosePopup, onCardSubmit, onSubmit }) {
  const [profileData, setProfileData] = useState(null);

  const [cards, setCards] = useState(initialCards);

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
    onClosePopup();
  };

  const handleSubmit = (data) => {
    setProfileData(data);
    onClosePopup();
  };

  const onUpdateAvatar = (data) => {
    setProfileData((prev) => ({
      name: prev?.name || "Jean Carlo Cabrera",
      about: prev?.about || "Desarrollador",
      avatar: data.avatar,
    }));
    onClosePopup();
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile onSubmit={handleSubmit} />,
  };

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onCardSubmit={handleAddCard} />,
  };
  const avatarPopup = {
    title: "Editar avatar",
    children: <AvatarPopup onUpdateAvatar={onUpdateAvatar} />,
  };

  return (
    <main className="content">
      <Profile
        profileData={profileData}
        onOpenPopup={onOpenPopup}
        avatarPopup={avatarPopup}
        editProfilePopup={editProfilePopup}
        newCardPopup={newCardPopup}
        handleSubmit={handleSubmit}
      />
      <Cards
        cards={cards}
        setCards={setCards}
        onOpenPopup={onOpenPopup}
        onClosePopup={onClosePopup}
      />
      {popup && (
        <Popup
          title={popup.title}
          onClose={onClosePopup}
          extraClassName={popup.extraClassName}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;

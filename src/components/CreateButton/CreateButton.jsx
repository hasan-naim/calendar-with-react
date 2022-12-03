import React, { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

function CreateButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="py-2 px-8 rounded-full shadow hover:shadow-lg duration-300"
    >
      Create
    </button>
  );
}

export default CreateButton;

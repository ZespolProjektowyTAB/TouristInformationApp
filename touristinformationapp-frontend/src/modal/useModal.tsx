import { useState } from "react";

const useModal = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const toggleModalVisibility = () => setModalIsVisible(!modalIsVisible);
  
	return [modalIsVisible, toggleModalVisibility] as const;
  };

export default useModal;

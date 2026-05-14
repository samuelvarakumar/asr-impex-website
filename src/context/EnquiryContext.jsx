import { createContext, useContext, useState } from 'react';

const EnquiryContext = createContext();

export const useEnquiry = () => useContext(EnquiryContext);

export const EnquiryProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <EnquiryContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </EnquiryContext.Provider>
  );
};
import React from 'react'
import './paradise-mud-modal.css' // Modal bileşeni için temel CSS stil dosyası
import './paradise-mud-modal-dark.css' // Karanlık tema için CSS stil dosyası
import './paradise-mud-modal-light.css' // Aydınlık tema için CSS stil dosyası

// Modal bileşeni
const Modal = ({
  title, // Modal başlığı
  children, // Modal içeriği (children olarak render edilecek JSX)
  actions, // Modal altında gösterilecek butonlar ve ilgili eylemler
  isOpen, // Modal'ın açık olup olmadığını belirten boolean değer
  onClose, // Modal'ı kapatmak için çağrılacak fonksiyon
  overlay = true, // Modal arka planının aktif olup olmadığını belirten boolean değer (default: true)
  modalClassName, // Modal için ek CSS sınıfı
  headerClassName, // Modal başlığı için ek CSS sınıfı
  titleClassName, // Modal başlık metni için ek CSS sınıfı
  closeClassName, // Kapatma butonu için ek CSS sınıfı
  bodyClassName, // Modal içeriği için ek CSS sınıfı
  footerclassName, // Modal alt kısmı (footer) için ek CSS sınıfı
  theme = 'dark', // Modal temasını belirten string değer (default: "dark")
  size = 'medium', // Modal boyutunu belirten string değer (default: "medium")
  position = 'centered' // Modal pozisyonunu belirten string değer (default: "centered")
}) => {
  if (!isOpen) return null // Modal kapalıysa hiçbir şey render edilmez

  // Modal overlay ve ana modal yapısı
  return (
    <div className={`paradise-mud-modal-overlay ${overlay ? 'active' : ''}`}>
      <div
        className={`paradise-mud-modal ${modalClassName ? modalClassName : ''}
        ${theme ? theme : ''}
         ${size ? size : ''} 
         ${position ? position : ''}`}
      >
        {/* Modal başlık kısmı */}
        <div
          className={`paradise-mud-modal-header ${
            headerClassName ? headerClassName : ''
          } ${theme ? theme : ''}`}
        >
          {/* Modal başlık metni */}
          <div
            className={`paradise-mud-modal-title ${
              titleClassName ? titleClassName : ''
            } ${theme ? theme : ''}`}
          >
            {title}
          </div>
          {/* Modal kapatma butonu */}
          <button
            onClick={onClose}
            className={`paradise-mud-modal-close ${
              closeClassName ? closeClassName : ''
            } ${theme ? theme : ''}`}
          >
            &times;
          </button>
        </div>

        {/* Modal içerik kısmı */}
        <div
          className={`paradise-mud-modal-body ${
            bodyClassName ? bodyClassName : ''
          } ${theme ? theme : ''}`}
        >
          {children}
        </div>

        {/* Modal footer kısmı */}
        <div
          className={`paradise-mud-modal-footer ${
            footerclassName ? footerclassName : ''
          } ${theme ? theme : ''}`}
        >
          {actions &&
            actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`paradise-mud-modal-button ${
                  action.className ? action.className : ''
                } ${theme ? theme : ''}  ${action.type || 'primary'}`}
              >
                {action.label}
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Modal

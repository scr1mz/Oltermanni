import React from 'react'
import './Modal.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return isOpen
    ? (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    <span>&times;</span>
                </button>
                <h2>Модальное окно</h2>
                <p>Содержимое модального окна...</p>
            </div>
        </div>
      )
    : null
}

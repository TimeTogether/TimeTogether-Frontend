import React from "react";
import "./InviteModal.css"; // 스타일 파일 import

const InviteModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null; // 모달이 열려있지 않으면 null 반환

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>초대코드 입력</h3>
        <input
          type="text"
          placeholder="초대 코드를 입력하세요"
          className="invite-input"
        />
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onSubmit}>
            확인
          </button>
          <button className="cancel-button" onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;

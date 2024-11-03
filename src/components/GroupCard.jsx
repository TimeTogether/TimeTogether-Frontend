import React from "react";
import "./GroupCard.css"; // GroupCard 스타일 파일 import
import { FaTrash, FaShare } from "react-icons/fa"; // 아이콘 사용
import { useNavigate } from "react-router-dom";

const GroupCard = ({ group }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // group의 id를 가지고 /meetings 페이지로 이동
    navigate(`/meetings/${group.id}`);
  };

  return (
    <div className="group-card" onClick={handleClick}>
      <img src={group.image} alt="Group" className="group-image" />
      <div className="group-info">
        <h3>{group.name}</h3>
        <p className="group-description">{group.description}</p>
        <p className="group-members">{group.members.join(", ")}</p>
      </div>
      <div className="group-actions">
        <FaTrash className="icon delete-icon" title="Delete" />
        <FaShare className="icon share-icon" title="Share" />
      </div>
    </div>
  );
};

export default GroupCard;

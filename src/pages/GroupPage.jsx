import React, { useEffect, useState } from "react";
import "./GroupPage.css";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import CreateGroup from "../components/CreateGroup";
import GroupCard from "../components/GroupCard";
import InviteModal from "../components/InviteModal"; // InviteModal 컴포넌트 import

function GroupPage() {
  const [groups, setGroups] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태

  // 예시 데이터 설정
  useEffect(() => {
    const exampleGroups = [
      {
        id: 1,
        name: "팀 1",
        description: "2024-2학기 소프트웨어공학 팀플",
        members: ["김00", "이00", "최00", "박00"],
        image: "https://via.placeholder.com/70",
      },
      {
        id: 2,
        name: "졸프 팀",
        description: "졸업을 위하여...",
        members: ["김00", "이00", "최00", "박00"],
        image: "https://via.placeholder.com/70",
      },
    ];
    setGroups(exampleGroups);
  }, []);

  const openModal = () => setIsModalOpen(true); // 모달 열기
  const closeModal = () => setIsModalOpen(false); // 모달 닫기

  // 초대코드 제출 이벤트 (여기서는 확인 버튼으로 대체)
  const handleInviteSubmit = () => {
    console.log("초대코드 제출!");
    closeModal();
  };

  return (
    <>
      <div className="group-page">
        <header className="group-header">
          <h2>그룹 관리</h2>
        </header>

        <div className="group-content">
          <div className="add-group-content">
            <button className="in-group-button" onClick={openModal}>
              그룹 참가하기
            </button>
            <Link to="/create-group">
              <button className="add-group-button">+ 그룹 생성하기</button>
            </Link>
          </div>
          {groups.length === 0 ? (
            <p className="no-group-text">그룹이 없어요.</p>
          ) : (
            groups.map((group) => <GroupCard key={group.id} group={group} />)
          )}
        </div>
      </div>

      {/* 모달 */}
      <InviteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleInviteSubmit}
      />
    </>
  );
}

export default GroupPage;

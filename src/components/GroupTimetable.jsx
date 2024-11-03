// GroupTimetable.jsx
import TimeGrid from '././TimeGrid.jsx';
import {useState} from "react";
import ColorBar from "./ColorBar.jsx";

const GroupTimetable = () => {
    const days = ['10/7', '10/8', '10/9', '10/10', '10/11', '10/12', '10/13'];
    const dayLabels = ['월', '화', '수', '목', '금', '토', '일'];
    const [members, setMembers] = useState(5);
    const memberCount = members;

    return (
        <div className="group-timetable">
            <h4>오프라인</h4>
            <h3 className="section-title">그룹 시간표</h3>
            <p className="section-description">
                시간을 클릭하면 누가 체크했는지 볼 수 있어요.
            </p>
            <div className="progress-container">
                <span className="progress-text">0/{members}</span>
                {/*<div className="progress-bar"></div>*/}
                <ColorBar memberCount={memberCount}></ColorBar>
                <span className="progress-text">{members}/{members}</span>
                {/*  인원 수 따라 자동으로 프로그레스바 생성하는 코드 필요   */}
            </div>

            <TimeGrid days={days} dayLabels={dayLabels} />
        </div>
    );
};


export default GroupTimetable;
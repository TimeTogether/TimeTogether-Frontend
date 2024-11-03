// PersonalTimetable.jsx
import TimeGrid from '././TimeGrid.jsx';

const PersonalTimetable = () => {
    const days = ['10/7', '10/8', '10/9', '10/10', '10/11', '10/12', '10/13'];
    const dayLabels = ['월', '화', '수', '목', '금', '토', '일'];

    return (
        <div className="personal-timetable">
            <h3 className="section-title">내 시간표</h3>
            <TimeGrid days={days} dayLabels={dayLabels} />
        </div>
    );
};

export default PersonalTimetable;
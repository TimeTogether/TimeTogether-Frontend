import GroupTimetable from './GroupTimetable.jsx';
import PersonalTimetable from '././PersonalTimetable.jsx';

const TimetableContent = ({ activeTab }) => {
    if (activeTab === 'where') {
        return(
            <div className="timetable-content">장소대한 처리</div>
        )
    }

    return (
        <div className="timetable-content">
            <GroupTimetable />
            <PersonalTimetable />
        </div>
    );
};

export default TimetableContent;
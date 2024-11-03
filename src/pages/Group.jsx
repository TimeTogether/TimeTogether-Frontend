import {useState} from "react";
import TimetableHeader from "../components/TimeTableHeader.jsx";
import WhenWhereTab from "../components/WhenWhereTab.jsx";
import TimetableContent from "../components/TimetableContent.jsx";
import '../style.css'

function Group() {
    const [activeTab, setActiveTab] = useState('when');

    return (
        <div className="timetable-container">
            <TimetableHeader/>
            <WhenWhereTab activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TimetableContent activeTab={activeTab}/>
        </div>
    );
}

export default Group;
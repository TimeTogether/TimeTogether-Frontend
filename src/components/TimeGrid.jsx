import {useEffect, useState} from "react";
import './TimeGrid.css';
import PropTypes from 'prop-types';

const TimeGrid = ({ days, timeRange}) => {
    //const hourCount = 16; // 총 16시간에 대해 타임테이블 작성
    const dayCount = days.length;

    const [hourCount, setHourCount] = useState(16);
    const [startHour, setStartHour] = useState(9);
    const daySet = daySets(days);
    const dayLabel = dayLabelSet(days);

    useEffect(() => {
        setHourCount(getTimeRange(timeRange));
        setStartHour(getStartHour(timeRange));
    });

    return (
        <div className="time-grid" style={{ backgroundColor: '#f4f4f4' }}>
            <div className="grid-header">
                <div className="time-column"></div>
                {daySet.map((day, index) => (
                    <div key={index} className="day-column">
                        <div className="day-date">{day}</div>
                        <div className="day-label">{dayLabel[index]}</div>
                    </div>
                ))}
            </div>
            <div className="grid-content">
                <TimeScale hourCount={hourCount} startHour={startHour}/>
                <GridCells
                    days = {days}
                    hourCount={hourCount}
                    startHour={startHour}
                />
            </div>
        </div>
    );
};

const TimeScale = ({ hourCount , startHour }) => {
    const hours = Array.from({ length: hourCount }, (_, i) => i + startHour);

    return (
        <div className="time-scale">
            {hours.map(hour => (
                <div key={hour} className="time-slot">
                    {hour}:00
                </div>
            ))}
        </div>
    );
};

const GridCells = ({ days, hourCount}) => {

    let cellColor = '#ffffff';
    let cellCounter = 0;
    const [personalTableColor, setPersonalTableColor] = useState("#ffffff");

    const daySet = daySets(days);
    const times = timeSet(days);

    return (
        <div className="grid-cells" style={{
            borderRadius: '5px',
            display: 'grid',
            gridTemplateColumns: `repeat(${daySet.length}, 1fr)`,
            gridAutoFlow: 'column', //세로(시간 순)부터 셀 채우기
            gridTemplateRows: `repeat(${hourCount * 2}, 1fr)`
        }}>

            {Array.from({ length: daySet.length }).map((_, dayIndex) => (
                // 각 날짜마다 세로로 30분 단위 셀 생성
                Array.from({ length: hourCount * 2 }).map((_, hourIndex) => {
                    const cellName = `grid-cell-${daySet[dayIndex]}-${hourIndex}`
                    let cellColor = "#ffffff";
                    const checked = times[dayIndex].at(hourIndex);

                    if(checked === "1"){
                        cellColor = "#FFC553";
                    }
                    return(
                    <div
                        key={`${dayIndex}-${hourIndex}`}
                        className={cellName}
                        style={{ backgroundColor: cellColor, border:'1px dotted #c6c6c6'}}
                        onClick={() => {
                            //setPersonalTableColor(`#c0c0c0`);
                            // setSelectTime(1);
                        }}
                    >

                    </div>
                )}
                )
            ))}
        </div>
    );
};

function daySets(daysData){
    let daySet = new Array(0);
    daysData.map((eachDay)=>{
        const month = eachDay.date.split('-').at(1);
        const day = eachDay.date.split('-').at(2);
        daySet.push(`${month}/${day}`);
    })

    return daySet;
}

function dayLabelSet(daysData){
    let dayLabels = new Array(0);
    daysData.map((eachDay)=>{
        dayLabels.push(eachDay.day);
    })
    return dayLabels;
}

function timeSet(daysData){
    let times = new Array(0);
    daysData.map((eachDay)=>{
        times.push(eachDay.time);
    })
    return times;
}

function getTimeRange(timeRange){
    const startHour = Number.parseInt(timeRange.slice(0, 4));
    const endHour = Number.parseInt(timeRange.slice(4));
    const hourRange = endHour - startHour;
    return (hourRange / 100);
}

function getStartHour(timeRange){
    const startHour = Number.parseInt(timeRange.slice(0, 4));
    return (startHour / 100);
}

TimeGrid.propTypes = {
    days: PropTypes.arrayOf(PropTypes.object).isRequired,
};
GridCells.propTypes = {
    days: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TimeGrid;
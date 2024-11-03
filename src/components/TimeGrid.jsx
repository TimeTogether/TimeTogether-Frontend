
const TimeGrid = ({ days, dayLabels }) => {
    return (
        <div className="time-grid">
            <div className="grid-header">
                <div className="time-column"></div>
                {days.map((day, index) => (
                    <div key={day} className="day-column">
                        <div className="day-date">{day}</div>
                        <div className="day-label">{dayLabels[index]}</div>
                    </div>
                ))}
            </div>
            <div className="grid-content">
                <TimeScale />
                <GridCells />
            </div>
        </div>
    );
};

const TimeScale = () => {
    const hours = Array.from({ length: 16 }, (_, i) => i + 9);

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

const GridCells = () => {
    return (
        <div className="grid-cells">
            {Array.from({ length: 7 * 16 }).map((_, index) => (
                <div key={index} className="grid-cell"></div>
            ))}
        </div>
    );
};

export default TimeGrid;
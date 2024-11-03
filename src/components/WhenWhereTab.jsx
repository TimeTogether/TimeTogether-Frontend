const WhenWhereTab = ({ activeTab, setActiveTab }) => {
    return (
        <div className="tab-container">
            <button
                className={`tab-button ${activeTab === 'when' ? 'active' : ''}`}
                onClick={() => setActiveTab('when')}
            >
                언제
            </button>
            <button
                className={`tab-button ${activeTab === 'where' ? 'active' : ''}`}
                onClick={() => setActiveTab('where')}
            >
                어디서
            </button>
        </div>
    );
};
export default WhenWhereTab;
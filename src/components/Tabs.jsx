const Tabs = ({ tabs, currentTab, setCurrentTab }) => {
    return (
        <div className="tabsWrapper">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`tabsButton ${
                        currentTab === tab ? "selectedTab" : ""
                    }`}
                    onClick={() => setCurrentTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;

function Tab({ children, activeTab, setActiveTab }) {
    return (
        <>
            <nav>{children.map((tab, index) => (
                <button onClick={() => setActiveTab(index)} className={activeTab === index ? 'bg-green-100' : 'bg-gray-100'} key={index}>{tab.props.title}</button>
            ))}</nav>
            <div>{children[activeTab]}</div>
        </>
    )
}

Tab.Panel = function ({ children }) {
    console.log(children)
    return (
        <div>{children}</div>
    )
}

export default Tab
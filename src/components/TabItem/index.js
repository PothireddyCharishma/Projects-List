import './index.css'

const TabItem = props => {
  const {tabDetails, activeTab, changeState} = props
  const {tabId, displayText} = tabDetails

  const updateTabItem = () => {
    changeState(tabId)
  }

  const activeClass = activeTab === tabId ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeClass}`}
        onClick={updateTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

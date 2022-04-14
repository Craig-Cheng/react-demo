import './tabs.less'
import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
    }
  }
  chooseTab(index) {
    this.setState({
      selected: index,
    })
  }
  render() {
    const tabsArray = [
      {
        active: '/img/tabs/tab1.png',
        inactive: '/img/tabs/tab12.png',
      },
      {
        active: '/img/tabs/tab2.png',
        inactive: '/img/tabs/tab22.png',
      },
    ]
    return (
      <div className="tabs z-99 relative box-border w-[375px]" id="tabs-common">
        <div className="tabs-container overflow-hidden flex items-center justify-center">
          {tabsArray.map((item, index) => (
            <div
              className="tab-item w-[101px] h-[62px] justify-self-center !mr-[36px] last:!mr-0"
              onClick={this.chooseTab.bind(this, index)}
              key={index}>
              <img
                className="tab-item__content w-[101px] h-[62px]"
                src={this.state.selected === index ? item.active : item.inactive}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Tabs

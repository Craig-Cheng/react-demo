import './selectCommon.less'
import React from 'react'

class SelectCommon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
    }
  }
  selectTab(index) {
    this.setState({
      selected: index,
    })
  }
  render() {
    const tabsArray = [
      {
        active: '/img/tabs/tn_sc_xz1.png',
        inactive: '/img/tabs/tn_sc_wxz1.png',
      },
      {
        active: '/img/tabs/tn_sd_xz2.png',
        inactive: '/img/tabs/tn_sd_wxz2.png',
      },
    ]
    return (
      <div className="select-common flex items-center justify-center overflow-hidden !px-[12px] box-border">
        {/* <img src={tabsArray[0].active} className="w-[100%]" />
        {
          tabsArray.map((tab, index) =>)
        } */}
        {tabsArray.map((item, index) => (
          <div className="item justify-self-center last:!mr-0 flex-auto basis-1/2">
            <img
              className="w-[100%]"
              key={index}
              src={this.state.selected === index ? item.active : item.inactive}
              onClick={this.selectTab.bind(this, index)}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default SelectCommon

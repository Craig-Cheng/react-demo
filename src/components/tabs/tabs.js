import './tabs.less'
import React from 'react'
import { observer, inject } from 'mobx-react';
// import store from '../../store/index';
// import ReactDOM from 'react-dom';
@inject('store')
@observer
class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
    }
  }
  chooseTab(index) {
    console.log('index', index);
    const { store } = this.props
    this.setState({
      selected: index,
    })
    store.commonSetData({ key: 'tabIndex', value: index });
    console.log('store', store);
  }
  render() {
    const tabsArray = [
      {
        active: '/img/ta1.png',
        inactive: '/img/ta12.png',
      },
      {
        active: '/img/ta2.png',
        inactive: '/img/ta22.png',
      },
    ]
    return (
      <div className="tabs z-99 relative box-border w-[375px]" id="tabs-common">
        <div className="tabs-container overflow-hidden flex items-center justify-center">
          {tabsArray.map((item, index) => (
            <div
              className="tab-item w-[101px] h-[62px] justify-self-center !mr-[36px] last:!mr-0"
              onClick={this.chooseTab.bind(this, index)}
              key={index}
            >
              <img
                className="tab-item__content w-[101px] h-[62px]"
                alt="tab"
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

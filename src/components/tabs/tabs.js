import './tabs.less'
import React from 'react'
// import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="tabs z-99 relative box-border w-[375px]" id="tabs-common">
        <div className="tabs-container overflow-hidden flex items-center justify-center">
          <div className="tab-item w-[101px] h-[62px] justify-self-center !mr-[36px] last:!mr-0">
            <img className="tab-item__content w-[101px] h-[62px]" />
          </div>
        </div>
      </div>
    )
  }
}

// function Tabs() {
//   return (

//   )
// }

export default Tabs

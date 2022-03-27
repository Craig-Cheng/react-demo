import './App.css'
import Tabs from './components/tabs/tabs';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header font-bold">
    //     <img src={logo} className="App-logo w-[100px]" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="content w-[375px] h-[100vh] bg-hh bg-no-repeat bg-[url('/public/img/bg.png')] bg-hh bg-no-repeat bg-[#553f2f]">
      <div className="banner relative w-[100%] h-[367px] !mb-[-15px]">
        <img src="/logo192.png" className="App-logo w-[100px] !h-[100px] m-center"></img>
      </div>
      <Tabs />
    </div>
  )
}

export default App

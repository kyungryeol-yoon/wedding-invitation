import { useState } from 'react'
import Hero from './components/Hero'
import Greeting from './components/Greeting'
import EventInfo from './components/EventInfo'
import MapSection from './components/MapSection'
import Gallery from './components/Gallery'
import Account from './components/Account'
import Footer from './components/Footer'
import FloatingClouds from './components/FloatingClouds'
import BgmToggle from './components/BgmToggle'

function App() {
  const [toast, setToast] = useState('')

  function showToast(msg = '계좌번호가 복사되었어요') {
    setToast(msg)
    setTimeout(() => setToast(''), 1600)
  }

  return (
    // .app 은 mask + overflow:hidden 으로 티켓 모양을 잘라내기 때문에
    // position:fixed 인 요소를 안에 두면 함께 잘려 보이지 않습니다.
    // 화면에 고정되어야 하는 것들은 .app 바깥에 둡니다.
    <>
      <div className="app">
        <FloatingClouds />
        <Hero />
        <Greeting />
        <EventInfo />
        <MapSection />
        <Gallery />
        <Account onCopy={showToast} />
        <Footer onShare={showToast} />
      </div>
      <BgmToggle />
      {toast && <div className="toast">{toast}</div>}
    </>
  )
}

export default App

import { useState } from 'react'
import Hero from './components/Hero'
import Greeting from './components/Greeting'
import EventInfo from './components/EventInfo'
import MapSection from './components/MapSection'
import Gallery from './components/Gallery'
import Account from './components/Account'
import Footer from './components/Footer'

function App() {
  const [toast, setToast] = useState('')

  function showToast(msg = '계좌번호가 복사되었어요') {
    setToast(msg)
    setTimeout(() => setToast(''), 1600)
  }

  return (
    <div className="app">
      <Hero />
      <Greeting />
      <EventInfo />
      <MapSection />
      <Gallery />
      <Account onCopy={showToast} />
      <Footer onShare={showToast} />
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}

export default App

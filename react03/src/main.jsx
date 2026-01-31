import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StylePanel from './StyledPanel.jsx'
import TitledPanel from './TitledPanel.jsx'
import StateBasic from './stateBasic.jsx'
import EventMouse from './assets/EventMouse.jsx'
import tea1 from './assets/tea1.png'
import tea2 from './assets/tea2.png'
import EventObj from './EventObj.jsx'
import EventKey from './EventKey.jsx'

const title = <p>メンバー募集中</p>
const body = <p>詳しくはお問い合わせください</p>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StylePanel>
      <p>メンバー募集中</p>
      <p>詳しくはお問い合わせください</p>
    </StylePanel>

    <br />

    <TitledPanel
      title="重要なお知らせ"
      body={<p>本日は社内研修のため、営業時間が10時から15時までとなります。</p>}
    >
    </TitledPanel>

    <br />

    <TitledPanel title={title} body={body} />

    <br />
    
    <StateBasic a={0} />

    <br />

    <EventMouse
      alt="ロゴ画像"
      defaultSrc={tea1}
      afterSrc={tea2}
    />

    <br />

    <EventObj />

    <br />

    <EventKey />

  </StrictMode>,
)

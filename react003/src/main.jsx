import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StyledPanel from './StyledPanel.jsx';
import TitledPanel from './TitledPanel.jsx';
import StateBasic from './StateBasic.jsx';
import tea1 from './assets/tea1.png'
import tea2 from './assets/tea2.png'
import EventMouse from './EventMouse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledPanel>
      <p>メンバー募集中</p>
      <p>詳しくはお問い合わせください。</p>
    </StyledPanel>

    <br />

    <TitledPanel
      title = "重要なお知らせ"
      body = {<p>本日は社内研修のため、営業時間が10時から15時までとなります。</p>}
    >
    </TitledPanel>

    <br />

    <StateBasic a = {0} />

    <br />

    <EventMouse
      alt="ロゴ画像"
      defaultSrc={tea1}
      afterSrc={tea2}
    />

  </StrictMode>,
)

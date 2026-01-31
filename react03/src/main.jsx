import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StylePanel from './StyledPanel.jsx'
import TitledPanel from './TitledPanel.jsx'
import StateBasic from './stateBasic.jsx'

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

  </StrictMode>,
)

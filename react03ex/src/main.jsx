import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyFrame from './MyFrame.jsx';
import InfoSwitcher from './InfoSwitcher.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFrame>
      <p>本日は晴天です</p>
      <p>お出かけ日和ですね。</p>
    </MyFrame>
    <InfoSwitcher />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Test } from './Test.jsx'
import './css/test.css';

const name = "テスト";
const dest = "https://yahoo.co.jp/";

const props = {
  color: "white",
  backgroundColor: "blue",
  padding: 3 // px
}

/* コメント */
// コメント
createRoot(document.getElementById('root')).render(
  // コメント
  /* コメント */
  <StrictMode>
    <App />
    <Test />
    <p>Hello {name}</p>

    {/* 属性値にも使用できる */}
    <a href={dest}>Link</a>

    <p style={props}>スタイル</p>
    <p className="hoge">外部スタイル</p>


  </StrictMode>,
)



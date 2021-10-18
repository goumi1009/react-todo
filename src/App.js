import { css } from '@emotion/react'

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
    <h1 css={{fontSize: 40, color: 'blue'}}>제목 입니다.</h1>
  </div>
)

function App() {
  return (
    <div>
      <SomeComponent></SomeComponent>
    </div>
  );
}

export default App;

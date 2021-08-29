import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'


const items = [
  {
    title: 'What is React?',
    content: 'React は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな View を設計するだけで、React はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。'
  },
  {
    title: 'How do we show content with React?',
    content: '自分自身の状態を管理するカプセル化されたコンポーネントをまず作成し、これらを組み合わせることで複雑なユーザインターフェイスを構築します。'
  },
  {
    title: 'Why is React useful for engineers?',
    content: 'React と組み合わせて使用する技術に制限はありません。React を使って新しい機能を追加する際に、既存のソースコードを書き換える必要はありません。'
  }
]

const options = [
  {
    label: 'the color red',
    value: 'red'
  },
  {
    label: 'the color green',
    value: 'green'
  },
  {
    label: 'a shade of blue',
    value: 'blue'
  }

]

export default () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      <button onClick={() => {
        setShowDropdown(!showDropdown)
      }}>to</button>
      {showDropdown ? 
        <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options} /> : null}
    </div>
  )
}
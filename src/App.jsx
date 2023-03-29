
import LeftSideSection from "./components/LeftSideSection"
import RightSideSection from "./components/RightSideSection"
import TableSection from './components/TableSection'

function App() {
  return (
    <>
      <span className='font-vazirmatn'>
        <div className="w-screen h-screen flex">
          <LeftSideSection />
          <hr className="border border-gray-700 h-full" />
          <RightSideSection />
        </div>
      </span>
      <span>
        <TableSection />
      </span>
    </>
  )
}

export default App

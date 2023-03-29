
import MediumModal from './modals/MediumModal'
import SmallModal from './modals/SmallModal'
import BigModal from './modals/BigModal'
import SubmitForm from './SubmitForm'
import { useState } from 'react'

function LeftSideSection() {
    const [modalStatus, setModalStatus] = useState('none')
    const closeModal = () => setModalStatus('none')
    return (
      <>
        <section className='flex flex-col w-full'>
          <div className='flex justify-around w-full my-10'>
            <span onClick={() => setModalStatus('small')} className=" h-32 w-32 border border-black rounded-lg cursor-pointer">
              <p className="text-lg flex justify-center items-center h-full">مدال کوچک</p>
            </span>
            <span onClick={() => setModalStatus('medium')} className=" h-32 w-32 border border-black rounded-lg cursor-pointer">
              <p className="text-lg flex justify-center items-center h-full">مدال متوسط</p>
            </span>
            <span onClick={() => setModalStatus('big')} className=" h-32 w-32 border border-black rounded-lg cursor-pointer">
              <p className="text-lg flex justify-center items-center h-full">مدال بزرگ</p>
            </span>
          </div>
          <SubmitForm />
        </section>
        { modalStatus === 'small' && <SmallModal closeModal={closeModal} /> }
        { modalStatus === 'medium' && <MediumModal closeModal={closeModal} /> }
        { modalStatus === 'big' && <BigModal closeModal={closeModal} /> }
      </>
    )
}
  
export default LeftSideSection
  
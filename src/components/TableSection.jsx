import { useState } from "react"
import AddModal from "./modals/AddModal"

function TableSection({ getStatus }) {
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    return (
        <section className=" h-screen w-screen relative">
          <div className="flex justify-center items-center h-full">
            <table className="w-10/12 mt-40 border text-center text-lg font-vazirmatn"> 
              <thead>
                <tr>
                  <th onClick={() => setShowModal(true)} className="py-8"><i className="material-icons cursor-pointer border border-black rounded-full p-2">add</i></th>
                  <th className="py-8">توضیحات</th>
                  <th className="py-8">نام پدر</th>
                  <th className="py-8">نام خانوادگی</th>
                  <th className="py-8">نام</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-8 "><i className="material-icons text-red-900 cursor-pointer ">delete</i></td>
                  <td className="py-8">مدیریت بخش عکاسی</td>
                  <td className="py-8">علی</td>
                  <td className="py-8">محمد زاده</td>
                  <td className="py-8">محمد</td>
                </tr>
                <tr className="border-t">
                  <td className="py-8 "><i className="material-icons text-red-900 cursor-pointer ">delete</i></td>
                  <td className="py-8">مدیریت بخش عکاسی</td>
                  <td className="py-8">علی</td>
                  <td className="py-8">محمد زاده</td>
                  <td className="py-8">محمد</td>
                </tr>
              </tbody>
            </table>
          </div>
          { showModal && <AddModal closeModal={closeModal} />  }
        </section>
    )
}
  
export default TableSection
  
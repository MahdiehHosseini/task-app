
function AddModal({ closeModal }) {
    return (
      <div className=" font-vazirmatn flex items-center justify-center absolute h-screen w-screen bg-black/50 top-0">
        <div className=" bg-white h-5/6 w-1/2 rounded-2xl flex flex-col">
          <button onClick={() => closeModal()} className="text-right cursor-pointer m-7"><i className="material-icons text-3xl">close</i></button>
          <span className="flex flex-col h-4/6 items-center">
            <div className="modal-header">
              <h6 className="text-xl text-center">اضافه کردن کاربر</h6>
            </div>
            <hr className="border border-black w-full my-10" />
            <div className="modal-body flex flex-col h-full justify-center">
              <span className="flex justify-around">
                <div className="mr-32">
                  <label htmlFor="lastname" className="block text-right">نام خانوادگی</label>
                  <input id="lastname" type="text" className=" focus:outline-none focus:border-b-cyan-500 text-right h-10 border-b border-black" />
                </div>
                <div>
                  <label htmlFor="name" className="block text-right">نام</label>
                  <input id="name" type="text" className=" focus:outline-none focus:border-b-cyan-500 text-right h-10 border-b border-black" />
                </div>
              </span>
              <span className="flex justify-around mt-10">
                <div className="mr-32">
                  <label htmlFor="father's name" className="block text-right">نام پدر</label>
                  <input id="father's name" type="text" className=" focus:outline-none focus:border-b-cyan-500 text-right h-10 border-b border-black" />
                </div>
                <div>
                  <label htmlFor="description" className="block text-right">توضیحات</label>
                  <input id="description" type="text" className=" focus:outline-none focus:border-b-cyan-500 text-right h-10 border-b border-black" />
                </div>
              </span>
            </div>
            <div className='modal-footer'>
              <button className="bg-black rounded-md text-lg text-white px-20 py-5">افزودن</button>
            </div>
          </span>
        </div>
      </div>
    )
}
  
export default AddModal
  
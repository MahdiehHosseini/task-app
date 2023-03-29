
function MediumModal({ closeModal }) {
    return (
      <div className=" flex items-center justify-center absolute h-screen w-screen bg-black/50 top-0">
        <div className=" bg-white h-5/6 w-1/2 rounded-2xl flex flex-col">
          <button onClick={() => closeModal()} className="text-right cursor-pointer m-7"><i className="material-icons text-3xl">close</i></button>
          <span className="text-2xl flex justify-center h-4/6 items-center">
            <p>مدال متوسط</p>
          </span>
        </div>
      </div>
    )
}
  
export default MediumModal
  
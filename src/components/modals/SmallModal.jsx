
function SmallModal({ closeModal }) {
    return (
      <div className=" flex items-center justify-center absolute h-screen w-screen bg-black/50 top-0">
        <div className=" bg-white h-4/6 w-1/3 rounded-2xl flex flex-col">
          <button onClick={() => closeModal()} className="text-right cursor-pointer m-7"><i className="material-icons text-3xl">close</i></button>
          <span className="text-2xl flex justify-center h-4/6 items-center">
            <p>مدال کوچک</p>
          </span>
        </div>
      </div>
    )
}

export default SmallModal
import { useState } from "react";
import "./Modal.css"

const Modal = () =>  {

  const [modal, setModal] = useState(false);
  
  const toggleModal = () => {
    setModal(!modal);
  }
  
  return (
    <>

      <div>

        <button 
          onClick={toggleModal}
          className="btn-modal"
          >
          Open Modal
        </button>
        
        {!!modal ? (
          <div className="overlay">

            <div className="modal-content">
              <h2>Modal Content</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat enim incidunt voluptates fuga quidem, error quisquam iure cum in ducimus. Incidunt aut eveniet delectus adipisci quos voluptatem quis eius doloremque nostrum ab veniam autem temporibus alias sed laboriosam aliquid sint, dolorum fuga vero deserunt? Ipsa deserunt illum non accusamus.</p>

              <button
                className="close-modal"
                onClick={toggleModal}
                >
                Close
              </button>
            </div>
          </div>
        ) : (null)}
        
        
      </div>
    
    
    </>
  )
}

export default Modal;
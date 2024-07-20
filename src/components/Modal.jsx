import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-[300px] text-center"
    >
      <form className="w-full text-right" method="dialog">
        <Button buttonText={"X"} buttonType={"modal"} />
      </form>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

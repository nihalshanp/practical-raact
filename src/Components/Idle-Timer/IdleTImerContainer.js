import React, { useState, useRef } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");
const IdleTImerContainer = () => {
  const idelTimerRef = useRef(null);
  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const sessionTimoutRef = useRef(null);
  const onIdle = () => {
    alert("User is idle");
    setModalIsOpen(true);
    sessionTimoutRef.current = setTimeout(logOut, 5000);
  };
  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimoutRef.current);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimoutRef.current);
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isloggedIn ? <h2>Hello Nihal</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={modalIsOpen}>
        <div>
          <h1>You've been idle for a while!</h1>
          <p>You will be logged out soon</p>
          <div>
            <button onClick={logOut}>Log me out</button>
            <button onClick={stayActive}>Keep me Signed in</button>
          </div>
        </div>
      </Modal>
      <IdleTimer
        ref={idelTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
};

export default IdleTImerContainer;

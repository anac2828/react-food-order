import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

//These componenets could also be on a seperate file.
//modal background
function Backdrop({ onShowCart }) {
  return <div className={classes.backdrop} onClick={onShowCart} />;
}

//modal contents
function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal({ onShowCart, children }) {
  //using a portal
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onShowCart={onShowCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
  //This will work without using 'portals'
  // return (
  // 	<Fragment>
  // 		<Backdrop />
  // 		{/* use props.children here to foward the content between modal tags */}
  // 		<ModalOverLay>{props.children}</ModalOverLay>
  // 	</Fragment>
  // );
}

export default Modal;

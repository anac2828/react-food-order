import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

//These componenets could also be on a seperate file.
//modal background
const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

//modal contents
const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  //using a portal
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
  //This will work without using 'portals'
  // return (
  // 	<Fragment>
  // 		<Backdrop />
  // 		{/* use props.children here to foward the content between modal tags */}
  // 		<ModalOverLay>{props.children}</ModalOverLay>
  // 	</Fragment>
  // );
};

export default Modal;

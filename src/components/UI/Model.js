import { Fragment } from 'react';
import * as ReactDOM from 'react-dom';
import classes from './Model.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const portalElement = document.getElementById('overlays');
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.context}>{props.children}</div>;
    </div>
  );
};

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onBackdrop} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Model;

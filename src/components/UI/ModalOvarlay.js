import React from 'react'
import  ReactDom, { createPortal}  from 'react-dom'
import { Fragment } from 'react'
import classes from './modalOvarlay.module.css'
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCloseCart}/>
}
const PortalElement = document.getElementById('ovarlous')

function ModalOvarlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const Modal = props => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, PortalElement )}
            {createPortal(<ModalOvarlay>{props.children}</ModalOvarlay>, PortalElement)}
        </Fragment>
    )
}
export default Modal;

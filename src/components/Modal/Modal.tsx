import React from 'react'
import ReactDom from 'react-dom'
import { Children } from '../../model/model';
import './Modal.css'

const portalDiv = document.getElementById('modal')!;

export const Modal = ({children}: Children) => {
  return ReactDom.createPortal(
    <div className="modal">
      {children}
    </div>,
    portalDiv
  );
}

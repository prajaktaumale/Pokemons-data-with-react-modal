import React from "react";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

export default function Pokemon({pokemon}){

     //these 3 statement is for modal function
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    return(
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
            <h1 style={{fontSize:'20px'}}>Name: {pokemon.Name}</h1>
           <img src={pokemon.Image} style={{height:'150px', width:'150px'}} />
            </div>
           <h1 style={{fontSize:'20px'}}>Category: {pokemon.Category}</h1>
           {/*to show the details of each item after clicking on name and image of item */}
           <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
                 <Modal.Title>{pokemon.Name}</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <p>{pokemon.Category}</p>
                 <img src={pokemon.Image} style={{ height: '200px', width: '200px' }} />
                 <p>{pokemon.Description}</p>
             </Modal.Body>
             <Modal.Footer>
                 <button onClick={handleClose} className="btn1">CLOSE</button>
             </Modal.Footer>
         </Modal>
           </div>
    )
}
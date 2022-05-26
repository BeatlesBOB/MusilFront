import React,{useEffect, useState} from "react";
import {Col,Card,Button,Form,Modal} from "react-bootstrap";
import {QRCodeCanvas} from 'qrcode.react';

export default function TrackItem(props){
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState(-1);
    const [value, setValue] = useState(
        {
            album_uri:props?.album.uri,
            position
        }
    );

    const toggleModal = () => setShow(!show);

    const handlePosition = (npos) => { 
        setPosition(npos)
        setValue(prevState=>({
            album_uri:prevState.album_uri,
            position:npos
        }))
    };

   
    return (
        <Col xl={3} md={4} sm={6}>
            <Card>
                <Card.Img variant="top" src={props?.album?.images[0]?.url} />
                <Card.Body>
                    <Card.Title>{props?.album?.name}</Card.Title>
                    <Card.Text>
                        {props?.album?.artists[0]?.name}
                    </Card.Text>
                    <Button variant="success" onClick={toggleModal}>Générer le QRCode</Button>
                </Card.Body>
            </Card>
            <Modal show={show}>
                <Modal.Header closeButton onClick={toggleModal}>
                    <Modal.Title>Génération QRCode</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Position</Form.Label>
                                <Form.Control value={position} type="number" placeholder="Entrez position" onChange={(e)=>{handlePosition(e.target.value)}}/>
                                <Form.Text className="text-muted">
                                    La position est par colonne de 4
                                </Form.Text>
                            </Form.Group>
                        </Form>
                        <QRCodeCanvas size={300} value={`{"album_uri":"${value.album_uri}","position":${value.position}}`}/>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Valeur</Form.Label>
                            <Form.Control max={7} value={`{"album_uri":"${value.album_uri}","position":${value.position}}`} type="text" readOnly={true}/>
                        </Form.Group>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={toggleModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Col>
    )
}
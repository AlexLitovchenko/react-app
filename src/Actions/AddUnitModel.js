import React,{Component} from "react";
import {Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddUnitModel extends Component{
    constructor(props)
    {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+"DUnit",
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:event.target.UnitName.value,
                hp:event.target.UnitHP.value,
                mana:event.target.UnitMana.value,
                maxhp:event.target.UnitMaxHP.value,
                maxmana:event.target.UnitMaxMana.value,
                armor:event.target.UnitArmor.value,
                magresist:event.target.UnitMagresist.value,
                x:event.target.UnitX.value,
                y:event.target.UnitY.value,

            })
        })
        .then(res=>res.JSON())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


    render(){
        return(
               <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="containted-modal-title-vcenter"
                    centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="containted-modal-title-vcenter">
                        Add New Unit
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>

                                        <Form.Group controlId="UnitName">
                                            <Form.Label>UnitName</Form.Label>
                                            <Form.Control type="Text" name="UnitName" required placeholder="UnitName">
                                            </Form.Control>
                                        </Form.Group> 

                                        <Form.Group controlId="UnitHP">
                                            <Form.Label>HP</Form.Label>
                                            <Form.Control type="Text" name="UnitHP" required >
                                            </Form.Control>
                                        </Form.Group> 

                                        <Form.Group controlId="UnitMana">
                                            <Form.Label>Mana</Form.Label>
                                            <Form.Control type="Text" name="UnitMana" required >
                                            </Form.Control>
                                        </Form.Group> 

                                        <Form.Group controlId="UnitMaxMana">
                                            <Form.Label>MaxMana</Form.Label>
                                            <Form.Control type="Text" name="UnitMaxMana" required >
                                            </Form.Control>
                                        </Form.Group> 

                                        <Form.Group controlId="UnitMaxHP">
                                            <Form.Label>MaxHP</Form.Label>
                                            <Form.Control type="Text" name="UnitMaxHP" required >
                                            </Form.Control>
                                        </Form.Group> 

                                        <Form.Group controlId="UnitArmor">
                                            <Form.Label>Armor</Form.Label>
                                            <Form.Control type="Text" name="UnitArmor" required >
                                            </Form.Control>
                                        </Form.Group> 

                                        <Form.Group controlId="UnitMagresist">
                                            <Form.Label>Magresist</Form.Label>
                                            <Form.Control type="Text" name="UnitMagresist" required >
                                            </Form.Control>
                                        </Form.Group> 


                                        <Form.Group controlId="UnitX">
                                            <Form.Label>X</Form.Label>
                                            <Form.Control type="Text" name="UnitX" required >
                                            </Form.Control>
                                        </Form.Group> 


                                        <Form.Group controlId="UnitY">
                                            <Form.Label>Y</Form.Label>
                                            <Form.Control type="Text" name="UnitY" required >
                                            </Form.Control>
                                        </Form.Group> 

                                        <Form.Group>
                                            <Button variatnt="primary" type="submit">
                                                    Add New Unit
                                            </Button>
                                        </Form.Group>

                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variatnt="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>


               </div>

        )
    }
}

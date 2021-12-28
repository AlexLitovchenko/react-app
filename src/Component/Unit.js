import React, { Component } from 'react'
//import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { Table } from 'react-bootstrap';

import {Button, ButtonToolbar} from "react-bootstrap";
import { AddUnitModel } from '../Actions/AddUnitModel';
import { EditUnitModel } from '../Actions/EditUnitModel';

export class Unit extends Component{
    constructor (props){
        super(props);
        this.state={units:[], addModalShow:false, editModalShow:false}
    }
        refreshList(){
            fetch(process.env.REACT_APP_API+"DUnit")
                .then(response=> response.json())
                .then(data=>{
                    this.setState({units:data});

                })
        }
        componentDidMount(){
            this.refreshList();
        }
        componentDidUpdate(){
            this.refreshList();
        }
        deleteUnit(unitid){
            if(window.confirm("Are you sure?")){
                fetch(process.env.REACT_APP_API+"DUnit/"+unitid,{
                    method: "DELETE",
                    headers: {"Accept":"application/json",
                             "Connect-Type":"application/json"}

                })
            }

        }

        render(){
            const {units, unitid, unitname, unithp, unitmana, unitmaxmana, unitmaxhp, unitx, unity, unitarmor, unitmagresist}=this.state;
            let addModalClose=()=>this.setState({addModalShow:false});
            let editModalClose=()=>this.setState({editModalShow:false});
            return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                            <tr>
                               
                                <th>UnitName</th>
                                <th>UnitHp</th>
                                <th>UnitMp</th>
                               
                                <th>Options</th>
                            </tr>
                    </thead>
                    <tbody>
                        {units.map(unit=>
                            <tr key={unit.id}> 
                               
                                <td>{unit.name}</td>
                                <td>{unit.hp}</td>
                                <td>{unit.mana}</td>
                               
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" 
                                        onClick={()=>this.setState({editModalShow:true, unitid:unit.id, unitname:unit.name, unithp:unit.hp, unitmana:unit.mana, unitmaxmana:unit.maxmana, unitmaxhp:unit.maxhp, unitarmor:unit.armor, unitmagresist:unit.magresist, unitx:unit.x, unity:unit.y })}>
                                                Edit Unit
                                        </Button>
                                        <Button className="mr-2" variant ="danger"
                                          onClick={()=>this.deleteUnit(unit.id)}>
                                              Delete Unit
                                        </Button>
                                       
                                    </ButtonToolbar>


                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>
                <EditUnitModel show={this.state.editModalShow} onHide={editModalClose} 
                                        unitid={unitid}
                                        unitname={unitname} 
                                        unithp={unithp}
                                        unitmana={unitmana}
                                        unitmaxhp={unitmaxhp}
                                        unitmaxmana={unitmaxmana}
                                        unitarmor={unitarmor}
                                        unitmagresist={unitmagresist}
                                        unitx={unitx}
                                        unity={unity}/>
                    <ButtonToolbar>
                            <Button variant="primary" onClick={()=>this.setState({addModalShow:true})}>
                                    Add Unit
                            </Button>
                            <AddUnitModel show={this.state.addModalShow} onHide={addModalClose}></AddUnitModel>
                    </ButtonToolbar>

              
            </div>
            )
        }
}
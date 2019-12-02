import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditProducts extends Component {
    constructor(props){
        super (props)

        this.deleteProducts = this.deleteProducts.bind(this);
    }
    
    deleteProducts(){    
        axios.delete('http://localhost:3000/products/'+this.props.match.params.id)
            .then((res)=>{
                console.log("Producto Eliminado Exitosamente");
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.company}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteProducts} variant="danger" size="sm" >Elimnar</Button>
                </td>
            </tr>
        );
    }
}


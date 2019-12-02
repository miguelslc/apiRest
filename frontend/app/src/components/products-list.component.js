import React, {Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProductTableRow from './ProductsTableRow';

export default class ProductList extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/products')
            .then(res => {
                this.setState ({
                    products: res.data
                });
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    DataTable(){
        return this.state.products.map((res,i)=>{
            return <ProductTableRow obj={res} key={i} />
        })
    }

    render(){
        return (
            <div className="table-wrapper"> 
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Compania</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
                </Table>
            </div>
        )
    }
}
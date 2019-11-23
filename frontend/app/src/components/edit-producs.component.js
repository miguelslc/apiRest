import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditProducts extends Component {
    constructor(props){
        super (props)

        this.onChangeProductsTitle = this.onChangeProductsTitle.bind(this)
        this.onChangeProductsDescription = this.onChangeProductsDescription.bind(this)
        this.onChangeProductsPrice = this.onChangeProductsPrice.bind(this)
        this.onChangeProductsCompnay = this.onChangeProductsCompnay.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title:"",
            description:"",
            price:"",
            company:"",
        }

    }
    
    componentDidMount(){
        axios.get('http://localhost:3000/products/'+this.props.params.id)
            .then(res =>{
                this.setState({
                    title: res.data.title,
                    description: res.data.description,
                    price: res.data.price,
                    company: res.data.company
                });
            })
            .catch((error) =>{
                console.log(error)
            })
    }

    onChangeProductsTitle(e){
        this.setState({title: e.target.value})
    }

    onChangeProductsDescription(e){
        this.setState({description: e.target.value})
    }

    onChangeProductsPrice(e){
        this.setState({price: e.target.value})
    }

    onChangeProductsCompnay(e){
        this.setState({company: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const productsObject = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            company: this.state.company,
        }

        axios.put('http://localhost:3000/products/'+this.props.match.params.id, productsObject)
            .then((res)=>{
                console.log(res.data);
                console.log("Producto Modificado Exitosamente");
            })
            .catch((error)=>{
                console.log(error)
            })

        this.props.history.push('/products');

    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.onChangeProductsTitle} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.onChangeProductsDescription} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Roll No</Form.Label>
                        <Form.Control type="text" value={this.state.price} onChange={this.onChangeProductsPrice} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Roll No</Form.Label>
                        <Form.Control type="text" value={this.state.company} onChange={this.onChangeProductsCompnay} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Actualizar Producto
                    </Button>
                </Form>
            </div>
        );
    }
}
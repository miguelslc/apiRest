import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateProducs extends Component {

    constructor(props){
        super(props);

        this.onChangeProductTitle = this.onChangeProductTitle.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
        this.onChangeProductCompany = this.onChangeProductCompany.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title:"",
            description:"",
            price:"",
            company:""
        }
    }

    onChangeProductTitle(e){
        this.setState({title: e.target.value})
    }

    onChangeProductDescription(e){
        this.setState({description: e.target.value})
    }

    onChangeProductPrice(e){
        this.setState({price: e.target.value})
    }

    onChangeProductCompany(e){
        this.setState({company: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const studentObject = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            company: this.state.company
        };
        axios.post('http://localhost:3000/products', studentObject)
        .then(res => console.log(res.data));

        this.setState({title:"", description:"", price:"", company:""})
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="title">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" value={this.state.title} onChange={this.onChangeProductTitle}/>
                    </Form.Group>

                    <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={this.onChangeProductDescription}/>
                    </Form.Group>

                    <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={this.state.price} onChange={this.onChangeProductPrice}/>
                    </Form.Group>

                    <Form.Group controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" value={this.state.company} onChange={this.onChangeProductCompany}/>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Create Product
                    </Button>
                </Form>
                </div>
        );
  }
}
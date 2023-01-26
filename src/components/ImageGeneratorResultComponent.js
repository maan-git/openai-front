import React from 'react';
import {api} from '../configOpenAI';

class ImageGeneratorResultComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            descriptions: "",
            url: "",
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
        if (this.props.descriptions === ""){
            return;
        }
        api
         .post("cv-image-generator/description/" + this.props.descriptions)
         .then((response) => {
            this.setState({
                descriptions: response.data.descriptions, 
                url: response.data.url
            });
         })
         .catch((error) => {
            console.log(error);
         });
    }

    render(){
        if(this.state.descriptions.length > 0){
            return (
                <>
                    <hr />
                    <p>Descriptions: {this.state.descriptions}</p>
                    <img src={this.state.url} alt={this.state.descriptions} width="600" />
                </>
            )
        }
        
    }
}

export default ImageGeneratorResultComponent;
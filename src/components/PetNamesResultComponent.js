import React from 'react';
import {api} from '../configOpenAI';

class PetNamesResultComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            names: [],
            specie: "",
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
        if (this.props.specie === ""){
            return;
        }
        api
         .post("nlp-pet-name/specie/" + this.props.specie)
         .then((response) => {
            this.setState({
                names: response.data.names, 
                specie: response.data.specie
            });
         })
         .catch((error) => {
            console.log(error);
         });
    }

    render(){
        if(this.state.names.length > 0){
            return (
                <>
                    <hr />
                    <p>Specie: {this.state.specie}</p>
                    <ul>
                        {
                        this.state.names.map((name) => (
                                <li>{name}</li>
                            ))  
                        }
                    </ul>
                </>
            )
        }
        
    }
}

export default PetNamesResultComponent;
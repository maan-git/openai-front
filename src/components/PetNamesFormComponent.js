import React from 'react';
import PetNamesResultComponent from './PetNamesResultComponent';

class PetNamesForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            petSpecie: '',
            inputPetSpecie: '',
            changeValeu: false,
        };
    }
    handleChange(event){
        this.setState({changeValeu: false});
        this.setState({inputPetSpecie: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({petSpecie: this.state.inputPetSpecie});
        this.setState({changeValeu: true});
    }
    render(){
        return (
            <>
            <div className="pet-container-form">
                <form name="pet-form" id="pet-form">
                    <label>
                        Specie of your pet:
                    </label>
                    <select value={this.state.value} 
                            onChange={this.handleChange}
                            name="pet_specie" 
                            id="pet_specie" 
                            required>
                        <option value="">-- Select an option --</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="fish">Fish</option>
                        <option value="snake">Snake</option>
                    </select>
                    <label className='submit-buttom'>
                        <input type="submit" value="Submit"  onClick={this.handleSubmit}/>
                    </label>
                    
                </form>
                <div className="result-pet-names">
                    {this.state.changeValeu && this.state.petSpecie !== '' ? 
                        <PetNamesResultComponent specie={this.state.petSpecie}/> 
                        : 
                        null
                    }
                </div>
            </div>
            </>
        )
    }

    

}

export default PetNamesForm;

import React from 'react';
import ImageGeneratorResultComponent from './ImageGeneratorResultComponent';

class ImageGeneratorForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            imageDescriptions: '',
            inputimageDescriptions: '',
            changeValue: false,
        };
    }

    handleChange(event){
        this.setState({changeValue: false});
        this.setState({inputimageDescriptions: event.target.value});
    }

    handleClick(event){
        event.preventDefault();
        this.setState({imageDescriptions: this.state.inputimageDescriptions});
        this.setState({changeValue: true});
    }

    render(){
        return (
            <>
            <div className="image-container-form">
                <form name="image-form" id="image-form">
                    <label>
                    Image the descripitons:
                    </label>
                    <input  type="text" 
                            name="image-description" 
                            id="image-description"
                            value={this.state.value} 
                            onChange={this.handleChange}
                            required />
                    <label className='submit-buttom'>
                    <input type="submit" value="Submit" onClick={this.handleClick} />
                    </label>
                </form>
            </div>
            <div className="result-image-generated">
                {this.state.changeValue && this.state.imageDescriptions !== '' ? 
                    <ImageGeneratorResultComponent descriptions={this.state.imageDescriptions}/>
                    : 
                    null
                }
            </div>
            </>
        )
    }
}

export default ImageGeneratorForm;

import '../css/PetNames.css';
import PetNamesComponent from '../components/PetNamesComponent';

function PetNames() {  
  return (
    <>
    <h2>Choose a specie to name your pet</h2>
    <div className="pet-container-form">
      <form 
        name="pet-name-form" 
        id="pet-name-form"
        onsubmit="console.log('You clicked submit.'); return false">
        <label>
          Specie of your pet: 
        </label>
          <select name="pet-specie" id="pet-specie">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="fish">Fish</option>
            <option value="snake">Snake</option>
          </select>
        <label className='submit-buttom'>
          <input type="submit" value="Submit" />
        </label>
        <input type="hidden" name="form-submitted" value="1" />
      </form>
    </div>
    <PetNamesComponent specie="dog"/>
    </>
  );
}

export default PetNames;

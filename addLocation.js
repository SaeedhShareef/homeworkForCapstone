import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from axios


export default class addLocations extends Component {
    render() {
    constructor(props){
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
          this.onChangeDescription = this.onChangeDescription.bind(this);
          this.onChangeWebsite = this.onChangeWebsite.bind(this);
          this.onChangeImageUrl = this.onChangeImageUrl.bind(this)
          this.onChangeLocation = this.onChangeLocation.bind(this);
          this.onChangeAddress = this.onChangeAddress.bind(this);
          this.onChangeCity = this.onChangeCity.bind(this)
          this.onChangeDestinationState = this.onChangeDestinationState.bind(this)
          this.onChangeZipcode= this.onChangeZipcode.bind(this)
          this.onChangeIndoors = this.onChangeIndoors.bind(this)
          this.onChangeFamilyFriendly = this.onChangeFamilyFriendly.bind(this)

          this.onSubmit = this.onSubmit.bind(this);
      
          this.state = {
            Name: "",
            description: "",
            website: "",
            imageUrl: "",
            location: { },
            indoors: [],
            familyFriendly:[]
          }
        }
    return (
        <div>
            <h3>Add your own Destination!</h3>
<form onSubmit={this.onSubmit}>
<div className="form-group">
      <label>Name</label>
        <input 
          type="text"
          required
          className='form-control'
          value={this.state.name}
          onChange={this.onChangeName}
        />
  </div>
  <div className="form-group">
      <label>Description</label>
        <input 
          type="text"
          required
          className='form-control'
          value={this.state.description}
          onChange={this.onChangeDescription}
        />
  </div>
  <div className="form-group">
      <label> Website </label>
        <input
        type="text"
        required
        className="form-control"
            value={this.state.website}
            onChange={this.onChangeWebsite}
            />
  </div>
  <div className="form-group">
    <label>image url</label>
    <input
        type="text"
        required
        className="form-control"
            value={this.state.imageUrl}
            onChange={this.onChangeImageUrl}
            />
        </div>
        <div className="form-group">
                <label>Street Address</label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.address}
                           onChange={this.onChangeAddress}
                             />
                <label> City</label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.city}
                           onChange={this.onChangeCity}
                             />
                <label> Destination State</label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.destinationState}
                           onChange={this.onChangeDestinationState}
                             />
                <label> Zipcode </label>
                <input
                     type="number"
                     required
                     className="form-control"
                      value={this.state.zipCode}
                           onChange={this.onChangeZipCode}
                             />
                            </div>
                      <div className="form-group">
                 <label>Is this an indoor destination?</label>
                    
                <ToggleButtonGroup type="radio" name="options" className="mb-2">
              <ToggleButton value={1}>Yes</ToggleButton>
               <ToggleButton value={0}>No</ToggleButton>
               </ToggleButtonGroup>
                    </div>          
                <div className="form-group">  
                <label>Is this location family friendly?</label>
                    
                    <ToggleButtonGroup type="radio" name="options" className="mb-2">
                  <ToggleButton value={1}>Yes</ToggleButton>
                   <ToggleButton value={0}>No</ToggleButton>
                   </ToggleButtonGroup>
                   </div>   
        </form>
        </div>
    )
    }
        }
  
       
    






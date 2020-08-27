<h3>Add your own Destination!</h3>
<form onSubmit={this.onSubmit}>
  <div className="form-group">
    <label>Location Name </label>
    <select 
      ref="userInput"
      required
      className = "form-control"
      value={this.state.name}
      onChange={this.onChangeName}
    >
      {
        this.state.name.map((name) => {
          return <option
            key={name}
            value = {name}
          >
            {name}
          </option>
        })
      }
    </select>
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
      <label> Duration(in minutes) </label>
        <input
        type="text"
        className="form-control"
            value={this.state.duration}
            onChange={this.onChangeDuration}
            />
  </div>
  <div className="form-group">
    <label>Date:</label>
      <div>
        <DatePicker 
        selected = {this.state.date}
        onChange={this.onChangeDate}
        />
      </div>
  </div>
    </form>
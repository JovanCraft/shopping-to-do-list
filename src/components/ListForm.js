import React, { useState } from "react";

class ListForm extends React.Component {

  constructor() {
    super();
    this.state = {
      item: ''
    }
  }

  handleChanges = e => {

    e.preventDefault()
    this.setState({...this.state, item: e.target.value})
  };


  submitForm = e => {
    e.preventDefault()
    this.props.addItem(e, this.state.item)
    this.setState({...this.state, item: ''})
  }

  render() {
    return (
      <form className='input' onSubmit={this.submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input className='field' type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;

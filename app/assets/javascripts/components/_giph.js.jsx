class Giph extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   editable: false 
    // };

    // this.handleEdit = this.handleEdit.bind(this);
  }

  // handleEdit() {
  //   if(this.state.editable) {
  //     this.props.handleUpdate({
  //       id: this.props.item.id,
  //       name: this.name.value,
  //       description: this.description.value
  //     });
  //     console.log(`Edit!`);
  //   }
      
  //   this.setState({ editable: !this.state.editable });
  // }

  render() {
    // var item = {...this.props.item};
    // var name = this.state.editable ? <input type='text' defaultValue={item.name} ref={input => this.name = input} /> : <h3>{item.name}</h3>;
    // var description = this.state.editable ? <input type='text' defaultValue={item.description} ref={input => this.description = input} /> : <p>{item.description}</p>

    return (
      <div>
        Giph
      </div>
        //{// name}
       // {//description}
        // <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
        // <button onClick={this.props.handleDelete.bind(this, item.id)}>Delete</button>
    )
  }
};
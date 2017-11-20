class AllGiphs extends React.Component {
  constructor() {
    super();

    // this.onUpdate = this.onUpdate.bind(this);
  }

  // onUpdate(item) {
  //   this.props.onUpdate(item);
  // }

  render() {
    // NEEDS UPDATE
    const giphs = this.props.giphs.map((giph) => {
      return (
        <div>
          GIPH FROM MAP
        </div>
        //{<div key={giph.id}>
          //         {<Giph item={item} handleUpdate={this.onUpdate} handleDelete={this.props.handleDelete}/>}
            //    </div>}
      )
    });

    console.log("Results rendering");
    return (
      <div>
        AllGiphs
        {giphs}
      </div>
    )
  }
};

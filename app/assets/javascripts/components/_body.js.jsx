class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      offset: 0,
      search_term: "welcome"
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.removeItem = this.removeItem.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/api/v1/giphs/search',
      type: 'get',
      data: { search: { text: this.state.search_term } },
      success: (response) => {
        this.paginate(response);
        console.log('mount search success!');
      },
      error: (xhr) => {
        console.log('mount search error');
      }
    })
    // $.ajax(
    //   `/api/v1/giphs/search?=${ this.state.search_term }`,
    //   (response) => {
    //     this.setState({ gifs: response });
    //     console.log("Items set");
    //   }
    // );
    console.log('Body mounted: ');
  }

  // handleUpdate(item) {
  //   $.ajax({
  //     url: `/api/v1/items/${item.id}`,
  //     type: 'PUT',
  //     data: { item: item },
  //     success:() => {
  //       console.log('update call successful');
  //       this.updateItems(item);
  //     }, error() {
  //       console.log('Update failed')
  //     }
  //   });
  // }

  paginate(newGifs) {
    // var updatedGifs = this.state.gifs.filter((g) => {
    //   return g.id != gif.id;
    // }).concat(gif);

    const updatedGifs = this.state.gifs.concat(newGifs);
    this.setState({ gifs: updatedGifs });
  }

  // handleDelete(id) {
  //   $.ajax({
  //     url: `/api/v1/items/${id}`,
  //     type: 'DELETE',
  //     success:() => {
  //       this.removeItem(id);
  //       console.log(`delete: ${id}`);
  //     }, error() {
  //       console.log(`error with delete: ${response}`)
  //     }
  //   });
  // }

  // removeItem(id) {
  //   var newItems = this.state.items.filter((item) => {
  //     return item.id != id;
  //   });

  //   this.setState({ items: newItems });
  // }

  // handleSubmit(item) {
  //   var newState = this.state.items.concat(item);
  //   this.setState({ items: newState });

  //   console.log(`Submit response: ${item}`);
  // }

  render() {
    return (
      <div>
        <h1>Giphty Giphs From Giphy</h1>
        <AllGifs gifs={this.state.gifs} />
        <Paginate />
      </div>
      //{//<Results giphs={this.state.giphs} onUpdate={this.handleUpdate} />}
        //{//<Search handleSubmit={this.handleSubmit} />
    )
  }
}

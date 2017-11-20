class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      offset: 0,
      search_term: "cheers"
    };

    this.addToDom = this.addToDom.bind(this);
    this.searchApi = this.searchApi.bind(this);
  }

  componentDidMount() {
    this.searchApi();
  }

  searchApi() {
    $.ajax({
      url: '/api/v1/gifs/search',
      type: 'get',
      data: { 
        search: { 
          text: this.state.search_term,
          offset: this.state.offset
        } 
      },
      success: (newGifs) => {
        this.addToDom(newGifs);
        console.log('mount search success!');
      },
      error: (xhr) => {
        console.log('mount search error');
      }
    })
  }

  addToDom(newGifs) {
    const combinedGifs = this.state.gifs.concat(newGifs);
    const newOffset = combinedGifs.length;

    this.setState({ 
      gifs: combinedGifs,
      offset: newOffset,
    });
  }

  render() {
    return (
      <div className="container">
        <AllGifs gifs={this.state.gifs} />
        <Paginate handlePaginate={ this.searchApi } />
      </div>
    )
  }
}

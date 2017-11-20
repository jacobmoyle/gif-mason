class Paginate extends React.Component {
  render() {
    return (
      <button type="button" className="paginate col-12 btn-link" onClick={ () => this.props.handlePaginate() }>
        More
      </button>  
    )
  }
};
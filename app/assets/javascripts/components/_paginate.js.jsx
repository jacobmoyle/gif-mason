class Paginate extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ () => this.props.handlePaginate() } type='submit'>Show more...</button>
      </div>  
    )
  }
};
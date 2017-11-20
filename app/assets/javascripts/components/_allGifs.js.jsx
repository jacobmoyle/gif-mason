class AllGifs extends React.Component {
  render() {
    let list = this.props.gifs.map((gif) => {
      return (
        <Gif gif={gif} />
      )
    });

    list = list.length >= 1 ? list : <div className="card"><p>Nothing Here...</p></div>;

    return (
      <div className="card-columns">
        {list}
      </div>
    )
  }
};

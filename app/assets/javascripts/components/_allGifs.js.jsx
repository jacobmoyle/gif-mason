class AllGifs extends React.Component {
  render() {
    let list = this.props.gifs.map((gif) => {
      return (
        <div key={gif.id}>
          <Gif gif={gif} />
        </div>
      )
    });

    list = list.length >= 1 ? list : <h1>Nothing seems to be here...</h1>

    console.log("Results rendering");
    return (
      <div>
        {list}
      </div>
    )
  }
};

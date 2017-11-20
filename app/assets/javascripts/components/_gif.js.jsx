class Gif extends React.Component {
  render() {
    const gif = {...this.props.gif};
    const downsized_gif = gif.images.downsized;

    const author = gif.username === '' ? <p>By Unknown</p> : <p>By <a href={gif.source_post_url}>{gif.username}</a></p>; 

    return (
      <div className="card" key={gif.id}>
        <img className="card-img img-fluid" src={downsized_gif.url} alt="Gif" />
      </div>
    )
  }
};
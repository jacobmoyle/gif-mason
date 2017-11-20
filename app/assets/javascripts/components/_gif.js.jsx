class Gif extends React.Component {
  render() {
    const gif = {...this.props.gif};
    const downsized_gif = gif.images.downsized;

    const author = gif.username === '' ? <p>Creator Unknown</p> : <p>Creator: <a href={gif.source_post_url}>{gif.username}</a></p>; 

    return (
      <div>
        {author}
        <img src={downsized_gif.url} width={downsized_gif.width} height={downsized_gif.height} />
      </div>
    )
  }
};
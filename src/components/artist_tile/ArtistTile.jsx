import './ArtistTile.scss'


const ArtistTile = (props) => {
  return (
    <div className="artist">
        <img src={props.image} alt="The beatles album cover" className="artist__image" />
        <h1 className="artist__name">{props.name}</h1>
        <button className="artist__button">Find out more</button>
    </div>
  )
}

export default ArtistTile
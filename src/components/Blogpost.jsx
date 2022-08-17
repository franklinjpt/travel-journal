export default function Blogpost(props) {
  return (
    <div>
    <article className="blogpost">
        <figure className="blogpost__figure">
          <img src={`/images/${props.image}`} alt={props.title}/>
        </figure>
        <section className="blogpost-section">
          <div className="blogpost-section__location">
            <span className="location-icon"></span>
            <p className="location-name">{props.location}</p>
            <a href="https://goo.gl/maps/jdPrt6GEUv7nhaE37" className="location-link">View on Google Maps</a>
          </div>
          <h1 className="blogpost-section__title">{props.title}</h1>
          <p className="blogpost-section__date">{props.date}</p>
          <p className="blogpost-section__description">{props.description}</p>
        </section>
      </article>
      {props.id !== props.count && <hr className="solid-line" />}
    </div>
  )
}
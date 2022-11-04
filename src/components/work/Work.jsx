import "./work.scss"
import apps from "./applications.js"

export default function Work() {

  return (
    <div className="work">
      <div className="header">
        <div className="topBanner"></div>
        <h1>Applications</h1>
        <div className="bottomBanner"></div>
      </div>
      <div className="work-container" id="work">

        {apps.map(({ key, title, img, description }) =>

          <div className="application" key={key}>
            <img src={img} alt={title} />
            <div className="description">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
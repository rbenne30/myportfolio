import "./work.scss"
import apps from "./applications.js"

export default function Work() {

  return (
    <div className="work">
      <div className="work-container" id="work">

        {apps.map(({ key, title, img, description, repo, website }) =>

          <div className="application" key={key}>
            <img src={img} alt={title} />
            <div className="description">
              <h2>{title}</h2>
              <p>{description}</p>
              <a href={repo} taget="_blank" className="githubBtn"><button>repo</button></a>
              <a href={website} taget="_blank" className="websiteBtn"><button>website</button></a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
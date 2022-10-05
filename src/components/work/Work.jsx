import Worklist from "../worklist/Worklist"
import "./work.scss"

export default function Work() {

  const list = [
    {
      id: "web",
      title: "Web App",
    },

    {
      id: "readme",
      title: "README APP",
    },

    {
      id:" workday scheduler",
      Title: " Workday Scheduler",
    }
  ]
  return (
    <div className="work" id="work">
      <h1>Work</h1>
      <ul>
        {list.map((item) => (
          <Worklist title={item.title}/>
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/hidden-gems.png" alt=""/>
            <h3>Hidden Gems App</h3>
            
        </div>
        <div className="item">
          <img src="assets/README.png" alt=""/>
            <h3>README generator</h3>
            
        </div>
        <div className="item">
          <img src="assets/scheduler.png" alt=""/>
            <h3>Workday scheduler</h3>
            
        </div>
      </div>
    </div>
  )
}
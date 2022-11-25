import "./contact.scss"
import github from './images/github.png';
import linkedIn from './images/linkedIn.png';

export default function Contact() {
  return (
    <div className="contact">
      <div className="header">
        <div className="contactTop"></div>
        <h1 id="connect">Contact</h1>
        <div className="contactBottom"></div>
      </div>
      <div className="contactIcon" id="contact">
      
      <a href="ryannebennett1@outlook.com"> <i class="fa fa-square-envelope"> ryannebennett1@outlook.com</i></a>
      <a href="https://www.linkedin.com/in/ryanne-bennett-48b94a58/"> <i class="fa-brands fa-linkedin"> RyanneBennett</i></a>
      <a href="https://github.com/rbenne30"> <i class="fa-brands fa-github"> rbenne30</i></a>
      </div>
      <div className="footerImg"></div>
    </div>
  )
}
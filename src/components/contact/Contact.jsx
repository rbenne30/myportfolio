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
      
      <a href="Geronimo.Perez4@gmail.com"><i class="fa fa-square-envelope"> Ryanne@gmal.com</i></a>
      <a href="linkedin.com/in/geronimoperez"> <i class="fa-brands fa-linkedin"> RyanneBennett</i></a>
      <a href="https://github.com/Geerooniimoo"> <i class="fa-brands fa-github"> Ryanne</i></a>
      </div>
      <div className="footerImg"></div>
    </div>
  )
}
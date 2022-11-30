import './resume.css';
import resume from './resume.pdf';

const Resume = () =>

    <div className='resume'>
        <iframe id='resume' src={resume}></iframe>;
    </div>

export default Resume; 
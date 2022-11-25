import "./skills.scss";
import icons from './icons';

const Skills = ({ topColor, banner, bottomColor, bg }) =>
    <div className='skills' style={{ borderTopColor: topColor, borderBottom: bottomColor, backgroundImage: `url(${bg})` }}>
        <div className="skew" style={{ borderTopColor: topColor, borderBottomColor: bottomColor }}>
            <div className="topFill" style={{ background: topColor }}></div>
            <div className="icons" style={{ borderTopColor: topColor }}>
                {
                    icons.map(
                        ({ key, title, image }) =>
                            <div key={key} className="iconDiv">
                                <label htmlFor={title}>{title.toLocaleUpperCase()}</label>
                                <img className="icon" src={image} />
                            </div>
                    )
                }
            </div>
                <h1 className="banner" style={{borderBottomColor:bottomColor}}>{banner}</h1>
                <div className="bottomFill" style={{background:bottomColor}}></div>
        </div>
    </div>

export default Skills;
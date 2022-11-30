import "./banner.scss";
import icons from './icons';

const Banner = ({ topColor, banner, bottomColor, bg }) =>
    <div className='skills' style={{ borderTopColor: topColor, borderBottom: bottomColor, backgroundImage: `url(${bg})` }}>
        <div className="skew" style={{ borderTopColor: topColor, borderBottomColor: bottomColor }}>
            <div className="topFill" style={{ background: topColor }}></div>
            <div className="iconsFill" style={{ borderTopColor: topColor }}>
            </div>
                <h1 className="banner" style={{borderBottomColor:bottomColor}}>{banner}</h1>
                <div className="bottomFill" style={{background:bottomColor}}></div>
        </div>
    </div>

export default Banner;
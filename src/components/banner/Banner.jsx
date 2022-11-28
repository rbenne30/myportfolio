import "./banner.scss";

const Banner = ({ topColor, banner, bottomColor, bg }) =>
    <div className='banner' style={{ borderTopColor: topColor, borderBottom: bottomColor, backgroundImage: `url(${bg})` }}>
        <div className="skew" style={{ borderTopColor: topColor, borderBottomColor: bottomColor }}>
            <div className="topFill" style={{ background: topColor }}></div>
            <div className="icons" style={{ borderTopColor: topColor }}>
            </div>
                <h1 className="banner" style={{borderBottomColor:bottomColor}}>{banner}</h1>
                <div className="bottomFill" style={{background:bottomColor}}></div>
        </div>
    </div>

export default Banner;
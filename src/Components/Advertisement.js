import '../Styles/Navbar.css'

const Advertisement = () => {
    return (
        <div id="id1" style={{ position: 'relative' }}>
            <img className="advimg"
                src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/7869fd17-9599-4a5e-9b03-4748a3dae016.jpg"
                alt="" />
            <div className="advertise">
                <h1>Unlock the power of your people</h1>
                <p>Udemy Business is trusted by 10.5K+ companies around the world. <a href="">Find out what we can do for
                    yours.</a></p>
            </div>
        </div>
    )
}

export default Advertisement;
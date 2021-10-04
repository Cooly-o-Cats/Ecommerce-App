import Slider from "../components/Slider"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"

function Home() {
    return (
        <div style={{fontFamily:"Urbanist"}}>
            <Announcement message="Super Deal! Free Shipping on Orders Over $50"/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home

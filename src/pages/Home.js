import Slider from "../components/Slider"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

function Home() {
    return (
        <div style={{fontFamily:"Urbanist"}}>
            <Announcement message="Super Deal! Free Shipping on Orders Over $50"/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home

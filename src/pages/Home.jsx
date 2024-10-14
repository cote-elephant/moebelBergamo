import Navbar from "../components/NavBar.jsx";
import CategoryLeiste from "../components/CategoryLeiste.jsx"
import '../styles/home.css'

const Home = () => {
return (
<>
<div>
<h2>MAKE YOUR</h2>
<h1>HOME BEAUTIFUL</h1>
<p>The best simple place where you discover most wonderful furnitures and make your home beautiful</p>
<button>Get Started</button>
</div>
<div>
<CategoryLeiste />
<Navbar />
</div>
</>
);
};

export default Home;

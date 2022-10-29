import './App.css';
import {Routes, Route, Link, NavLink, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import Map from './pages/Map';
import AboutChildrenOne from './pages/AboutChildrenOne';
import AboutChildrenTwo from './pages/AboutChildrenTwo';
import ProductDetail from './pages/ProductDetail';

function App() {

  const products = [
    {
      name: 'product 1',
      id: 1,
      price: 100
    },
    {
      name: 'product 2',
      id: 2,
      price: 200
    },
    {
      name: 'product 3',
      id: 3,
      price: 300
    }
]

const navigate = useNavigate();

const getProductDetail = (product) => {
  //call navigate to change page
  navigate(`products/${product.id}`)
}

  return (
    <div className="App">

      <button onClick={() => navigate(-1)}>previous</button>
      <button onClick={() => navigate(1)}>next</button>
      
      {
        products.map((product) => {
          return (
            <div key={product.id} onClick={() => getProductDetail(product)}>
            {product.name}
            </div>
          )
        })
      }


      <nav>
        {/* link k có class active
        navlink có class active để add css cho navlink khi active  */}

        <Link className="links" to="/">
          Link to Home
        </Link>
        <Link className="links" to="/about">
          Link to About
        </Link>

        {/* add thêm props end để ngăn trường hợp path"/" bị ảnh hưởng bới css của path khác */}
        <NavLink className="links" to="/" end>
          Link to Home
        </NavLink>
        {/* about không có end -> để cho path sau /about đều được apply css khi active */}
        <NavLink className="links" to="/about">
          Link to About
        </NavLink>

      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          {/* index ở childrenone -> để khi vào path /about thì sẽ hiện luôn content của aboutchildrenone */}
          {/* khi sử dụng nested router như trường hợp này, thì bên component About phải có thêm <Outlet /> */}
          <Route index element={<AboutChildrenOne/>}/>
          <Route path="/about/children2" element={<AboutChildrenTwo/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
      </Routes>

      <h1>Footer</h1>
    </div>
  );
}

export default App;

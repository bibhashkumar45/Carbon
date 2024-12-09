import "./Home.css";


const Home=()=>{
  return (
   
    <div className="container mt-5 p-2 mb-5">
      <div className="row">
        <div className="col-5 offset-0 mt-5">
          <p className="mb-4 Home-Heading ">Coal Footprint</p>
          <p className="Home-description">Carbon footprint and explore pathways to carbon neutrality involves several components and considerations. Provide data analytics to evaluate strategies like renewable energy adoption, energy efficiency improvements, carbon sequestration techniques, etc.</p>
          <button type="button" class="btn  btn-outline-danger mt-3 ">Sign up</button>
        </div>
        
        <div className="col-4 offset-3">
        <img src="src/assets/Home.jpg" alt="Hero Photo" className="Home-img" />
       
        </div>
      </div>
    </div>
  
  )
}
export default Home;
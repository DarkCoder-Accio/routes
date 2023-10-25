import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return(
        <div>
            <h1>Home</h1>
            <p>Home page body content</p>
            {/* <button onClick={()=>navigate("/blog")}>Back</button> */}

            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(1)}>Forward</button>


            {/* <button onClick={()=>navigate("blog")}>Read Blogs without</button> */}
        </div>
    )
}

export default Home;
import React, { useContext} from "react";
import {FeatureContext} from "../FeatureContext";



const Home = () => {
const value = useContext(FeatureContext)
    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}
export default Home;
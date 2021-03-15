import React, {createContext, useState} from "react";
export const FeatureContext = createContext();


export const FeatureProvider = props => {
const [features, setFeatures] = useState([
   {
    transaction:"wallet",
    log: "VTu Log",   
   },
   {
    transaction:"wallet",
    log: "VTu Log",    
   },
    {
    transaction:"wallet",
    log: "VTu Log",   
   },
   {
    transaction:"wallet",
    log: "VTu Log",  
   }
]);

return (
    <div>
    <FeatureContext.Provider value={"Hello world"}>
        {props.children}
    </FeatureContext.Provider>
    </div>
)

};
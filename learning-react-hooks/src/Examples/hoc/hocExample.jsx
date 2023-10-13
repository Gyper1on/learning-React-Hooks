import React from "react";
import withLogin from "./withLogin";
import Component from './someComponent'
import withPropsStyles from "./withPropsStyles";




const HOCExample = () => {
 const ComponentWithAuth = withLogin(Component)
    const ComponentWithPropStyles = withPropsStyles(Component)
const NewComponent = withPropsStyles(ComponentWithAuth)
    return (
        <>
            <h4>1. Обычный компонент</h4>
            <Component/>


            <h4>2. Функциональный HOC</h4>
               <ComponentWithAuth/>

            <h4>3. HOC With Styles and Props</h4>
            <ComponentWithPropStyles/>


            <h4>4. Composed HOC</h4>
            <NewComponent/>


        </>
    );
};

export default HOCExample;

import React from 'react';
import Card from './Card';
import KCard from './KCard';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({property, korean}) => {
 
    return(
        <div className="page">
            <TransitionGroup className={korean? "kcard-container" :"card-container"}>
                <CSSTransition
                    key={property.index+1}
                    timeout={4500}
                    classNames="slide"
                >
                    {korean 
                    ? <KCard property={property} />
                    : <Card property={property} />}

                </CSSTransition>
            </TransitionGroup>
        </div>   
    )
}

export default Home;
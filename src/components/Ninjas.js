import React, {Component} from 'react';

const Ninjas = (props) => {

        // const ninjas = this.props.ninjas;
        const {ninjas} = props; // no THIS in here
        
        const ninjaList = ninjas.map(item => {
            return (
                <div className="ninja" key={item.id} >
                    <div>Name: {item.name}</div>
                    <div>Age: {item.age}</div>
                    <div>Belt: {item.belt}</div>
                </div>
            )
        })

        return (
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    
}

export default Ninjas

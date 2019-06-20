import React, {Component} from 'react';

class Ninjas extends Component {
    state = {
        name: 'Ryu',
        age: 36,
        belt: 'black'
    }

    render() {

        const ninjas = this.props.ninjas;

        // destructuring
        // const { ninjas } = this.props;
        
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
}

export default Ninjas

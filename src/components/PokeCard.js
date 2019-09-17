import React, { Component } from 'react';

class PokeCard extends Component {

    constructor(props){
        super(props)
        this.props = {
            name: name,
            sprite: sprite,
            types: types
        }

        this.classTypes = this.classTypes.bind(this)
    }

    classTypes(){
        let classText = ""
        this.props.types.forEach(i => {
            classText.concat(`${i} `)
        })

        return classText
    }

    render(){
        return (
            <div className={this.classTypes()}>
                <div className="card-sprite">
                    
                </div>
            </div>
        );
    }
}

export default PokeCard;
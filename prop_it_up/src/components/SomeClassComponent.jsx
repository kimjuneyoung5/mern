import React, {Component} from 'react';


class SomeClassComponent extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            newPerson : this.props.person1.name,
            age : this.props.person1.age,
            hairColor : this.props.person1.hairColor,
            newPerson2 : this.props.person2.name,
            age2 : this.props.person2.age,
            hairColor2 : this.props.person2.hairColor,
        }

    }

    clickBirthdayButton() {
        this.setState ({
            age : this.state.age + 1
        })
    }
    clickBirthdayButton2() {
        this.setState ({
            age2 : this.state.age2 + 1
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.newPerson}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button onClick={ () => this.clickBirthdayButton()}>Birthday Button for {this.state.newPerson}</button>
                <p></p>
                <h1>{this.state.newPerson2}</h1>
                <p>Age: {this.state.age2}</p>
                <p>Hair Color: {this.state.hairColor2}</p>
                <button onClick={ () => this.clickBirthdayButton2()}>Birthday Button for {this.state.newPerson2}</button>
                <p></p>
            </div>
        )
    }
}

export default SomeClassComponent;
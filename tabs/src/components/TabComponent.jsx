import React, { Component } from  'react';



class TabComponent extends Component {
    constructor() {
        super();

        this.state = {
            black1: false,
            black2: false,
            black3: false,
            tab1: true,
            tab2: true,
            tab3: true
        }
    }
    
    buildTabOne(){
        this.setState({black2: false})
        this.setState({black3: false})
        this.setState({black1: true})
        this.setState({tab1: false})
        this.setState({tab2: true})
        this.setState({tab3: true})
    }
    
    buildTabTwo(){
        this.setState({black1: false})
        this.setState({black3: false})
        this.setState({black2: true})
        this.setState({tab1: true})
        this.setState({tab2: false})
        this.setState({tab3: true})
    }

    buildTabThree(){
        this.setState({black2: false})
        this.setState({black1: false})
        this.setState({black3: true})
        this.setState({tab1: true})
        this.setState({tab2: true})
        this.setState({tab3: false})
    }

    render(){
        //const {id, selectedTab} = this.props;
        let btn_class_one = this.state.black1 ? "blackButton" : "whiteButton";
        let btn_class_two = this.state.black2 ? "blackButton" : "whiteButton";
        let btn_class_three = this.state.black3 ? "blackButton" : "whiteButton";

        let tab_class_one = this.state.tab1 ? "noTab" : "showTab";
        let tab_class_two = this.state.tab2 ? "noTab" : "showTab";
        let tab_class_three = this.state.tab3 ? "noTab" : "showTab";
        
        return (
            <div>
                <button className={btn_class_one} onClick={this.buildTabOne.bind(this)}>Tab 1</button>
                <button className={btn_class_two} onClick={this.buildTabTwo.bind(this)}>Tab 2</button>
                <button className={btn_class_three} onClick={this.buildTabThree.bind(this)}>Tab 3</button>
                <p></p>
                <input className={tab_class_one} type="text" id="tabInput1" placeholder="Tab1 content is showing here" />
                <input className={tab_class_two} type="text" id="tabInput2" placeholder="Tab2 content is showing here" />
                <input className={tab_class_three} type="text" id="tabInput3" placeholder="Tab3 content is showing here" />
            </div>       
        );
    }
}


export default TabComponent
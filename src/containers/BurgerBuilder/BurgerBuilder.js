import { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:3,
            bacon:1,
            cheese:2,
            meat:2
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Aux>
        );
    }
}
export default BurgerBuilder;
import classes from './Burger.module.css';
import Burgeringrediant from './Burgeringredient/Burgeringredient';
//ingredients:{
 //   salad:4,
  //  bacon:1,
   // cheese:2,
    //meat:2
const burger = (props) =>{
        const transformedingredients = Object.keys(props.ingredients).map(
            igKey=>{
                return [...Array(props.ingredients[igKey])].map(
                    (_,i) =>{
                        return <Burgeringrediant type={igKey} key={igKey+i} />;
                    }
                );
            }
        ).reduce((arr,el)=>{
            return arr.concat(el);
        },[]);
        console.log(transformedingredients);
    return (
        <div className={classes.Burger}>
            <Burgeringrediant type="bread-top"/>
            {transformedingredients}
            <Burgeringrediant type="bread-bottom"/>
        </div>
    );
};
export default burger;

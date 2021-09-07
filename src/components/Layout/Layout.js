import React from 'react';
import Aux from '../../hoc/Auxilary';
const layout = (props) => (
    <Aux>
    <div>Toolbar,Backdrop,SideDrawer</div>
    <main>
        {props.children}
    </main>
    </Aux>
);
export default layout;
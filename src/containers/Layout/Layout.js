import React, { Component } from 'react';

import AuxiliaryComp from '../AuxiliaryComp';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloserHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <AuxiliaryComp>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloserHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </AuxiliaryComp>
        )
    }
}

export default Layout;
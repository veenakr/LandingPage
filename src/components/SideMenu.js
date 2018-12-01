import React from 'react';
import { Menu } from 'antd';
import { MainMenu } from './SideMenuStyles';
import { HomeIcon, MyAccountsIcon, SendMoneyIcon, PayBillsIcon, MyInvestIcon, ReloadsIcon, 
    CheckBookServiceIcon, SecurityIcon, OtherProducts} from '../svgs/svg';

class SideMenu extends React.Component {
    render() {
        return (
                <MainMenu className="main-menu">
                    <Menu.Item className="menu-item home-main" key="1">
                        <span className="icon">
                            <HomeIcon />
                        </span>
                        <span className="home-color">Home</span>
                    </Menu.Item>
                    <hr />
                    <Menu.Item className="menu-item" key="2">
                        <span className="icon">
                            <MyAccountsIcon />
                        </span>
                        <span>My Accounts</span>
                    </Menu.Item>
                    <hr />
                    <Menu.Item className="menu-item" key="3">
                        <span className="icon">
                            <SendMoneyIcon />
                        </span>
                        <span>Send Money 1</span>

                    </Menu.Item>
                    <hr />
                    <Menu.Item className="menu-item" key="4">
                    <span className="icon">
                        <PayBillsIcon />
                        </span>
                        <span>Pay Bills</span>
                    </Menu.Item>
                    <hr />
                    <Menu.Item className="menu-item" key="9">
                        <span className="icon">
                        <MyInvestIcon />
                        </span>
                        <span>My Investments</span>
                    </Menu.Item>
                    <hr />
                    <Menu.Item className="menu-item" key="5">
                        <span className="icon">
                        <ReloadsIcon />
                        </span>
                        <span>Reloads</span>
                    </Menu.Item>
                    <hr />
                    <Menu.Item className="menu-item" key="6">
                        <span className="icon">
                        <CheckBookServiceIcon />
                        </span>
                        <span>Checkbook Services</span>
                    </Menu.Item>
                    <hr />
                    <Menu.Item className="menu-item" key="7">
                        <span className="icon">
                        <SecurityIcon />
                        </span>
                        <span>Security Management</span>
                    </Menu.Item>
                    <hr />
                    <Menu.Item className="menu-item" key="8">
                        <span className="icon">
                        <OtherProducts />
                        </span>
                        <span>Other Products</span>
                    </Menu.Item>
                    <hr />
                </MainMenu>
        )
    }

}

export default SideMenu;
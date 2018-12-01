import styled  from 'styled-components';
import { Menu } from 'antd';
import 'antd/lib/menu/style/css';

export const MainMenu = styled(Menu)`
    height: 100vh;
    border: none;
    box-shadow: 0 20px 45px 0 rgba(220, 228, 235, 0.8) !important;
    background-color: #ffffff;
    display: inline-block;

    .menu-item, .home-main {
        font-family: CircularStd;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        margin: 0px !important;
        padding: 0px !important;
        padding: 22px 0 24px 0 !important;
        color: #749cca;
        display: flex;
        align-items: center;
    }

    /* .menu-item.active {
        background-color: rgba(253, 185, 19, 0.05);
        color: #004ea8;
    } */

    .menu-item:hover {
        background-color: rgba(253, 185, 19, 0.05);
        color: #004ea8;
        font-weight: bold;
    }

    hr {
        opacity: 0.07;
        margin: 0 22px 0 80px;
    }

    .icon {
        width: 80px;
        text-align: right;
        padding-right: 25.5px;
    }

`
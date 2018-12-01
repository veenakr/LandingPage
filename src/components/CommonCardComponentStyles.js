import styled from 'styled-components';
import { Card } from 'antd';

export const MainCard = styled(Card)`
    margin: 0px !important;
    padding: 0px !important;
    border: 0px !important;
    border-radius: 6px;
    box-shadow: 0 20px 45px 0 rgba(220, 228, 235, 0.6);
    border: 1px solid black;
    background-color: #ffffff;
    padding-left: 30px !important;
`

export const QuickPayBillsStyles = styled.div`
    width: 50%;
    max-width: 492px;
    margin-right: 24px;
    .Quick-Links, .Quick-Pay-Bills, .Your-Saved-Billers,
    .User-Name, .Cust-No, .Pay-Bill, {
        font-family: CircularStd;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #5d728b;
    }

    .Quick-Pay-Bills {
        margin: 0px !important;
        font-family: SoleilLt;
        font-size: 26px;
        font-weight: normal;
        line-height: 1.31;
        color: #5d728b;
        padding: 27px 0 37px 0 !important;
    }

    .Your-Saved-Billers {
        font-size: 13px;
        font-weight: normal;
        line-height: 1;
        letter-spacing: 0px;
        color: #c2c2c2;
        margin-bottom: 14px;
    }

    .User-Name {
        font-size: 18px;
        font-weight: 500;
        color: #0072ce;
    }

    .Cust-No {
        font-size: 14px;
        line-height: 1.29;
        color: #a9bfd9;
        font-weight: normal;
        margin-bottom: 0;
    }

    .Pay-Bill, .See-More {
        border-radius: 6px;
        background-color: rgba(0, 114, 206, 0.07);
        color: #0072ce;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        text-align: center;
        border: none;
    }

    .oval, .three-dots {
        background-color: #e2edf6;
        border-radius: 50%;
        text-align: center;
        color: #778aa0;
        display: inline-block;
        height: 40px;
        width: 40px;
        line-height: 40px;
        margin-right: 20px;
    }

    .oval {
        font-size: 15px;
    }

    .oval:hover, .three-dots:hover {
        background-color: #0072ce;
        color: #ffffff;
        > .dot {
            background-color: #ffffff;
        }
    }
    

    .dot {
        display: inline-block;
        width: 3px;
        height: 3px;
        background-color: #0072ce;
        border-radius: 50%;
        margin: 0 1.5px;
        line-height: 40px;
        vertical-align: middle;
    }

    .See-More {
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        background: none;
        margin-left: -8px;
    }

    .user-info {
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin: 26px 0 0;
        padding-bottom: 30px;
    }
    .User-Name {
        margin: 0;
    }

    .Pay-Bill {
        height: 36px;
        width: 120px;
        margin-right: 36px;
    }
`
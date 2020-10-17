import React from 'react';
import logo from './img/logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <img
                    src={logo}
                    alt='logo'/>
                    <div className='header-input'>
                        <SearchIcon/>
                        <input placeholder='Search Facebook' type='text'/>
                        </div>
            </div>
            
            <div className='header-center'>
                <div className='header-option header-option-active'>
                    <HomeIcon frontSize='large'/>
                </div>
                <div className='header-option'>
                    <FlagIcon frontSize='large'/>
                </div>
                <div className='header-option'>
                    <SubscriptionsIcon frontSize='large'/>
                </div>
                <div className='header-option'>
                    <StorefrontIcon frontSize='large'/>
                </div>
                <div className='header-option'>
                    <SupervisedUserCircleIcon frontSize='large'/>
                </div>
            </div>
            <div className='header-right'></div>
                <div className='header-info'>
                    <Avatar/>
                    <h4>Nandun</h4>

                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon/>
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>


                </div>
        </div>
    )
}

export default Header

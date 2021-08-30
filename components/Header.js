import React, { useState } from 'react'; 
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import ChainId from './ChainId'
import Account from './Account'
import Balance from './Balance.tsx'
import { AppBar, Badge, Box, IconButton } from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from './SideDrawer';
import MenuIcon  from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';



export default function Header() {
  const { active, error } = useWeb3React()
  const [openWallet, setOpenWallet] = useState(false);
const useStyle = makeStyles((theme) => ({
		
		root: {
			
			[theme.breakpoints.only('xs')]:{
				
				display: 'flex',
				flexDirection: 'row',
				width: '100%'
				
			},
			
			[theme.breakpoints.between('sm', 'xl')]:{
				
				width: '50vw',
				display: 'flex',
				flexDirection: 'column'
				
			},
		},	
			
		wallet: {
		
			[theme.breakpoints.only('xs')]:{
			borderRadius: '10px 10px 10px 10px',
			border: '1px solid white',
			paddingTop: '2vh',
			width: '13%',
			height: '2vh',
			paddingBottom: '2vh',
			paddingLeft: '2vw',
			paddingRight: '2vw',
			marginTop: '2vh',
			marginLeft: '75%',
			cursor: 'pointer',
			alignItems: 'center'
			
		},
		
		[theme.breakpoints.between('sm', 'xl')]:{

			borderRadius: '10px 10px 10px 10px',
			border: '1px solid white',
			paddingTop: '2vh',
			width: '13%',
			height: '2vh',
			paddingBottom: '2vh',
			paddingLeft: '2vw',
			paddingRight: '2vw',
			marginTop: '2vh',
			marginLeft: '75%',
			cursor: 'pointer',
			alignItems: 'center',
			float: 'right'		
		
		}
		
		},

		sideDrawer: {

			color: 'white'

		},
			
		margin: {
		
		margin: theme.spacing(2),
		
		}		
			
		
		
	}));

	const classes = useStyle();	
	
	 /* <ChainId />
        <Account />
        <Balance /> */




  return (
    <>
    <AppBar style={{display: 'flex', flexDirection: 'row', backgroundImage: 'url(https://i.postimg.cc/yYP2y169/header.png)'}}>
	  
	  <Box style={{ margin: '1rem', textAlign: 'right', float: 'right' }}>{active ? <Badge color="primary" className={classes.margin} variant="dot"><AccountBalanceWalletIcon fontSize='large' /></Badge> : error ? <Badge color="error" className={classes.margin} variant="dot"><AccountBalanceWalletIcon fontSize='large' /></Badge> : <AccountBalanceWalletIcon fontSize='large' />}</Box>
      <Box className={classes.wallet} >
		{active ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : <SideDrawer className={classes.sideDrawer}><Typography style={{color: 'white', alignSelf: 'center'}} >Connect</Typography></SideDrawer>}
	  </Box>			
	  	
	 
	 </AppBar> 
    </>
  )
}


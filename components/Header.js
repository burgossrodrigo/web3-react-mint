import React from 'react'; 
import { useWeb3React } from '@web3-react/core'
import { AppBar, Badge, Box, IconButton } from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SideDrawer from './SideDrawer';



export default function Header() {
  const { active, error } = useWeb3React();
  const { account } = useWeb3React();
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
			marginTop: '2vh',
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
    <AppBar style={{display: 'flex', flexGrow: '1', flexDirection: 'row', height: '12vh'}}>
	  <SideDrawer>
	  	<IconButton>
			  {active ? <Badge color="primary" className={classes.margin} variant="dot"><AccountBalanceWalletIcon fontSize='large' color="secundary" /></Badge> : error ? <Badge color="error" className={classes.margin} variant="dot"><AccountBalanceWalletIcon color="secundary" fontSize='large' /></Badge> : <AccountBalanceWalletIcon fontSize='large' color="secundary" />}
		</IconButton>
	  </SideDrawer>
	  <Typography variant='h5' style={{position: 'relative', marginLeft: '75%', height: 'min-content', border: '1px solid', borderRadius: '10px', padding: '0.3em', marginTop: '2vh'}} >
		{active ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'No wallet connected'}
	  </Typography>			
	</AppBar> 
    </>
  )
}


import React, { useState } from 'react'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import Navigation from '../Components/Navigation'
import Header from '../Components/Header'
import ChainId from '../Components/ChainId'
import Account from '../Components/Account'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Container} from '@material-ui/core'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import active  from '../Components/Header';
import SideDrawer from '../Components/SideDrawer';


import { useEagerConnect, useInactiveListener } from '../hooks'
import {
  injected,
  network,
  walletconnect,
  walletlink,
  ledger,
  trezor,
  lattice,
  frame,
  authereum,
  fortmatic,
  magic,
  portis,
  torus
} from '../connectors'
import { Spinner } from '../components/Spinner'
import { Grid } from '@material-ui/core'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}



export default function() {

  const { active, account } = useWeb3React();

  const useStyle = makeStyles((theme) => ({

    mainImage:{
  
      marginTop: '50vh'
  
    },
    
    form:{

      [theme.breakpoints.between('sm', 'xl')]:{

        backgroundColoer: 'black'

      },
      [theme.breakpoints.only('xs')]:{}


    },

    mintButton: {

      [theme.breakpoints.between('sm', 'xl')]:{

          marginTop: '25vw',

      },
      [theme.breakpoints.only('xs')]:{}


    }    


  }));
  
  const classes = useStyle();
  console.log(active);

  return (<>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <Container maxWidth="md">  
      <Grid container spacing={3} style={{width: '80%', marginLeft: '5%', marginTop: '15vh'}}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>

          <Button variant="contained" size="large" color="primary" className={classes.mintButton}>
              <Typography >
                Mint
              </Typography>
          </Button>
        </Grid>
      </Grid>
      </Container>
    </Web3ReactProvider>

      


    
    
  </>)
}











import React, { useState } from 'react'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
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
import { CardContent, CardActions, Card, Button } from '@material-ui/core'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

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

  const useStyle = makeStyles((theme) => ({

    mainImage:{
  
      marginTop: '50vh'
  
    }  
  
  }));
  
  const classes = useStyle();

  return (<>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
    </Web3ReactProvider>
    <Grid container spacing={3} style={{width: '80%', marginLeft: '5%'}}>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
      <img style={{marginTop: '20vh'}} width={'auto'} height={'auto'} src='https://i.postimg.cc/GmmVMW9f/game-title.png' />  
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
        <Grid container spacing={3} style={{ marginLeft: '10vw'}}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginTop: '15vh'}}>
            <Card style={{marginTop: '20vh'}}>
              <CardContent style={{height: '10vh'}}><DoneOutlineIcon style={{color: 'green'}}/></CardContent>
              <CardActions>
                <Button size='large' style={{backgroundColor: 'brown', color: 'white', width:'30%', left:'35%'}}>Free</Button>
              </CardActions>
              </Card> 
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginTop: '15vh'}}>
          <Card style={{marginTop: '20vh'}}> 
            <CardContent style={{height: '10vh'}}></CardContent>
            <CardActions>
              <Button size='large' style={{backgroundColor: 'brown', color: 'white', width:'50%', left:'25%'}}>5 Tokens</Button>
            </CardActions>
          </Card>
          </Grid>   
        </Grid> 
      </Grid>
    </Grid>
      


    
    
  </>)
}











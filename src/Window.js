import React, { Component } from "react";
import {Box, Grid} from '@material-ui/core'
import './style.css';
import AppBar from '@material-ui/core/AppBar'
import Button from 'react'
import {Toolbar} from '@material-ui/core';
import { sizing } from '@material-ui/system';
import{ Link,Route, Router} from 'react-router-dom';
import Addbook from './Addbook';
import {Divider,List,Drawer,ListItem,ListItemText} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { makeStyles ,Topology } from '@material-ui/core/styles';
import ButtonToolbar from 'react';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  // }, appBar: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },

  // },content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },
}}));
function Window () {
  const classes = useStyles();
  return( 
    <div>
       <div className={classes.root}>
    
         <AppBar position="fixed">
              <Typography variant="h6" noWrap >
              <Box textAlign='center' color='orange' padding='50' >
                     LIBRARY APP
               </Box> 
             </Typography>
        </AppBar>
        </div>
     <Toolbar className={classes.root} >
     <div className="window"> 
        <div className="formate">       
          <Link to="/AddBook">
        <button  style={{color: 'red' , padding: 10 ,float:'left' , fontSize:20}} >
              Add Book  
         </button>
          </Link>
          {/* <Route path="/AddBook" component={Addbook} />  */}
         <Grid 
         justify='space-between'
      container
       spacing={0} >
        </Grid>
          <button 
       style={{color: 'red', padding: 10 ,float:'left' , fontSize:20}}>
          Edit Book
          </button> 
      <Grid 
         justify='space-between'
      container
        spacing={0}        >   
       </Grid> 
           <button   
           style={{ color: 'green', padding: 10 , fontSize:20 ,float:'left'}}>
         List All Book
            </button> 
            </div>
        </div>
        <Route path="/AddBook" component={Addbook} />
     </Toolbar>
      
     </div>
     ); 
    }

export default Window;
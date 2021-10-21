import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalBoxs from '../component/modal/modal'
import { reduserDtae } from '../reduser'
import { RoteItemreduser } from '../reduser/item'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { dataType } from '../action/model/statemodel'
import { DeleteItem, SetItem } from '../action'
import ModalEdit from '../component/modal-edit/modaledit'

const Home: NextPage = () => {
  const item = useSelector(RoteItemreduser);
  const data = useSelector(reduserDtae);
  const [edit, setedit] = useState<Boolean>(false);
  const dispach = useDispatch();
  const handelDelete = (item: dataType) => {
    dispach(DeleteItem(item))
  }
  const handeleEdit = (item: dataType) => {
    debugger

    dispach(SetItem(item));
  }
  return (
    <div className={styles.container}>
      <ModalBoxs />
      {data.map((item, index) => {
        return (
          <Grid key={item.id} container
            direction="row"
            justifyContent="center"
            alignItems="center" spacing={2}>
            <Grid item xs={12} md={2}>
              <Box>
                <Box sx={{ textAlign: 'center', m: 1 }}><h3>firstname</h3></Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{item.firstName}</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box>
                <Box sx={{ textAlign: 'center', m: 1 }}><h3>lastname</h3></Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{item.lastName}</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box>
                <Box sx={{ textAlign: 'center', m: 1 }}><h3>age</h3></Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{item.age}</Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box>
                <Box sx={{ textAlign: 'center', m: 1 }}><h3>phonenumber</h3></Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{item.phoneNumber}</Box>
              </Box>
            </Grid>
            <Grid sx={{ display: 'flex', gap: 1 }} item xs={12} md={2} >
              <Button onClick={() => handelDelete(item)} variant="contained">Delete</Button>
              <Box onClick={() => handeleEdit(item)} > <ModalEdit /> </Box>
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

export default Home

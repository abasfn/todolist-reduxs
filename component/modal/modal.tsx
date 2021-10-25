import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../../action';
import { reduserDtae } from '../../reduser';
import { dataType } from '../../model/statemodel';

type ModalBoxsType = {
    ModatTitle?: string;
    paragraph?: string;
}
const ModalBoxs = (props: ModalBoxsType) => {

    const reducerData = useSelector(reduserDtae);

    const dispach = useDispatch();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<dataType>();

    const onSubmit = (data: dataType) => {
        dispach(AddItem(data));
        reset();
    }
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained">Add</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {props.ModatTitle}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {props.paragraph}
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box>
                                <Box mt={2}>
                                    <TextField {...register('firstName', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'firstName'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField {...register('lastName', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'lastName'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField   {...register('age', { required: true, maxLength: 3 })} sx={{ width: 1 }} type='number' id="standard-basic" label={'age'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField    {...register('phoneNumber', { required: true, maxLength: 11 })} type='number' sx={{ width: 1 }} id="standard-basic" label={'phonenumber'} variant="standard" />
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper' }}>
                                <Box sx={{ flexGrow: 1 }}> <Button onClick={handleClose} variant="contained">Close</Button></Box>
                                <Box><Button onClick={handleClose} type='submit' variant="contained">Add</Button></Box>
                            </Box>
                        </form>
                    </Box>
                </Fade>
            </Modal >
        </div >
    );
};

export default ModalBoxs;
import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { EditItem } from '../../action';
import { RoteItemreduser } from '../../reduser/item';
import { dataType } from '../../model/statemodel';

type ModalEditType = {
    ModatTitle?: string;
    paragraph?: string;
    onClick?: () => void;
}
const ModalEdit = (props: ModalEditType) => {
    const item = useSelector(RoteItemreduser);
    const dispach = useDispatch();
    type ForemValue = {
        firstName: string,
        lastName: string,
        age: string,
        phoneNumber: string,
    }

    // debugger
    // const defultvalue: ForemValue = {
    //     firstName: item.firstName,
    //     lastName: item.lastName,
    //     age: item.age,
    //     phoneNumber: item.phoneNumber,
    // }
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<ForemValue>();
    const onSubmit = (data: dataType) => {
        debugger
        dispach(EditItem(item.index, data));
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
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen} variant="contained">Edit</Button>
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
                            -{JSON.stringify(item)}-
                            <Box>
                                <Box mt={2}>
                                    <TextField placeholder={item.firstName} {...register('firstName', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'firstname'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField placeholder={item.lastName} {...register('lastName', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'lastname'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField placeholder={item.age}  {...register('age', { required: true, maxLength: 3 })} sx={{ width: 1 }} type='number' id="standard-basic" label={'age'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField placeholder={item.phoneNumber}   {...register('phoneNumber', { required: true, maxLength: 11 })} type='number' sx={{ width: 1 }} id="standard-basic" label={'phonenumber'} variant="standard" />
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

export default ModalEdit;
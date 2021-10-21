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
import { EditItem } from '../../action';
import { RoteItemreduser } from '../../reduser/item';
import { dataType } from '../../action/model/statemodel';

type ModalEditType = {
    ModatTitle?: string;
    paragraph?: string;
    onClick?: () => void;
}
const ModalEdit = (props: ModalEditType) => {
    const item = useSelector(RoteItemreduser);
    console.log(item);

    const dispach = useDispatch();

    type ForemValue = {
        firstName: string,
        lastName: string,
        age: number,
        phoneNumber: number,
    }
    // debugger
    // const defultvalue: ForemValue = {
    //     firstName: item.firstName,
    //     lastName: item.lastName,
    //     age: item.age,
    //     phoneNumber: item.phoneNumber,
    // }
    debugger
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ForemValue>()
    const onSubmit = () => {
        // debugger
        dispach(EditItem(item))
        console.log(item);
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
                            <Box>
                                <Box mt={2}>
                                    <TextField defaultValue={item?.firstName} {...register('firstName', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'firstname'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField defaultValue={item?.lastName} {...register('lastName', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'lastname'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField defaultValue={item?.age}  {...register('age', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'age'} variant="standard" />
                                </Box>
                                <Box mt={2}>
                                    <TextField defaultValue={item?.phoneNumber}  {...register('phoneNumber', { required: true })} sx={{ width: 1 }} id="standard-basic" label={'phonenumber'} variant="standard" />
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
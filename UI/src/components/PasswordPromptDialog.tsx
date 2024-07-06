import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';

const PasswordPromptDialog = ({ open, onClose, onConfirm }: any) => {
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);

    useEffect(() => {
        if (open && passwordRef && passwordRef.current) {
            (passwordRef.current as HTMLInputElement).focus();
        }

    }, [open]);

    const handleConfirm = () => {
        onConfirm(password);
        setPassword('');
    };

    function onKeyDown(e: any): void {
        if(e.key === "Enter"){
            handleConfirm();
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Enter Password</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter the password to access the Manage Students.
                </DialogContentText>
                <TextField
                    autoFocus
                    inputRef={passwordRef}
                    margin="dense"
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onKeyDown={(e) => onKeyDown(e)}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleConfirm} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PasswordPromptDialog;

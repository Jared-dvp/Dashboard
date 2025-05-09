import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

function Modal({ title, open, onClose, children, actions }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle className="flex justify-between items-center">
        <span>{title}</span>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers className="py-4">
        {children}
      </DialogContent>
      {actions && <DialogActions className="px-6 pb-4">{actions}</DialogActions>}
    </Dialog>
  );
}

export default Modal;

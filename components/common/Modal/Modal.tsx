import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

interface IModal {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = ({
  open,
  title,
  description,
  content,
  onClose,
  footer,
}: IModal) => {
  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        {title ||
          (description && (
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>
          ))}
        {content}
        <DialogFooter>
          {footer && (
            <DialogClose asChild>
              <Button> Close </Button>
            </DialogClose>
          )}
          {footer}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

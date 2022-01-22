import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren<any> {
  triggerText: string;
  modalTitle?: string;
  triggerTitle?: string;
}

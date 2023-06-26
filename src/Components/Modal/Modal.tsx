import { createPortal } from "react-dom";
import { Button } from "../Button/Button";
import { ButtonProps } from "../Button/type";

interface ModalProps {
  open: boolean;
  closeable: boolean;
  onClose: () => void;
  mask: boolean;
  maskCloseable: boolean;
  saveText: string;
  cancelText: string;
  saveButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  onSave: () => void;
  onCancel: () => void;
  Title: React.ReactNode;
  Footer: React.ReactNode;
  children: React.ReactNode;
}
function Modal(props: Partial<Readonly<ModalProps>>) {
  const {
    open,
    closeable = true,
    onClose,
    onCancel,
    mask = true,
    maskCloseable = true,
    saveText = "save",
    cancelText = "Cancel",
    saveButtonProps,
    cancelButtonProps,
    onSave,
    Title = "Modal Title",
    Footer,
    children,
  } = props;

  function handleSave() {
    onSave?.();
  }
  function handleCancel() {
    onCancel?.();
  }

  function handleClose() {
    onClose?.();
    
  }

  function handleMaskClose() {
    if (!maskCloseable) {
      return;
    }
    onClose?.();
    onCancel?.();
    return;
  }

  const SaveButton = (
    <Button
      {...saveButtonProps}
      onClick={handleSave}
      className="yad-modal-save-button"
    >
      {saveText}
    </Button>
  );
  const CancelButton = (
    <Button {...cancelButtonProps} onClick={handleCancel}>
      {cancelText}
    </Button>
  );

  const FooterArea = (
    <div className="yad-modal-footer">
      {Footer ? (
        Footer
      ) : (
        <div className="yad-flex-1">
          {CancelButton}
          {SaveButton}
        </div>
      )}
    </div>
  );

  const Header = (
    <div className="yad-modal-header">
      {Title}
      {closeable ? (
        <Button onClick={handleClose} className="yad-modal-close-button">
          X
        </Button>
      ) : null}
    </div>
  );

  const Body = <div className="yad-modal-body">{children}</div>;

  const Mask = <div className="yad-mask" onClick={handleMaskClose} />;
  return (
    open &&
    createPortal(
      <div className="yad-modal-root">
        {mask ? Mask : null}
        <div
          className="yad-modal-warp"
          style={{ display: open ? "flex" : "none" }}
        >
          {Header}
          {Body}
          {FooterArea}
        </div>
      </div>,
      document.body
    )
  );
}

export { Modal };

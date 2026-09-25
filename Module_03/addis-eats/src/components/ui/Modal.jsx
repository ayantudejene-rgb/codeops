import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export default function Modal({ children, onClose, labelledBy }) {
  const panelRef = useRef(null);
  const previousFocus = useRef(null);

  // Remember where focus was, then move focus into the modal
  useEffect(() => {
    previousFocus.current = document.activeElement;
    if (panelRef.current) {
      const focusable = panelRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      (focusable || panelRef.current).focus();
    }
    return () => {
      // Restore focus on unmount
      if (previousFocus.current) previousFocus.current.focus();
    };
  }, []);

  // Escape closes; Tab is trapped inside the panel
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  labelledBy: PropTypes.string,
};
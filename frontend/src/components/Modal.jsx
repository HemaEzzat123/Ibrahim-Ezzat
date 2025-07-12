import React from "react";

export default function Modal({ isOpen, onClose, imgSrc, alt }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-all"
      onClick={onClose}
    >
      <div
        className="relative max-w-full max-h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-2xl sm:text-3xl font-bold bg-black bg-opacity-40 rounded-full px-2 sm:px-3 py-1 hover:bg-opacity-70 transition"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={imgSrc}
          alt={alt || "Enlarged"}
          className="rounded-lg shadow-2xl max-h-[80vh] max-w-[95vw] sm:max-w-[90vw] object-contain"
        />
      </div>
    </div>
  );
}

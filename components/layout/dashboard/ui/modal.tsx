interface LoanModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const LoanModal = ({ isOpen, onClose, children }: LoanModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-50/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="rounded-lg sm:p-6 p-3 lg:w-[800px]">
        <button
          onClick={onClose}
          className="absolute top-20 sm:top-20 right-8 md:right-[10%] z-100 text-gray-500 md:font-bold hover:text-gray-600"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="mb-3">{children}</div>
      </div>
    </div>
  );
};

interface ModalProps {
	show: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, show }) => {
	return show ? (
		<>
			<div className="bg-black opacity-20 absolute h-screen w-screen top-0 left-0 z-10" />
			<div className="center-absolute z-20">{children}</div>
		</>
	) : (
		<></>
	);
};

export default Modal;

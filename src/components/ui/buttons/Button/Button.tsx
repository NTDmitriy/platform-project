'use client'

import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
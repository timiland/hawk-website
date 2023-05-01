import clsx from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';
import ILink from '../../../types/ILink';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	readonly link?: ILink;
	readonly secondary?: boolean;
	readonly linkCallback?: () => void;
}

const Button = ({ children, link, secondary, linkCallback, ...buttonProps }: IButton) => {
	const { className, disabled } = buttonProps;
	const buttonClasses = clsx(
		secondary ? 'py-2 px-5 border border-wisdom' : 'py-4 px-6 bg-pinpoint',
		className
	);

	return link?.url && (link?.title || children) && !disabled ? (
		<Link href={link.url.url} className={buttonClasses} onClick={() => linkCallback?.()}>
			{children || link?.title}
		</Link>
	) : (
		<button {...buttonProps} className={buttonClasses} disabled={disabled}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	link: {
		name: '',
		url: '',
		target: '',
		linkIcon: '',
	},
	secondary: false,
	linkCallback: () => null,
};

export default Button;

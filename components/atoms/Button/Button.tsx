import clsx from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';
import ILink from '../../../models/ILink';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly link?: ILink;
  readonly borderColour?: string;
  readonly secondary?: boolean;
  readonly linkCallback?: () => void;
  readonly colour: string;
  readonly arrow?: boolean;
}

const Wrapper = ({ colour, children, secondary }) => {
  return (
    <>
      <div className="py-3 px-5 select-none">{children}</div>
      <div
        className={clsx(
          secondary ? 'opacity-30 hover:opacity-100' : 'text-white-floral',
          'absolute inset-0 h-full border-2 rounded-full select-none'
        )}
        style={{ borderColor: colour }}
      />
    </>
  );
};

const Button = ({
  children,
  colour,
  link,
  secondary,
  linkCallback,
  ...buttonProps
}: IButton) => {
  const { className, disabled } = buttonProps;
  const buttonClasses = clsx(
    {
      'opacity-25': disabled,
    },
    'label relative box-border bg-none rounded-full min-h-min select-none',
    className
  );

  const wrapperProps = { colour, secondary };

  return link?.url && (link?.title || children) && !disabled ? (
    <Link
      href={link.url}
      className={buttonClasses}
      target={link.target}
      onClick={() => linkCallback?.()}
    >
      <Wrapper {...wrapperProps}>{children || link?.title}</Wrapper>
    </Link>
  ) : (
    <button {...buttonProps} className={buttonClasses} disabled={disabled}>
      <Wrapper {...wrapperProps}>{children}</Wrapper>
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

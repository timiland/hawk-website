import clsx from 'clsx';
import { FC } from 'react';
import IcoMoon from 'react-icomoon';
import { IIcon } from '../../../types/IIcon';
import iconSet from './selection.json';

const Icon: FC<IIcon> = ({
	className = '',
	color = '',
	colorClassName = 'text-black-100',
	name = 'check',
	size = '1.5rem',
}: IIcon) => {
	const classes = clsx(className, colorClassName, name);

	return <IcoMoon icon={name} size={size} color={color} iconSet={iconSet} className={classes} />;
};

export default Icon;

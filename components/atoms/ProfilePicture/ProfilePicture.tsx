import Image from 'next/image';
import IAsset from '../../../types/IAsset';

export interface IProfilePicture {
	readonly initials: string;
	readonly image: IAsset;
	readonly colour: string;
}

const ProfilePicture = ({ image, colour, initials = '' }: IProfilePicture) => (
	<div
		className="bg-red text-white-floral w-full rounded-full p-[25px]"
		style={{ backgroundColor: colour }}
	>
		<div className="relative aspect-square h-auto w-full">
			{image?.filename ? (
				<Image
					priority
					alt={image?.alt}
					src={image?.filename}
					fill
					className="h-auto w-full rounded-full object-cover"
				/>
			) : (
				<div className="bg-black-night flex h-full w-full items-center justify-center rounded-full">
					<h1 className="logo">{initials}</h1>
				</div>
			)}
		</div>
	</div>
);

export default ProfilePicture;

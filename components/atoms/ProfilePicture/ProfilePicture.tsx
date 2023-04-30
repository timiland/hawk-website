import Image from 'next/image';
import IAsset from '../../../models/IAsset';

export interface IProfilePicture {
  readonly initials: string;
  readonly image: IAsset;
  readonly colour: string;
}

const ProfilePicture = ({ image, colour, initials = '' }: IProfilePicture) => (
  <div
    className="w-full bg-red rounded-full p-[25px] text-white-floral"
    style={{ backgroundColor: colour }}
  >
    <div className="relative w-full h-auto aspect-square">
      {image?.filename ? (
        <Image
          priority
          alt={image?.alt}
          src={image?.filename}
          fill
          className="rounded-full w-full h-auto object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black-night rounded-full">
          <h1 className="logo">{initials}</h1>
        </div>
      )}
    </div>
  </div>
);

export default ProfilePicture;

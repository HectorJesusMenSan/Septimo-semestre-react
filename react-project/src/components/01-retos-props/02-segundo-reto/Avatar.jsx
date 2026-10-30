import { getImageUrl } from '../../../utils/getImageUrl.js';


export default function Avatar({person, size}){
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
    return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
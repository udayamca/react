import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

interface EmojisProps {
  rating: number;
}

const Emojis = ({ rating }: EmojisProps) => {
  if (rating === 0) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbs up", boxSize: "25px" },
    5: { src: bullsEye, alt: "bulls eye", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emojis;

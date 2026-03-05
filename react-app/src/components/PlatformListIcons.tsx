import type { Platform } from "@/hooks/useGames";
import { Icon, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import type { IconType } from "react-icons";

interface PlatformListIconsProps {
  platforms: Platform[];
}

const PlatformListIcons = ({ platforms }: PlatformListIconsProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    apple: FaApple,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((p) => (
        <Icon key={p.id} as={iconMap[p.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformListIcons;

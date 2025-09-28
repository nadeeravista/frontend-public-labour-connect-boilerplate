import React from "react";
import Image from "next/image";

interface SocialIconProps {
  className?: string;
}

export const FacebookIcon: React.FC<SocialIconProps> = ({
  className = "h-3 w-3",
}) => (
  <Image
    src="/images/svg/facebook.svg"
    alt="Facebook"
    width={24}
    height={24}
    className={className}
  />
);

export const TwitterIcon: React.FC<SocialIconProps> = ({
  className = "h-3 w-3",
}) => (
  <Image
    src="/images/svg/twitter.svg"
    alt="Twitter"
    width={24}
    height={24}
    className={className}
  />
);

export const InstagramIcon: React.FC<SocialIconProps> = ({
  className = "h-3 w-3",
}) => (
  <Image
    src="/images/svg/instagram.svg"
    alt="Instagram"
    width={24}
    height={24}
    className={className}
  />
);

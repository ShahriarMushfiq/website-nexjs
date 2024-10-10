import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { FaTwitter } from "react-icons/fa";

export interface TestimonialProps extends CardProps {
  name: string;
  description: React.ReactNode;
  avatar: string;
  href?: string;
  children?: React.ReactNode;
  avatarSize?: {
    base?: "sm" | "md" | "lg" | "xl",
    sm?: "sm" | "md" | "lg" | "xl",
    md?: "sm" | "md" | "lg" | "xl",
    lg?: "sm" | "md" | "lg" | "xl",
    xl?: "sm" | "md" | "lg" | "xl",
  } | string;
}

export const Testimonial = ({
  name,
  description,
  avatar,
  href,
  children,
  avatarSize = "sm",
  ...rest
}: TestimonialProps) => {
  return (
    <Card position="relative" {...rest}>
      <CardHeader display="flex" flexDirection="row" alignItems="center">
        <Avatar name={name} src={avatar} size={avatarSize} bg="transparent" />
        <Stack spacing="1" ms="4">
          <Heading size="sm">{name}</Heading>
          <Text color="muted" size="xs">
            {description}
          </Text>
        </Stack>
      </CardHeader>
      <CardBody>
        {children}

        {href && (
          <Link href={href} position="absolute" top="4" right="4">
            <FaTwitter />
          </Link>
        )}
      </CardBody>
    </Card>
  );
};

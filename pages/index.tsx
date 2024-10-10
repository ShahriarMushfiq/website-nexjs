import * as React from "react";
import type { NextPage } from "next";
import Image from "next/legacy/image";
import {
  Container,
  Box,
  Stack,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
  SimpleGrid,
  GridItem,
  useInterval,
  HStack
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import {
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import { Typewriter } from "components/typewriter";
import siteConfig from 'data/config'

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title={siteConfig.seo?.title}
        description={siteConfig.seo?.description}
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 0, sm: 20, lg: 60 }} pb={{ base: 0, lg: 40 }}>
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            px="0"
            justifyContent={{ base: "center", lg: "flex-start" }}
            title={
              <FallInPlace
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              >
                Empowering <Br /> Business With <Br />
                <Typewriter text={siteConfig.seo?.title ?? ""} />
              </FallInPlace>
            }
            description={
              <FallInPlace
                delay={0.4}
                fontWeight="medium"
              >
                in &mdash; Digital Era
              </FallInPlace>
            }
          ></Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Container maxW="container.xl" pt={{ base: 0, lg: 40 }}>
        <Stack direction={{ base: "row" }} alignItems="center">
          <FallInPlace delay={0.7} width="100%">
            <Text
              as="h2"
              fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
              color="muted"
              textAlign="center"
              sx={{ textTransform: "uppercase", letterSpacing: "10px" }}
              mb="8">
              our vision is guided by a powerful mission
            </Text>
          </FallInPlace>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 2, 2, 4]}
        iconSize={5}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Accessible",
            icon: FiSmile,
            description: "We aim to create an inclusive technological ecosystem where all components are accessible to everyone here.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Standard",
            icon: FiThumbsUp,
            description: "Our major commitment is to adhere to ensuring international standards for all.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Technology",
            icon: FiSliders,
            description: "There is no compromise to pioneer advanced technologies that enhance connectivity and create sustainable growth for businesses of all sizes.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Solution",
            icon: FiGrid,
            description: "We are driven to spearhead the creation of groundbreaking IT solutions that empower brands to flourish in a dynamic digital landscape.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const AutoSlideHighlightsTestimonialItem = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useInterval(() => {
    setCurrentIndex((currentIndex + 1) % testimonials.founderComments.length);
  }, 5000); // 5 seconds

  return (
    <SimpleGrid columns={1} spacing={8}>
      {testimonials.founderComments.map((testimonial, index) => (
        <GridItem key={index} display={index === currentIndex ? 'block' : 'none'}>
          <HighlightsTestimonialItem
            name={testimonial.name}
            description={testimonial.description}
            avatar={testimonial.avatar}
            gradient={["primary.300", "secondary.500"]}
          >
            {testimonial.text}
          </HighlightsTestimonialItem>
          <HStack justifyContent="center" gap={8} padding={4}>
            {testimonials.founderComments.map((testimonial, index) => (
              <Box key={index} w={3} h={3} bg={index === currentIndex ? 'primary.600' : 'gray.300'} borderRadius="full" />
            ))}
          </HStack>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <AutoSlideHighlightsTestimonialItem />
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We take care of all your basic needs, so you can start building functionality that makes your idea unique.
        </Text>
        <Wrap mt="8">
          {[
            "Strategic Collaborator",
            "Pioneer Beneficiary",
            "Key Stakeholder",
            "Authentication",
            "Unity",
            "Exploratory Associate",
            "Mutual Visionary",
            "Development Ally",
            "Synergistic Partner",
            "Skilled Associate",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
      <HighlightsItem colSpan={[1, null, 2]} title="Our Endeavor">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            At <strong>Cloud Vortex Innovation</strong>, the core mission is to revolutionize businesses through transformative IT solutions that leverage cutting-edge technologies that empower brands to scale, innovate, and thrive in a hyper-connected world.
          </Text>

          {/* <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex> */}
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Core Foundation">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to reinvent the wheel, and neither should you. Our approach is to work on proven frameworks that are the most unique in the scene on top of them.
        </Text>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Components.",
          icon: FiBox,
          description:
            "All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.",
          variant: "inline",
        },
        {
          title: "Starterkits.",
          icon: FiLock,
          description:
            "Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.",
          variant: "inline",
        },
        {
          title: "Documentation.",
          icon: FiSearch,
          description:
            "Extensively documented, including storybooks, best practices, use-cases and examples.",
          variant: "inline",
        },
        {
          title: "Onboarding.",
          icon: FiUserPlus,
          description:
            "Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.",
          variant: "inline",
        },
        {
          title: "Feature flags.",
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: "inline",
        },
        {
          title: "Upselling.",
          icon: FiTrendingUp,
          description:
            "Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.",
          variant: "inline",
        },
        {
          title: "Themes.",
          icon: FiToggleLeft,
          description:
            "Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
          variant: "inline",
        },
        {
          title: "Generators.",
          icon: FiTerminal,
          description:
            "Extend your design system while maintaininig code quality and consistency with built-in generators.",
          variant: "inline",
        },
        {
          title: "Monorepo.",
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{" "}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}

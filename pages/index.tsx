/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
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

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import { color } from "framer-motion";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Saas U Landingspage"
        description="Free SaaS landingspage starter kit"
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
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Turn Client Concepts seamlessly 
                <Br /> into maintainable code 
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <span><strong style={{ fontFamily: "sans-serif",color:"white"}}>Pairnode</strong></span> is an <Em> LLM and AI powered intelligence platform</Em>
                <Br /> that turns client visions into detailed technical roadmaps,tasks, and more,  <Br />{" "}
                helping involved stakeholders to collaborate and deliver faster.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <h1 style={{ fontSize: "1rem" ,fontFamily:"sans-serif"}}>Convert client ideas into structured technical assignments and roadmaps in minutes, ensuring your projects are always on track.</h1>
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="#">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
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

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Clear Specifications",
            icon: FiSmile,
            description: "Turn client ideas into detailed, easy-to-understand project plans with just a few clicks.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Team Collaboration",
            icon: FiSliders,
            description:
              "Work together with your team and other stakeholders in real-time, all in one place. Assign tasks, share updates, and keep everyone in sync.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Time-Saving",
            icon: FiGrid,
            description:
              "Quickly convert ideas into actionable tasks and timelines, so you can spend less time planning and more time building.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Adaptive Planning",
            icon: FiThumbsUp,
            description:
              "Our LLM and NLP algorithms optimizes timelines and deadlines based on your team’s capacity, ensuring projects are completed efficiently.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core Capabilities">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Kickstart your project effortlessly <Em> Our platform helps you </Em>
            transform client ideas into detailed, actionable plans in no time, so you can focus on building without the headache of manual setup.
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
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
        We’ve done the heavy lifting so you don’t have to. 
        Our platform ensures your projects start on a solid foundation, saving you time and effort from day one.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Sandra Millik"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Pairnode transformed the way we manage projects. What used to take days now takes minutes, 
        freeing us to focus on what really matters—delivering results to our clients.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start Your Next Project with Ease"
      >
        <Text color="muted" fontSize="lg">
        We’ve taken care of all the essentials so you can start building immediately. 
        Let <strong style={{ fontWeight: "bold" ,color: "white"}}>Pairnode</strong> handle the logistics, so you can focus on creating something great.
        </Text>
        <Wrap mt="8">
          {[
            "Project Planning",
            "Task Management",
            "Team Collaboration",
            "Client Communication",
            "AI planning",
            "Flexible Workflows",
            "Effortless Setup",
            "Auto generated documentation",
            "onboarding",
            "User story mapping",
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
          Not your regular 
          <Br /> product management tool
        </Heading>
      }
      description={
        <>
          <strong>Pairnode</strong> provides all-in-one package for your next project from product discovery until product delivery.
          <Br />
          <br/>
          &quot;The days are over when clients were "breathing on your neck" with deadlines,reporting,demos and constant requirement changes &quot;
          <Br />
          <br />

        And it does not end there. As a PM you can track project progress,use our AI to analyze sentiment and team morale based on emails and messages,
        efficiently inform key stakeholders,automatically generate postmortems and documentation and integrate all
        related teams to the unified environment. <br /><br />We are aiming high to gamify the experience even help the executives to
        see who is working on and on what level
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Integrations.",
          icon: FiBox,
          description:
            "Integrate with your regular tools like Slack,Trello, Google Drive, Zoom and more. Pairnode takes care of all the data handling so you can focus on building.Gather all your data in one place.",
          variant: "inline",
        },
        {
          title: "Project scoping and planning",
          icon: FiLock,
          description:
            "adjust the project scope dynamically as new data or requirements are added. AI can suggest modifications to timelines, resources, or budgets based on historical data and project complexity.",
          variant: "inline",
        },
        {
          title: "Documentation and Guidlines generation",
          icon: FiSearch,
          description:
            "Add ecessary inputs as key words and the AI will generate documentation and guidelines for your project.Save your time for less redundant tasks",
          variant: "inline",
        },
        {
          title: "Enhanced Team Collaboration",
          icon: FiUserPlus,
          description:
            "AI can automatically generate summaries of meetings, highlighting key decisions, action items,postmortems and deadlines. This can be particularly useful for team members who couldn’t attend the meeting.",
          variant: "inline",
        },
        {
          title: "Product requirements generation",
          icon: FiFlag,
          description:
            "Generate product requirements based on your project requirements. The tool can suggest modifications to timelines, resources, or budgets based on historical data and project complexity.",
          variant: "inline",
        },
        {
          title: "Personalized Workflows and Task Management",
          icon: FiTrendingUp,
          description:
            "re-prioritize tasks dynamically as project conditions change, ensuring that the most critical tasks are always addressed first.Let AI to determine who suits best for the job.",
          variant: "inline",
        },
        {
          title: "Client Interaction and Engagement",
          icon: FiToggleLeft,
          description:
            "Allow clients to interact with and provide feedback on prototypes directly within the platform.With that in place, back and forth client interactions wil be minimized.",
          variant: "inline",
        },
        {
          title: "Gamification and Motivation",
          icon: FiTerminal,
          description:
            "Use gamification elements such as badges, leaderboards, and achievement tracking to motivate team members and increase engagement.",
          variant: "inline",
        },
        {
          title: "CI/CD-coming soon",
          icon: FiCode,
          description: (
            <>
              Manage your deployment process with our CI/CD tool.
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
        title: "Get waitlisted to use Pairnode's beta app! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}

/* eslint-disable react/no-unescaped-entities */
import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Pay once and get life-time access to our high quality components.',
  plans: [
    {
      id: 'oss',
      title: 'Pilot',
      description: 'Ideal for freelancers and small/mid size agencies',
      price: ` from 25.99$ ${'/per seat/' + 'month'}`,
      features: [
        {
          title: 'Project scoping and planning',
        },
        {
          title: 'Customer requirements converter',
        },
        {
          title: 'Limited Product analytics',
        },
        {
          title: 'Whiteboard',
        },
        {
          title: 'Task management and Roadmaps',
        },
        {
          title: '1 team workspace',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Premium (most popular)',
      description: 'Ideal for Seed stage startups and Web/design agencies',
      price: `from 49.99$ ${'/per seat/' + 'month'}`,
      isRecommended: true,
      features: [
        {
          title: 'Everything in Pilot plan plus',
        },
        {
          title: 'Customized reports and templates',
        },
        {
          title: 'All-in-one client dashboard',
        },
        {
          title: '3 team Workspaces',
        },
        {
          title: 'Integrations with other tools',
        },
        {
          title: 'Breakout chat rooms for meetings',
        },
        {
          title: 'Centralized Feedback and Response workflow',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
    {
      id: 'startup',
      title: 'Enterprise',
      description: 'Unlimited license for growing product teams and agencies.',
      price: (
        <HStack>
          {/* <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text> */}
          <Text>Let's Discuss</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Eveything in Pilot and Premium plan plus',
        },
        {
          title: 'AI-powered customer support assistant',
        },
        {
          title: 'Custom Contract & SLA',
        },
        {
          title: 'Premium Integrations',
        },
        {
          title: 'Security Audit & Compliance (SOC 2 Type 2 and GDPR)',
        },
        {
          title: 'Dedicated human Customer success manager',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license',
      },
    },
  ],
}

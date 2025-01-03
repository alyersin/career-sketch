"use client";

import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Divider,
} from "@chakra-ui/react";

export default function FAQ() {
  const faqItems = [
    {
      question: "How can I use this app for free?",
      answer:
        "You can start using this app for free by signing up. This allows you to create and edit your content using our templates. Additional features may require a subscription.",
    },
    {
      question: "Can I customize my templates?",
      answer:
        "Yes, you can fully customize your templates. Adjust the layout, fonts, colors, and sections to match your personal style and the requirements of the job you're applying for.",
    },
    {
      question: "How can I download my resume in PDF or Word?",
      answer:
        "Once your resume is complete, click on the download button and choose either PDF or Word format. Your file will be ready to save and send to potential employers.",
    },
    {
      question: "How do I cancel or downgrade my account?",
      answer:
        "To cancel or downgrade your account, go to your account settings and click on the subscription tab. From there, you can manage your current plan or switch to a lower-tier plan.",
    },
    {
      question: "Should I make a different CV for every job application?",
      answer:
        "Yes, it is recommended to tailor your CV for each job application. Highlight the skills and experiences that are most relevant to the specific job to increase your chances of getting noticed by recruiters.",
    },
    {
      question: "What should I include in my resume to make it stand out?",
      answer:
        "Include clear and concise bullet points, quantify your achievements, use action verbs, and tailor your resume to the job description. A professional design also helps catch the recruiter's eye.",
    },
  ];

  return (
    <Box maxWidth="800px" mx="auto" py={10} px={4}>
      <Heading as="h2" size="lg" textAlign="center" mb={6} color="gray.800">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle allowMultiple>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            border="none"
            _last={{ borderBottom: "none" }}
          >
            <h2>
              <AccordionButton
                _expanded={{ bg: "blue.50", color: "blue.800" }}
                py={4}
              >
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.600" fontSize="md">
              <Text>{item.answer}</Text>
            </AccordionPanel>
            {index < faqItems.length - 1 && <Divider borderColor="gray.300" />}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Textarea,
  Divider,
} from "@chakra-ui/react";

export default function Resume() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    location: "",
    email: "",
    phone: "",
    linkedIn: "",
    workExperiences: [
      { id: 1, title: "", company: "", dates: "", description: "" },
    ],
    educations: [{ id: 1, degree: "", institution: "", dates: "" }],
    digitalSkills: "",
    languages: [{ id: 1, language: "", proficiency: "" }],
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleWorkExperienceChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      workExperiences: prev.workExperiences.map((work) =>
        work.id === id ? { ...work, [field]: value } : work
      ),
    }));
  };

  const addWorkExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workExperiences: [
        ...prev.workExperiences,
        {
          id: prev.workExperiences.length + 1,
          title: "",
          company: "",
          dates: "",
          description: "",
        },
      ],
    }));
  };

  const handleEducationChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      educations: prev.educations.map((education) =>
        education.id === id ? { ...education, [field]: value } : education
      ),
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      educations: [
        ...prev.educations,
        {
          id: prev.educations.length + 1,
          degree: "",
          institution: "",
          dates: "",
        },
      ],
    }));
  };

  const handleLanguageChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.map((language) =>
        language.id === id ? { ...language, [field]: value } : language
      ),
    }));
  };

  const addLanguage = () => {
    setFormData((prev) => ({
      ...prev,
      languages: [
        ...prev.languages,
        { id: prev.languages.length + 1, language: "", proficiency: "" },
      ],
    }));
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/pages/login");
    }
  }, [status]);

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return null;
  }

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      height="100vh"
    >
      <Box
        width={{ base: "100%", md: "50%" }}
        px={4}
        py={8}
        borderRight="1px solid #E2E8F0"
        overflowY="auto"
      >
        <Heading textAlign="center" mb={6}>
          CV Builder
        </Heading>
        <VStack spacing={6} align="stretch">
          <Box>
            <Text fontWeight="bold" mb={1}>
              Full Name
            </Text>
            <Input
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
          </Box>
          <Box>
            <Text fontWeight="bold" mb={1}>
              Job Title
            </Text>
            <Input
              placeholder="Your Job Title"
              value={formData.jobTitle}
              onChange={(e) => handleInputChange("jobTitle", e.target.value)}
            />
          </Box>
          <Box>
            <Text fontWeight="bold" mb={1}>
              Location
            </Text>
            <Input
              placeholder="Your Location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
            />
          </Box>
          <Box>
            <Text fontWeight="bold" mb={1}>
              Email Address
            </Text>
            <Input
              placeholder="Your Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </Box>
          <Box>
            <Text fontWeight="bold" mb={1}>
              Phone Number
            </Text>
            <Input
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </Box>
          <Box>
            <Text fontWeight="bold" mb={1}>
              LinkedIn Profile
            </Text>
            <Input
              placeholder="Your LinkedIn Profile"
              value={formData.linkedIn}
              onChange={(e) => handleInputChange("linkedIn", e.target.value)}
            />
          </Box>
          <Divider />
          <Heading size="md">Work Experience</Heading>
          {formData.workExperiences.map((work) => (
            <Box key={work.id}>
              <Text fontWeight="bold" mb={1}>
                Job Title
              </Text>
              <Input
                placeholder="Job Title"
                value={work.title}
                onChange={(e) =>
                  handleWorkExperienceChange(work.id, "title", e.target.value)
                }
              />
              <Text fontWeight="bold" mb={1} mt={2}>
                Company
              </Text>
              <Input
                placeholder="Company Name"
                value={work.company}
                onChange={(e) =>
                  handleWorkExperienceChange(work.id, "company", e.target.value)
                }
              />
              <Text fontWeight="bold" mb={1} mt={2}>
                Dates
              </Text>
              <Input
                placeholder="Dates (e.g., Jan 2020 - Dec 2021)"
                value={work.dates}
                onChange={(e) =>
                  handleWorkExperienceChange(work.id, "dates", e.target.value)
                }
              />
              <Text fontWeight="bold" mb={1} mt={2}>
                Description
              </Text>
              <Textarea
                placeholder="Your Responsibilities and Achievements"
                value={work.description}
                onChange={(e) =>
                  handleWorkExperienceChange(
                    work.id,
                    "description",
                    e.target.value
                  )
                }
              />
            </Box>
          ))}
          <Button onClick={addWorkExperience}>Add Work Experience</Button>
          <Divider />
          <Heading size="md">Education</Heading>
          {formData.educations.map((education) => (
            <Box key={education.id}>
              <Text fontWeight="bold" mb={1}>
                Degree
              </Text>
              <Input
                placeholder="Degree"
                value={education.degree}
                onChange={(e) =>
                  handleEducationChange(education.id, "degree", e.target.value)
                }
              />
              <Text fontWeight="bold" mb={1} mt={2}>
                Institution
              </Text>
              <Input
                placeholder="Institution Name"
                value={education.institution}
                onChange={(e) =>
                  handleEducationChange(
                    education.id,
                    "institution",
                    e.target.value
                  )
                }
              />
              <Text fontWeight="bold" mb={1} mt={2}>
                Dates
              </Text>
              <Input
                placeholder="Dates (e.g., 2015 - 2019)"
                value={education.dates}
                onChange={(e) =>
                  handleEducationChange(education.id, "dates", e.target.value)
                }
              />
            </Box>
          ))}
          <Button onClick={addEducation}>Add Education</Button>
          <Divider />
          <Heading size="md">Digital Skills</Heading>
          <Textarea
            placeholder="List your digital skills (e.g., React.js, Node.js)"
            value={formData.digitalSkills}
            onChange={(e) => handleInputChange("digitalSkills", e.target.value)}
          />
        </VStack>
      </Box>
      <Box
        width={{ base: "100%", md: "50%" }}
        bg="#f7fafc"
        p={6}
        overflowY="auto"
      >
        <Heading>{formData.fullName || "Your Name"}</Heading>
        <Text>{formData.jobTitle || "Your Job Title"}</Text>
        <Text>{formData.location || "Location"}</Text>
        <Text>{formData.email || "Email Address"}</Text>
        <Text>{formData.phone || "Phone Number"}</Text>
        <Text>{formData.linkedIn || "LinkedIn Profile"}</Text>
        <Divider />
        <Heading size="md" mt={4}>
          Work Experience
        </Heading>
        {formData.workExperiences.map((work) => (
          <Box key={work.id} mb={3}>
            <Text fontWeight="bold">{work.title}</Text>
            <Text>{work.company}</Text>
            <Text>{work.dates}</Text>
            <Text>{work.description}</Text>
          </Box>
        ))}
        <Divider />
        <Heading size="md" mt={4}>
          Education
        </Heading>
        {formData.educations.map((education) => (
          <Box key={education.id} mb={3}>
            <Text fontWeight="bold">{education.degree}</Text>
            <Text>{education.institution}</Text>
            <Text>{education.dates}</Text>
          </Box>
        ))}
        <Divider />
        <Heading size="md" mt={4}>
          Digital Skills
        </Heading>
        <Text>{formData.digitalSkills || "Add your skills"}</Text>
      </Box>
    </Box>
  );
}

import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqData = [
  {
    question: 'Why should I use your services?',
    answer:
      "Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips."
  },
  {
    question: 'Is there customer support available?',
    answer:
      'Yes, we provide 24/7 customer support through chat, email, and phone to assist you anytime.'
  },
  {
    question: 'How do I get started with your services?',
    answer:
      'Just create an account, verify your details, and you can immediately begin using all our available features.'
  },
  {
    question: 'How can I update my account information?',
    answer:
      'You can update your account details anytime from your profile settings after logging in.'
  },
  {
    question: 'How secure are your services?',
    answer:
      'Our platform uses industry-standard encryption and secure data handling protocols to ensure your information is safe.'
  }
];

export default function FaqSection() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (index) => {
    setExpanded((prev) => (prev === index ? -1 : index));
  };

  return (
    <Box mt={8}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        FAQs
      </Typography>

      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={() => handleChange(index)}
          elevation={0}
          sx={{
            borderRadius: 2,
            mb: 1,
            border: '1px solid #eee',
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <RemoveIcon sx={{ fontSize: 20 }} />
              ) : (
                <AddIcon sx={{ fontSize: 20 }} />
              )
            }
          >
            <Typography fontWeight="600">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

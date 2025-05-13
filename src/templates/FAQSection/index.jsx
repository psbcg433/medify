import {
  Box,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  {
    question: "Why choose our medical for your family?",
    answer:
      "A detox helps cleanse your body of toxins and can improve overall health and energy levels.",
  },
  {
    question: "Why we are different from others?",
    answer:
      "It depends on your lifestyle, but many experts recommend a gentle detox every few months.",
  },
  {
    question: "Trusted & experience senior care & love",
    answer:
      "You should always consult a healthcare professional before starting a detox while on medication.",
  },
  {
    question: "How to get appointment for emergency cases?",
    answer:
      "You might experience temporary fatigue, headaches, or irritability as your body adjusts.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        padding: "2em",
      }}
    >
      <Container>
        <Typography
          variant="button"
          component="h2"
          sx={{
            color: theme.palette.primary.dark,
            textAlign: "center",
            fontSize:{xs:'12px',md:'16px'}
          }}
        >
          Get Your Answer
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: theme.palette.secondary.dark,
            textAlign: "center",
            fontSize:{xs:'1.4em',md:'3em'}
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container>
          <Grid item size={{xs:12,md:6}}>
            <Box
              component="img"
              src="/FAQ.png"
              alt="Patient Care Image"
              sx={{
                width: {xs:'100%',md:'90%'},
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            size={{xs:12,md:6}}
            sx={{
              display: "flex",
              justifyContent: {xs:"center",md:"flex-start"},
              alignItems: "center",
              padding: {md:'1em'},
            }}
          >
            <Box
              sx={{
                mx: "auto",
                height:'100%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              
              }}
            >
              {faqs.map((faq, index) => (
                <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  background: theme.palette.background.default,
                  padding: '1em',
                  boxShadow: 'none',
                  border: 'none',
                  '&:before': {
                    display: 'none' // removes the default divider line
                  }
                }}
              >
              
                  <AccordionSummary
                    expandIcon={
                      expanded === index ? (
                        <RemoveIcon
                          sx={{
                            color: theme.palette.primary.dark,
                          }}
                        />
                      ) : (
                        <AddIcon
                          sx={{
                            color: theme.palette.primary.dark,
                          }}
                        />
                      )
                    }
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        color: theme.palette.secondary.dark,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary">{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FAQSection;

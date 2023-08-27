import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { registrationPage } from "@/utils/constants";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import CardComp from "../../components/common/Card";
import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";

const RequirementsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const [trigger, setTrigger] = useState("0");

  const handleClick = (newTrigger: string) => {
    newTrigger === trigger ? setTrigger("0") : setTrigger(newTrigger);
  };

  return (
    <PageSection>
      {registrationPage.requirementsSection.map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <CardComp bg={theme.palette.orange.main}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              sx={{ width: "100%" }}
              subheader={
                <Typography
                  fontSize={{ xs: "5vw", md: "2.5vw" }}
                  width="100%"
                  textAlign="center"
                  color={theme.palette.brown.main}
                >
                  {t(item.title)}
                </Typography>
              }
            >
              {item.lists.map((list, listIndex) => (
                <React.Fragment
                  key={`registration square list number ${listIndex}`}
                >
                  <ListItemButton
                    sx={{ width: "100%" }}
                    onClick={() => handleClick(list.trigger)}
                  >
                    <Typography
                      fontSize={{
                        xs: "2vw",
                        md: "1.5vw",
                      }}
                      width="100%"
                    >
                      {t(list.title)}
                    </Typography>

                    {trigger === list.trigger ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse
                    in={trigger === list.trigger}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Stack spacing={2}>
                      {list.items.map((text, textIndex) => (
                        <React.Fragment
                          key={`registration square list item number ${textIndex}`}
                        >
                          <Typography
                            fontSize={{
                              xs: "2vw",
                              md: "1.2vw",
                            }}
                            width="80%"
                            sx={{
                              pl: 4,
                              color: theme.palette.basic.light,
                            }}
                          >
                            {`# ${t(text)}`}
                          </Typography>
                        </React.Fragment>
                      ))}
                    </Stack>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </CardComp>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default RequirementsSection;

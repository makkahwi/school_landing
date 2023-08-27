import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import {
  Stack,
  Typography,
  List,
  ListItemButton,
  Collapse,
} from "@mui/material";
import theme from "@/styles/theme";
import Square from "../common/Square";
import React, { useState } from "react";
import {} from "./styles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { registrationPage } from "@/utils/constants";

const RequirementsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const [trigger, setTrigger] = useState("0");

  const handleClick = (newTrigger: string) => {
    newTrigger === trigger ? setTrigger("0") : setTrigger(newTrigger);
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      p={3}
      pt={10}
      pb={10}
      spacing={5}
      width="100%"
    >
      {registrationPage.requirementsSection.map((item, index) => (
        <React.Fragment key={`registration square number ${index}`}>
          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { md: "50%" },
              padding: 3,
            }}
          >
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              sx={{ width: "100%" }}
              subheader={
                <Typography
                  fontSize={{ xs: "5vw", md: "2.5vw" }}
                  width="100%"
                  textAlign="center"
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
          </Square>
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default RequirementsSection;

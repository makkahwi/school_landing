import useTranslation from "@/hooks/useTranslation";
import Column from "./Column";
import Row from "./Row";
import { useRouter } from "next/router";
import Text from "./Text";
import theme from "@/styles/theme";

interface StaticListProps {
  items: {
    text: string;
    icon: JSX.Element;
  }[];
}

const StaticList = ({
  items,
  color = theme.palette.basic.light,
}: StaticListProps) => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Row>
      {items?.map(({ icon, text }, i) => (
        <Column lg={2} md={3} sm={4} xs={6} key={i}>
          <Text color={color} center>
            {icon}
          </Text>

          <Text color={color} center>
            {t(text)}
          </Text>
        </Column>
      ))}
    </Row>
  );
};

export default StaticList;

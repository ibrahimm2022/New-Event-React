import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Description, OverViewWrapper, Title } from "./Styled";
export default function Overview({ icon, title, des }) {
  return (
    <OverViewWrapper>
      <FontAwesomeIcon size="2xl" color="#f2545f" icon={icon} />
      <Title>{title}</Title>
      <Description>{des}</Description>
    </OverViewWrapper>
  );
}

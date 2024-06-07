import { Profile } from "../../../types/SearchResults";
import { Flex } from "../../styles/commons/Utils.styles";
import { Avatar, Badge, StyledProfileCard } from "./ProfileCard.styles";

export function ProfileCard({ type, html_url, login, avatar_url }: Profile) {
  return (
    <StyledProfileCard>
      <Flex>
        <Avatar src={avatar_url} />

        <div>
          <h5>{login}</h5>
          <Badge $isUser={type !== "Organization"}>Account Type - {type}</Badge>
        </div>
      </Flex>

      <a target="_blank" rel="noopenner noreferrer" href={html_url}>
        Visit Profile
      </a>
    </StyledProfileCard>
  );
}

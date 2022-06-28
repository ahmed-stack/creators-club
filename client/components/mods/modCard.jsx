import Link from "next/link";
import React from "react";
import {
  CardWrapper,
  InfoContainer,
  TagContainer,
  TextWrapper,
} from "styles/card";

const ModCard = ({ mod }) => {
  return (
    <Link href={`/mods/${mod.id}`}>
      <CardWrapper>
        <img src={mod.thumbnail} alt="mod image" />
        <TextWrapper>
          <TagContainer>
            {mod.tags.map((tag, index) => (
              <div key={index}>{tag.name}</div>
            ))}
          </TagContainer>
          <InfoContainer>
            <div className="mod-title">{mod.title}</div>
            <div className="mod-sibscribers">
              {mod.subscriberCount} Subscribers
            </div>
          </InfoContainer>
        </TextWrapper>
      </CardWrapper>
    </Link>
  );
};

export default ModCard;

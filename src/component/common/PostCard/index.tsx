import { FC } from 'react';

import { CardType } from '@/types/schema';

import { Avatar } from '../Avatar';
import { Card } from '../Card';
import { Tag } from '../Tag';

export type PostCardProps = {
  iconURL: string;
  name: string;
  cards: CardType[];
  tags: string[];
};

export const PostCard: FC<PostCardProps> = (props) => {
  const { iconURL, name, cards, tags } = props;
  return (
    <div className="flex w-80 flex-col gap-4 bg-white p-4">
      <div className="flex items-center gap-4">
        <Avatar src={iconURL} />
        {name}
      </div>
      <div className="flex gap-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <Tag key={index} label={tag} />
        ))}
      </div>
    </div>
  );
};

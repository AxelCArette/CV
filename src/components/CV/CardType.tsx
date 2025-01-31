import { RefObject } from 'react';

export interface CardProps {
  id:number;
  title: string;
  description: string;
  draggableProps?: any;
  dragHandleProps?: any;
  ref?: RefObject<HTMLDivElement>;
}
import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import CardDragandDrop from '../../components/CV/CardDragandDrop';

interface CardItem {
  id: string;
  title: string;
  description: string;
}

const Cvdraganddrop = () => {
  const [cards, setCards] = useState<CardItem[]>([
    { id: '1', title: 'Compétence 1', description: 'Description de la compétence 1' },
    { id: '2', title: 'Compétence 2', description: 'Description de la compétence 2' },
    { id: '3', title: 'Compétence 3', description: 'Description de la compétence 3' },
    { id: '4', title: 'Compétence 4', description: 'Description de la compétence 4' },
    { id: '5', title: 'Compétence 5', description: 'Description de la compétence 5' },
  

  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = cards.findIndex(card => card.id === active.id);
    const newIndex = cards.findIndex(card => card.id === over.id);
    const updatedCards = arrayMove(cards, oldIndex, newIndex);
    setCards(updatedCards); 
  };

  return (
    <div className="p-4">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={cards.map(card => card.id)} strategy={verticalListSortingStrategy}>
          <div>
            {cards.map((card) => (
              <CardDragandDrop key={card.id} id={card.id} title={card.title} description={card.description} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Cvdraganddrop;

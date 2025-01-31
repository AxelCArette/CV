import { useSortable } from '@dnd-kit/sortable';

const CardDragandDrop = ({ id, title, description }: CardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition: transition || 'none', 
      }}
      className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-grab active:cursor-grabbing hover:shadow-lg transition-shadow"
      {...listeners}
      {...attributes}
    >
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardDragandDrop;

import React, { useState, useEffect } from 'react';
// @ts-expect-error "do not have types, not my fault!"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useGetList } from 'ra-core';
import { useTheme } from 'react-admin';
import { toast } from 'sonner';
// Define Item type

// Fetch logic with a hook
// const fetchItems = async (): Promise<Item[]> => {
//   // Here you can make your API call, using a fake delay for now
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(
//         Array.from({ length: 10 }, (v, k) => ({
//           id: `item-${k}`,
//           content: `item ${k}`,
//           test: 'column',
//         }))
//       );
//     }, 1000)
//   );
// };

// A little function to help us with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 20;

const getItemStyle = (isDragging: boolean, draggableStyle: React.CSSProperties) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',

  // change background colour if dragging
  background: isDragging ? 'lightblue' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: boolean) => ({
  // background: theme === 'dark' ? 'black' : 'light',
  padding: grid,
  width: '100%',
});

const CustomTeamList: React.FC = () => {
  const [theme, setTheme] = useTheme();
  const { data, isLoading, error } = useGetList('Team');

  const [items, setItems] = useState<any[]>([]);
  const [ids, setIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isLoading && data) {
      const sortedData = data.sort((a: any, b: any) => a.order - b.order);
      setItems(sortedData);
      const onlyIds = sortedData.map((item) => item.id);
      setIds(onlyIds);
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const saveReorder = async () => {
    setLoading(true);
    const response = await fetch('/api/admin/reorderTeam', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids }),
    });
    setLoading(false);
    if (response.ok) {
      alert('Sıra dəyişildi!');
    } else {
      alert('Sıra Dəyişilmədi.Yenidən yoxlayın!');
    }
  };

  // Handle drag end event
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(items, result.source.index, result.destination.index);
    const reorderedIds = reorderedItems.map((item) => item.id);
    setIds(reorderedIds);
    setItems(reorderedItems);
  };

  return (
    <div className={'size-full'}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided: any, snapshot: any) => (
            <table
              ref={provided.innerRef}
              className={theme === 'dark' ? 'bg-black' : 'bg-white'}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <thead>
                <tr>
                  <th>Ad Soyad(Az)</th>
                  <th>Peşə(Az)</th>
                  <th>Email</th>
                  <th>Aktiv</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided: any, snapshot: any) => (
                      <tr
                        className={'border-[1px] border-black'}
                        onClick={() => (window.location.href = `/admin#/Team/${item.id}`)}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <td className={'text-center'} style={{ width: '25%' }}>
                          {item.fullName.az}
                        </td>
                        <td className={'text-center'} style={{ width: '25%' }}>
                          {item.profession.az}
                        </td>
                        <td className={'text-center'} style={{ width: '25%' }}>
                          {item.email}
                        </td>
                        <td className={'text-center'} style={{ width: '25%' }}>
                          {item.active ? 'Yes' : 'No'}
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            </table>
          )}
        </Droppable>
      </DragDropContext>
      <button
        disabled={loading}
        onClick={saveReorder}
        className={'bg-blue-400 hover:bg-blue-500 duration-300 rounded-lg p-2'}
      >
        Yeni sıralamanı yadda saxla
      </button>
    </div>
  );
};

export default CustomTeamList;

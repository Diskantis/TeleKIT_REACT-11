import React, { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

import { Color } from "../../styles/style_constants.js";

import styled from "@emotion/styled";
import { mixinFontParams } from "../../styles/style_constants.js";

import SideBar from "../../components/Layouts/SideBar.jsx";
import MainLayout from "../../components/Layouts/MainLayout.jsx";
import PageLayout from "../../components/Layouts/PageLayout.jsx";
import ScheduleCard from "../../pages/SchedulePage/ScheduleCard.jsx";
import ScheduleDayList from "./ScheduleDayList.jsx";

// const tasks = [
//   {
//     id: "1",
//     name: "ТЖК 1",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Автухов А.А.",
//   },
//   {
//     id: "2",
//     name: "ТЖК 2",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Зонов А.А.",
//   },
//   {
//     id: "3",
//     name: "ТЖК 3",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Шаплов А.А.",
//   },
//   {
//     id: "4",
//     name: "ТЖК 4",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Андрушкевич А.А.",
//   },
//   {
//     id: "5",
//     name: "ТЖК 5",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Гончарик А.А.",
//   },
//   {
//     id: "6",
//     name: "ТЖК 3",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Шаплов А.А.",
//   },
//   {
//     id: "7",
//     name: "ТЖК 4",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Андрушкевич А.А.",
//   },
//   {
//     id: "8",
//     name: "ТЖК 5",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Гончарик А.А.",
//   },
//   {
//     id: "9",
//     name: "ТЖК 3",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Шаплов А.А.",
//   },
//   {
//     id: "10",
//     name: "ТЖК 4",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Андрушкевич А.А.",
//   },
//   {
//     id: "11",
//     name: "ТЖК 5",
//     timeIn: "09:00",
//     timeOut: "18:00",
//     operator: "Гончарик А.А.",
//   },
// ];

const taskStatus = {
  monday: {
    name: "Понедельник",
    items: [
      {
        id: "1",
        name: "ТЖК 1",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Автухов А.А.",
      },
      {
        id: "2",
        name: "ТЖК 2",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Зонов А.А.",
      },
      {
        id: "3",
        name: "ТЖК 3",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Шаплов А.А.",
      },
      {
        id: "4",
        name: "ТЖК 4",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Андрушкевич А.А.",
      },
      {
        id: "5",
        name: "ТЖК 5",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Гончарик А.А.",
      },
    ],
  },
  tuesday: {
    name: "Вторник",
    items: [],
  },
  wednesday: {
    name: "Среда",
    items: [],
  },
  thursday: {
    name: "Четверг",
    items: [
      {
        id: "6",
        name: "ТЖК 3",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Шаплов А.А.",
      },
      {
        id: "7",
        name: "ТЖК 4",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Андрушкевич А.А.",
      },
      {
        id: "8",
        name: "ТЖК 5",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Гончарик А.А.",
      },
    ],
  },
  friday: {
    name: "Пятница",
    items: [],
  },
  saturday: {
    name: "Суббота",
    items: [],
  },
  sunday: {
    name: "Воскресенье",
    items: [
      {
        id: "9",
        name: "ТЖК 3",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Шаплов А.А.",
      },
      {
        id: "10",
        name: "ТЖК 4",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Андрушкевич А.А.",
      },
      {
        id: "11",
        name: "ТЖК 5",
        timeIn: "09:00",
        timeOut: "18:00",
        operator: "Гончарик А.А.",
      },
    ],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const SchedulePage = () => {
  const [columns, setColumns] = useState(taskStatus);
  return (
    <PageLayout>
      <SideBar />
      <MainLayout title="Расписание выездов">
        <ScheduleStl>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column]) => {
              return (
                <DayContainerStl key={columnId}>
                  <DayHeaderStl>
                    <DayHeaderTitleStl>{column.name}</DayHeaderTitleStl>
                  </DayHeaderStl>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided) => {
                      return (
                        <ScheduleDayList provided={provided}>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <ScheduleCard
                                      item={item}
                                      provided={provided}
                                      snapshot={snapshot}
                                    />
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </ScheduleDayList>
                      );
                    }}
                  </Droppable>
                </DayContainerStl>
              );
            })}
          </DragDropContext>
        </ScheduleStl>
      </MainLayout>
    </PageLayout>
  );
};

export default SchedulePage;

const ScheduleStl = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const DayContainerStl = styled.div`
  width: 215px;
  height: calc(100vh - 165px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.schedule_bg};
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 0;
  //margin-top: 10px;
`;

const DayHeaderStl = styled.div`
  width: 80%;
  display: flex;
  ${mixinFontParams({ weight: 600 })}
  justify-content: center;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const DayHeaderTitleStl = styled.div`
  font-size: 20px;
`;

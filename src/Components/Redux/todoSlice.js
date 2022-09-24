import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  todolist: [],
  isLoading: false,
  isError: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getItems: (state) => {},
    addItem: (state, action) => {
      let newData = { ...action.payload, status: "Move to Doing" };
      fetch("http://localhost:3002/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp));
      state.todolist.push(newData);
    },
    delItem: (state, action) => {
      const newData = state.todolist.filter((itm) => itm.id !== action.payload);
      fetch("http://localhost:3002/posts/" + action.payload, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp));
      state.todolist = newData;
    },
    editStatusToDoing: (state, action) => {
      let sampData = state.todolist.findIndex(
        (itm) => itm.id === action.payload
      );

      let data = state.todolist[sampData];

      state.todolist[sampData].status = "Doing";
      fetch("http://localhost:3002/posts/" + action.payload, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          status: "Doing",
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp));
    },

    editStatusToDo: (state, action) => {
      let sampData = state.todolist.findIndex(
        (itm) => itm.id === action.payload
      );
      let data = state.todolist[sampData];
      state.todolist[sampData].status = "To Do";
      fetch("http://localhost:3002/posts/" + action.payload, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          status: "Doing",
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp));
    },

    editStatusToDone: (state, action) => {
      let sampData = state.todolist.findIndex(
        (itm) => itm.id === action.payload
      );
      let data = state.todolist[sampData];
      state.todolist[sampData].status = "Done";
      fetch("http://localhost:3002/posts/" + action.payload, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          status: "Done",
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp));
    },
  },
});

export const {
  getItems,
  addItem,
  delItem,
  editStatusToDoing,
  editStatusToDo,
  editStatusToDone,
} = todoSlice.actions;
export default todoSlice.reducer;

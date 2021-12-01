import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 4,
    todolist: [
      {
        id: 1,
        text: "First Todo",
        alt: "First Desc",
        like: true,
        bookmark: false,
      },
      {
        id: 2,
        text: "Second Todo",
        alt: "Second Desc",
        like: false,
        bookmark: false,
      },
    ],
    filtertodo: [],
  },

  actions: {
    filter(context, data) {
      data == "all"
        ? (context.state.filtertodo = context.state.todolist)
        : (context.state.filtertodo = context.state.todolist.filter(
            (item) => item[data] == true
          ));
    },
    sil(context, data) {
      context.state.filtertodo = context.state.filtertodo.filter(
        (item) => item.id != data
      );
      context.state.todolist = context.state.todolist.filter(
        (item) => item.id != data
      );
    },
    ekle(context, data) {
      let lenght = context.state.todolist.length + 1;

      data.id = lenght;
      (data.like = false),
        (data.bookmark = false),
        context.state.todolist.push(data);
    },
    like(context, data) {
      const reply = context.state.todolist.findIndex((item) => data == item.id);
      let like = context.state.todolist[reply].like;

      if (like == true) {
        context.state.todolist[reply].like = false;
      } else {
        context.state.todolist[reply].like = true;
      }
    },
    bookmark(context, data) {
      const reply = context.state.todolist.findIndex((item) => data == item.id);
      let bookmark = context.state.todolist[reply].bookmark;
      if (bookmark == true) {
        context.state.todolist[reply].bookmark = false;
      } else {
        context.state.todolist[reply].bookmark = true;
      }
    },
  },
});
export default store;

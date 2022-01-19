import List from "../view/list/index";
import Detail from "../view/detail/index";

// const urlComponentMap = {
//   "/content/list": List,
//   "/content/detail": Detail,
// };
const urlList = [
  { name: "list", url: "/content/list", component: List },
  { name: "detail", url: "/content/detail", component: Detail },
];

export { urlList };

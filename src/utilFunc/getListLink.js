const getLinkList = (type, el) => {
  if (type === "projects" || type === "recent" || type === "priorityProjects")
    return `/projects/${el.id}`;
  else return `projects/${el.idParent}/${el.id}`;
};

export default getLinkList;

// Used in BasicList Component for linking a list item to a specific page

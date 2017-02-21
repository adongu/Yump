export const fetchUser = (id) => {
  return
    $.ajax({
      METHOD: "GET",
      url: `api/users/${id}`
    });
};

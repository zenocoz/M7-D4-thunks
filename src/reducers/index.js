export default function (state = { favorites: [] }, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
  }

  // case "REMOVE_FROM_FAVORITES":
  //   return {
  //     ...state,
  //       favorites: [
  //         ...state.favorites.filter(
  //           (jobId) => jobIdId !== action.payload
  //         ),
  //       ],
  //     },
}

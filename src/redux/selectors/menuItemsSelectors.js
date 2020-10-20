import { createSelector } from 'reselect';

const selectMenuItems = (state) => state.menuItems;

export const selectMenuItemsSections = createSelector(
  [selectMenuItems],
  (menuItems) => menuItems.sections
);

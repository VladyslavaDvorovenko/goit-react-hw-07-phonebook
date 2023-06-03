import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const getFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    );
  }
);

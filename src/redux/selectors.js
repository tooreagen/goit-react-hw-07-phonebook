export const selectContactsArray = state => state.contactsState.contacts.items;
export const selectFilterString = state => state.filterState.filter;
export const selectFetchError = state => state.contactsState.contacts.error;
export const selectIsLoadingState = state => state.contactsState.contacts.isLoading;

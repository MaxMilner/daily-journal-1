function getJournal() {
  console.log("get journal entries running")
  API.getJournalEntries() 
  .then(entries => renderJournalEntries(entries) )
}

getJournal()

/* Main application logic that uses the functions and objects defined in the other JavaScript files.

Change the fake variable names below to what they should be to get the data and display it. */

// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)
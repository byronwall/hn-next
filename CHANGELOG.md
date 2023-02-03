# CHANGELOG

## 2023-02-02 22:43:26

- Add support for a global store to hold comment collapse state and read status
- Add ability to collapse comments on click
- Store the collapse and read status in IndexedDB so it persists
  - Consider how to remove data when needed?
- Improve UI on comments

## 2023-02-01 23:00:49

- Ensure that API calls are forced to refresh after 60 seconds
- Add a Spinner for loading state

## 2023-01-31 23:52:04

- Initial version of the HN site that uses the existing API for data

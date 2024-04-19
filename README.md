# React + Vite

Points to be noted:
- Each application has one and only one store (99% of the time irrespective of scale)
- The store is also known as 'Single Source of Truth'
- Features are usually known as slice 
- Major components are slice are name, an initial state and a set of reducers
 

Steps to setup Redux :
- Step 1 - Create and configure store in a (separate  folder-suggested)
- Step 2 - Create reducer for store
- Step 3 - Reducer consist of initial state and a list of reducer functions
- Step 4 - Update configured reducer in store
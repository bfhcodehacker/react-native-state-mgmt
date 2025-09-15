# React Native State Management

Simple react native app to test different state management packages

## useState

simple and straight forward this is the easiest use case. state is maintained at the screen
level and passed to components directly. the main drawbacks are prop drilling and difficulty passing state to other screens or tabs.

## Zustand

the implementation on this is fairly simple and unopinionated. in the store, one creates the value to maintain and any functions needed to modify that data. the store can then be imported wherever it is needed. the primary drawback that I see is the unopinionated nature of this. the store values can be modified anywhere and this can lead to different coding patterns if there are multiple developers on the project.

## Redux toolkit

having only used old Redux previously, Redux toolkit is a nice upgrade. it simplifies the reducers and action creators and makes typing much easier. Redux toolkit does have the most boilerplate code, but it is not very difficult once one gets used to it. furthermore, the use of the immutable library restricts store values to only being modified in the reducer which streamlines code for larger projects with multiple developers.

## useContext

this is essentially keeping state at the App level and then being able to import it elsewhere to avoid prop drilling. it feels like it would be useful on a simpler app, but if you are already using a state management package like redux or zustand, it would be better to keep the data there.
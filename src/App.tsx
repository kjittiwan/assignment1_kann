import React, { useState } from 'react';
import { Button } from 'antd';
import './styles/App.scss';

// Define a type for the state setter function
type SetArrayState = React.Dispatch<React.SetStateAction<string[]>>;

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([
    'square',
    'circle',
    'oval',
    'trapezoid',
    'rectangle',
    'rhombus',
  ]);

  // Function to move items in the array forward
  const moveItemsForward = (arr: string[], setArr: SetArrayState) => {
    // Get the last item in the array
    const lastItem = arr[arr.length - 1];
    if (lastItem) {
      // Create a new array with the last item moved to the front
      const newArr = [lastItem, ...arr.slice(0, arr.length - 1)];
      // Update the state with the new array
      setArr(newArr);
    }
  };

  // Function to move items in the array backwards
  const moveItemsBackwards = (arr: string[], setArr: SetArrayState) => {
    // Get the first item in the array
    const firstItem = arr[0];
    if (firstItem) {
      // Create a new array with the first item moved to the end
      const newArr = [...arr.slice(1), firstItem];
      // Update the state with the new array
      setArr(newArr);
    }
  };

  // Function to switch the positions of the first and second halves of the array (swap rows in the grid)
  const switchArrayHalves = (arr: string[], setArr: SetArrayState) => {
    // Calculate the middle index of the array
    const middleIndex = Math.floor(arr.length / 2);
    // Slice the array into two halves
    const firstHalf = arr.slice(0, middleIndex);
    const secondHalf = arr.slice(middleIndex);
    // Concatenate the second half with the first half to switch their positions
    setArr([...secondHalf, ...firstHalf]);
  };

  return (
    <section>
      <header>
        <h1>Layout & Style</h1>
        <div>En</div>
      </header>
      <main>
        <div className="button-container">
          {/* Button to move items backwards */}
          <Button
            onClick={() => moveItemsBackwards(items, setItems)}
            className="button"
          >
            <div className="triangle-left" />
          </Button>
          {/* Button to switch array halves (swapping rows in the grid) */}
          <Button
            onClick={() => switchArrayHalves(items, setItems)}
            className="button"
          >
            <div className="triangle-upright" />
            <div className="triangle-downward" />
          </Button>
          {/* Button to move items forward */}
          <Button
            onClick={() => moveItemsForward(items, setItems)}
            className="button"
          >
            <div className="triangle-right" />
          </Button>
        </div>
        <div className="grid-container">
          {/* Render each item in the array */}
          {items.map((item, index) => (
            <div key={item} className={`grid-item-${index}`}>
              <div className={item} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default App;


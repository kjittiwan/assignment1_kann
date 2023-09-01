import React, { useState } from 'react';
import { Button, Select } from 'antd';
import './styles/App.scss';
import { useTranslation } from 'react-i18next';
// Define a type for the state setter function
type SetArrayState = React.Dispatch<React.SetStateAction<string[]>>;
type LanguageObject = {
  [key: string]: { nativeName: string };
};
const App: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lngs : LanguageObject = {
    en: { nativeName: 'English' },
    th: { nativeName: 'Thai' }
  };

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
    const lastItem = arr[arr.length - 1];
    if (lastItem) {
      const newArr = [lastItem, ...arr.slice(0, arr.length - 1)];
      setArr(newArr);
    }
  };

  // Function to move items in the array backwards
  const moveItemsBackwards = (arr: string[], setArr: SetArrayState) => {
    const firstItem = arr[0];
    if (firstItem) {
      const newArr = [...arr.slice(1), firstItem];
      setArr(newArr);
    }
  };

  // Function to switch the positions of the first and second halves of the array (swap rows in the grid)
  const switchArrayHalves = (arr: string[], setArr: SetArrayState) => {
    const middleIndex = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, middleIndex);
    const secondHalf = arr.slice(middleIndex);
    setArr([...secondHalf, ...firstHalf]);
  };

  // Function to randomize the positions of items in the array
  const randomizeArrayOrder = (arr: string[], setArr: SetArrayState) => {
    const newArray = [...arr];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setArr(newArray);
  };

  const handleChange = (value: string) => {
    if (lngs[value]) {
      i18n.changeLanguage(value);
      console.log(i18n.resolvedLanguage);
    }
  };
  const selectedLanguage = i18n.resolvedLanguage === 'th' ? 'th' : 'en';
  return (
    <section>
      <header>
        <Select
        value={selectedLanguage}
          defaultValue={i18n.resolvedLanguage === 'th'
          ? 'th'
          : 'en'
          }
          onChange={handleChange}
          className='select'
        >
          <Select.Option
          value='en'
          disabled={i18n.resolvedLanguage === 'en'}
          >
            {t('language.en')}
          </Select.Option>
          <Select.Option
          value='th'
          disabled={i18n.resolvedLanguage === 'th'}>
            {t('language.th')}
          </Select.Option>
        </Select>


        <h1>{t('header')}</h1>

      </header>
      <main>
        <div className="button-container">
          {/* Button to move items backwards */}
          <Button
            onClick={() => moveItemsBackwards(items, setItems)}
            className="action-button"
          >
            <div className="triangle-left" />
            <div className='button-description'>
              <span>{t('move.position')}</span>
            </div>
          </Button>
          {/* Button to switch array halves (swapping rows in the grid) */}
          <Button
            onClick={() => switchArrayHalves(items, setItems)}
            className="action-button middle-button"
          >
            <div className="triangle-upright" />
            <div className="triangle-downward" />
            <div className='button-description'>
              <span>{t('move.shape')}</span>
            </div>
          </Button>
          {/* Button to move items forward */}
          <Button
            onClick={() => moveItemsForward(items, setItems)}
            className="action-button"
          >
            <div className="triangle-right" />
            <div className='button-description'>
              <span>{t('move.position')}</span>
            </div>
          </Button>
        </div>
        <div className="grid-container">
          {/* Render each item in the array */}
          {items.map((item, index, array) => (
            <Button
            key={item}
            onClick={() => {randomizeArrayOrder(array, setItems)}}
            className={`grid-item-${index} action-button`}>
              <div className={`${item}`}></div>
            </Button>
          ))}
        </div>
      </main>
    </section>
  );
};

export default App;



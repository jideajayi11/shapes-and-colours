import React, { useEffect, useState } from 'react';
import './App.css';
import items from './items.json';
import ShapesComponent from './components/ShapesComponent';
import { CircledButton, OvaledButton } from './components/Button';
import Cover from './components/Cover';
import Container, { TextStyle, ShapesContainer } from './components/Container';

interface IShapesObj {
  oval: boolean;
  round: boolean;
  triangle: boolean;
  square: boolean;
  rectangle: boolean;
};
interface IColorsObj {
  red: boolean;
  blue: boolean;
  green: boolean;
  yellow: boolean;
  pink: boolean;
  grey: boolean;
};
interface Iitem {
  shape: string;
  colour: string;
};

const initialShapesObj: IShapesObj = {
  oval: true,
  round: true,
  triangle: true,
  square: true,
  rectangle: true,
};
const initialColorsObj: IColorsObj = {
  red: true,
  blue: true,
  green: true,
  yellow: true,
  pink: true,
  grey: true,
};

const ShapesPage = (): JSX.Element => {
  const [objectsArr, setObjectsArr] = useState<Iitem[]>(items);
  const [clickedFilter, setClickedFilter] = useState("");
  const [shapesStateObj, setShapesStateObj] = useState<IShapesObj>(initialShapesObj);
  const [colorsStateObj, setColorsStateObj] = useState<IColorsObj>(initialColorsObj);

  useEffect(() => {
    let filteredItems = items;

    Object.keys(colorsStateObj).reduce((acc, current) => {
      const key = current as keyof IColorsObj;
      if(!colorsStateObj[key]) {
        filteredItems = filteredItems.filter(item => item.colour !== key);
      }
      const output = { ...acc, [current]: true };
      if(filteredItems.length === 0 && clickedFilter === "color") {
        setColorsStateObj(output)
      }
      return output;
    }, {} as IColorsObj);

    Object.keys(shapesStateObj).reduce((acc, current) => {
      const key = current as keyof IShapesObj;
      if(!shapesStateObj[key]) {
        filteredItems = filteredItems.filter(item => item.shape !== key);
      }
      const output = { ...acc, [current]: true };
      if(filteredItems.length === 0 && clickedFilter === "shape") {
        setShapesStateObj(output)
      }
      return output;
    }, {} as IShapesObj);

    setObjectsArr(filteredItems);
  }, [colorsStateObj, shapesStateObj, clickedFilter]);

  const handleShapeClick = (shape: keyof IShapesObj): void => {
    setClickedFilter("shape");
    setShapesStateObj(prev => ({
      ...prev,
      [shape]: !prev[shape],
    }));
  };

  const handleColorClick = (color: keyof IColorsObj): void => {
    setClickedFilter("color");
    setColorsStateObj(prev => ({
      ...prev,
      [color]: !prev[color],
    }));
  };

  return (
    <Container>
      <TextStyle as="h3">Filters</TextStyle>
      <TextStyle as="h4" color="#234aec">Shapes</TextStyle>
      <div>
        <OvaledButton onClick={() => handleShapeClick("oval")} color={shapesStateObj.oval ? "skyblue" : ""} border="grey">Oval</OvaledButton>
        <OvaledButton onClick={() => handleShapeClick("round")} color={shapesStateObj.round ? "skyblue" : ""} border="grey">Round</OvaledButton>
        <OvaledButton onClick={() => handleShapeClick("triangle")} color={shapesStateObj.triangle ? "skyblue" : ""} border="grey">Triangle</OvaledButton>
        <OvaledButton onClick={() => handleShapeClick("square")} color={shapesStateObj.square ? "skyblue" : ""} border="grey">Square</OvaledButton>
        <OvaledButton onClick={() => handleShapeClick("rectangle")} color={shapesStateObj.rectangle ? "skyblue" : ""} border="grey">Rectangle</OvaledButton>
      </div>
      <TextStyle as="h4" color="#234aec">Colors</TextStyle>
      <div>
        <CircledButton onClick={() => handleColorClick("red")} active={colorsStateObj.red} color="red" />
        <CircledButton onClick={() => handleColorClick("blue")} active={colorsStateObj.blue} color="blue" />
        <CircledButton onClick={() => handleColorClick("green")} active={colorsStateObj.green} color="green" />
        <CircledButton onClick={() => handleColorClick("yellow")} active={colorsStateObj.yellow} color="yellow" />
        <CircledButton onClick={() => handleColorClick("pink")} active={colorsStateObj.pink} color="pink" />
        <CircledButton onClick={() => handleColorClick("grey")} active={colorsStateObj.grey} color="grey" />
      </div>
      <TextStyle as="h3">Items</TextStyle>
      <ShapesContainer>
        {
          objectsArr.map(({shape, colour}) => <Cover key={`${shape}${colour}`}>{ShapesComponent(shape, colour)}</Cover>)
        }
      </ShapesContainer>
    </Container>
  )
};

export default ShapesPage;

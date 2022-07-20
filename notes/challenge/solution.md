# Solution: Components

**Resist the urge the to look in these files if you can't come up with a solution yourself.**

It's always better to google, ask a fellow student or ask a coach. This is one way of solving the challenge not the only way to do it.

## Adding State to the Component

1. Add the prop to the component and pass in the `artist.strBiographyEN` value.

```jsx
// App.jsx
<ArtistTile
  imgSrc={artist.strArtistThumb}
  title={artist.strArtist}
  text={artist.strBiographyEN}
/>
```

2. Add `{ useState }` to the import at the top of component. Initialize the state inside the component.

```jsx
// ArtistTile.jsx

import { useState } from "react";

// Inside the ArtistTile function.
const [showText, setShowText] = useState(false);
```

3. Write a function to set the state to whatever it is not. The example below uses the [Logical not operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT).

```jsx
// ArtistTile.jsx

// Inside the ArtistTile function.
const handleClick = () => {
  setShowText(!showText);
};
```

4. Add the onClick to the div set it to the function you had just written.

```jsx
// ArtistTile.jsx

<div onClick={handleClick}>
  <Button buttonText={"Find out more"} isSecondary={true} />
</div>
```

5. Add the image to the ArtistTile component.

```jsx
// ArtistTile.jsx

import whiteCross from "../../assets/images/white-cross.png";
```

6. I set two variables one is the initial JSX. This is the button and title which have been saved to a variable called buttonJSX. The JSX for the state change is the title text and cross, which have been saved to a variable called textJSX. In the return statement I check the state if it is meant to show the text it will show textJSX otherwise it will show buttonJSX. The JSX uses the given classNames from the SCSS file, both use the content class but buttonJSX adds the content--button class and textJSX adds the content--text class.

```jsx
// ArtistTile.jsx

const buttonJSX = (
  <div className="artist-tile__content artist-tile__content--button">
    <h3 className="artist-tile__heading">{title}</h3>
    <div onClick={handleClick}>
      <Button buttonText={"Find out more"} isSecondary={true} />
    </div>
  </div>
);

const textJSX = (
  <div className="artist-tile__content artist-tile__content--text">
    <img
      src={whiteCross}
      className="artist-tile__cross"
      onClick={handleClick}
      alt="Close text"
    />
    <h3 className="artist-tile__heading">{title}</h3>
    {text.split(".").map((sentence) => (
      <p>{sentence + "."}</p>
    ))}
  </div>
);

return (
  <div className="artist-tile">
    <img src={imgSrc} className="artist-tile__img" alt={props.title} />
    {showText ? textJSX : buttonJSX}
  </div>
);
```

7. EXTENSION. Split the text using the "." to create an array of the sentences. Map over creating p tags for each of the sentences.

```jsx
const textJSX = (
  <div className="content content--text">
    <img
      src={whiteCross}
      className="artist-tile__cross"
      onClick={handleClick}
      alt="Close text"
    />
    <h3>{title}</h3>
    {text.split(".").map((sentence) => (
      <p>{sentence + "."}</p>
    ))}
  </div>
);
```

---

## Completed Component

```jsx
// ArtistTile.jsx
import { useState } from "react";
import "./ArtistTile.scss";

import Button from "../Button/Button";
import whiteCross from "../../assets/images/white-cross.png";

const ArtistTile = (props) => {
  const { imgSrc, title, text } = props;
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const buttonJSX = (
    <div className="artist-tile__content artist-tile__content--button">
      <h3 className="artist-tile__heading">{title}</h3>
      <div onClick={handleClick}>
        <Button buttonText={"Find out more"} isSecondary={true} />
      </div>
    </div>
  );

  const textJSX = (
    <div className="artist-tile__content artist-tile__content--text">
      <img
        src={whiteCross}
        className="artist-tile__cross"
        onClick={handleClick}
        alt="Close text"
      />
      <h3 className="artist-tile__heading">{title}</h3>
      {text.split(".").map((sentence) => (
        <p>{sentence + "."}</p>
      ))}
    </div>
  );

  return (
    <div className="artist-tile">
      <img src={imgSrc} className="artist-tile__img" alt={props.title} />
      {showText ? textJSX : buttonJSX}
    </div>
  );
};

export default ArtistTile;
```

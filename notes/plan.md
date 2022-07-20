# Components

This branch is focused on getting the student use to creating, styling, exporting and importing Components.

### Resources

- [Slides](https://opusrs.sharepoint.com/:p:/r/sites/Nologyio/_layouts/15/Doc.aspx?sourcedoc=%7B318F1076-070A-48E0-BCC1-D2E090406885%7D&file=02%20React%20Components.pptx&action=edit&mobileredirect=true)
- [Github plan.md](https://github.com/nology-tech/react-code-along/blob/02-components/notes/plan.md)
- [Component Tree](./component-tree.md)

## Objectives

- What is a Component?
- How do Components fit into our project structure?
- How do we render Components?

## How to set up a Component - Create a Nav Component

Create a components folder

src/components

```bash
cd src && mkdir components
```

The naming convention for Components is that the component starts with a capital letter e.g. Nav

Create a Nav folder within the components folder

src/components/Nav

```bash
cd components && mkdir Nav
```

We now need to create the file that our JSX will be written in

src/components/Nav/Nav.jsx

```bash
cd Nav && touch Nav.jsx
```

In Nav.jsx create the functional component

```jsx
// Nav.jsx
const Nav = () => {

  return (

  )
}
```

Demo writing JSX in Nav.jsx

```jsx
// Nav.jsx
const Nav = () => {
  return <p>This is a Nav Component</p>;
};
```

Explain that we need to export components and import them to the file where we would like to render them

Export the Nav component and import it into App.jsx.

Render the component in App.jsx and show the component on the webpage.

<details> 
<summary>Completed App.jsx</summary>

```jsx
// App.jsx
import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";
import Nav from "./components/Nav";

const App = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  return (
    <>
      <div className="app">
        <Nav />
        <header className="greeting">
          <img src={greetingImg} className="greeting__img" alt={greetingTime} />
          <h1 className="greeting__heading">
            Good {greetingTime} <br /> {user.firstName} {user.lastName}
          </h1>
        </header>
      </div>
    </>
  );
};
```

</details>

<br/>

Write the code for the nav in Nav.jsx
The images for the nav can be found in src/assets/images

```jsx
// Nav.jsx
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={menu} className="nav__item" alt="menu icon" />
      <h2 className="nav__heading">Ear Worm</h2>
      <img src={settings} className="nav__item" alt="settings icon" />
    </nav>
  );
};

export default Nav;
```

Create Nav.scss and style the component using the below styles

<details>
<summary>Completed SCSS styles</summary>

```scss
// Nav.scss
@use "../../assets/sass/_variables.scss" as *;

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: $color-black;

  &__item {
    height: 30px;
  }
}

@media screen and (min-width: 992px) {
  .nav {
    grid-column: 1 / -1;
  }
}
```

</details>

---

## Move onto Challenges

- [Challenge](./challenge/challenge.md)
- [Solution](./challenge/solution.md)

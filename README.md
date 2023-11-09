# Technical Assessment for Yolo Group - Hub88 Team

This project is my technical assessment for the front-end developer position for the Hub88 Team in Yolo Group.

It consists in a simple app for listing countries that uses [trevorblades](https://countries.trevorblades.com/) countries API.

This project was made using Vite + React + Tailwind, and for the unit tests I chose Jest.

## Folder Structure

This project was made utilizing the [Atomic](https://atomicdesign.bradfrost.com/chapter-2/) Design Pattern, this is the structure:

```
project
│   src
└───components
│   └───atoms
│       │   Input
│       │   Label
│       │   ToggleThemeButton
│       │   HeaderLogo
│   └───molecules
│       │   Header
│       │   DataTable
│       │   TextField
│   └───templates
│       │   HomePageTemplate
│   └───pages
│       │   HomePage

```

I also created some other folders with shared stuff, for example: graphql, hooks, types, fixtures and context.

I also made a theme toggle utilizing Context API that toggles between [Daisy's](https://daisyui.com/) light and dark theme.

## Instructions to run

For running this project you will need to do:

```bash
   git clone https://github.com/lvisentin/yolo-fe.git
   cd yolo-fe
   npm install
   npm run dev
```

It will start the project in the port 5173.

## Screenshots

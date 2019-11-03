# digital-art

TBD: project abstraction

## 1. Install tools

Before you start, you should install some tools to loanch this project.

### Yarn

```
brew install yarn
```

`npm` is also fine, but I recommend `yarn` because it is faster and more useful a little bit.

### Parcel

```
yarn global add parcel-bundler
```

I chose `parcel` instead of `webpack` bacause I wanted to avoid writing a complex config file.

### TypeScript

```
yarn global add typescript
```

## Set up this project

After installing above all, you should clone this project and install packages written in `package.json`.

```
git clone https://github.com/shunp/digital-art.git .
yarn
yarn start
```

## 2. Check it in your browser

You can see the top page in your browser.
Input `localhost:1234` in a url bar, then the top page will be opened.

## 3. Customize your art

You can change shapes rendered in your browser. Check your folder and open `audio/sample.json`.

```json:sample.json
{
    "param1": 12,
    "param2": 52,
    "param3": 98,
    "param4": 21,
    "param5": 49,
    "param6": 23,
    "param7": 11,
    "param8": 1
}
```

The drwan objects are made of these parameters. You can change shapes if you change them.

Besides, you can try another shape patterns.
See [this site](https://p5js.org/reference/#group-Shape), and add your ts file in shapes folder.
The examples are here. 

```
src
 |--canvas
 |  |--index.ts // Here is the root of canvas
 |--shapes
    |--index.ts
    |--box.ts // Drowing a box shape
    |--line.ts // Drowing a line shape
    |--ngon.ts // Drowing a triangle
```

Basically, you don't need to edit other files expect above them.

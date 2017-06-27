## 基于[styled-components](https://www.styled-components.com/docs/) 组件库 

### 根目录运行

```
npm link
```
**在测试应用里再链接我们的库，在应用根目录执行：**

```
npm link component-lib
```
**请记住用你组件库的名字取代 component-lib 。**

**在src/components/App.js中我们将像使用其他外部库一样引入和调用我们的组件:**

```
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'component-lib'

...

const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Button>Click Me!</Button>
    </div>
  );
};

```
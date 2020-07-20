import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer/reducer';
import App from './components/app/app';

import questions from './mocks/questions';

const init = (gameQuestions) => {
  ReactDom.render(
      <Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App
          attempts={3}
          questions={gameQuestions} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(questions);

import React from 'react';
import {observer} from 'mobx-react';

import TodoOverview from './todoOverview';

import DevTool from 'mobx-react-devtools';

@observer
export default class TodoPrint extends React.Component {
  render() {
    const {todoStore, viewStore} = this.props;
    return (
      <div>
        <TodoOverview todoStore={todoStore} viewStore={viewStore} />
      </div>
    );
  }
}

TodoPrint.propTypes = {
  viewStore: React.PropTypes.object.isRequired,
  todoStore: React.PropTypes.object.isRequired
};

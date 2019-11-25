import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import {listData} from '../../data/dataStore';
// import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';
import {DragDropContext} from 'react-beautiful-dnd';

class App extends React.Component {
  state = {
    lists: listData || [],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    moveCard: PropTypes.func,
  }
  render() {
    const {title, subtitle, lists, moveCard} = this.props;
    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        <div className={styles.columns}>
          <DragDropContext onDragEnd={moveCardHandler}>
            {lists.map(listData => (
              <List key={listData.id} {...listData} />
            ))}
          </DragDropContext>

        </div>
        {/* <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div> */}
      </main>
    );
  }
}

export default App;

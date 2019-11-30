import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';
// import {Droppable} from 'react-beautiful-dnd';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    id: PropTypes.string,
  }
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const {title, icon, cards, addCard/* , id */} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        <div className={styles.cards} >
          {/*         <Droppable droppableId={id}>
          {provided => (
 
              {...provided.droppableProps}
              ref={provided.innerRef}
            > */}
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          {/* {
              {provided.placeholder}
          )}}
        </Droppable> */}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
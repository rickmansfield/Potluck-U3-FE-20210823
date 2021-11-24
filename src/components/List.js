import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Here is a reusable list component.
// Pass all of its functions through props to keep our component clean & testable
// Feel free to add to this component with some more advanced features of your own
const List = ({ LoadingComponent, RenderItems, getItemsData }) => {
  const [items, setItems] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    getItemsData()
      .then(items => {
        setItems(items);
      })
      .catch(error => {
        console.error(error);
   // we could display what error happened for the User here. Since this componenet is resuable anything can go here. 
      })
      .finally(() => {
        setFetching(false);
      });
  }, [getItemsData]);

  // Here we return a loading component while our request is fetching
  // or we render our list of items from the data we receive from our successful request
  // We can change and swap these out through props!
  return isFetching ? <LoadingComponent /> : <RenderItems data={items} />;
};

export default List;

List.propTypes = {
  LoadingComponent: PropTypes.func.isRequired,
  RenderItems: PropTypes.func.isRequired,
  getItemsData: PropTypes.func.isRequired,
};

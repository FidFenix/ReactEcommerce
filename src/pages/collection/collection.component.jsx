import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.style.scss';

//match comes here because fo the router
const CollectionPage = ({collection: {items, title}}) => (
    <div className='collection-page'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='items'>
            {
                items.map((item) => (
                    <CollectionItem  className ='collection-item' key = { item.id }  item = { item }/>
                ))
            }
        </div>
    </div>
);

/* It cannot work since it is not valid
const mapToStateProps = createStructuredSelector({
    collections: selectCollection('hats')
});*/

//this is very speacial selector, it needs part of the state depending on the URL parameter
//selectCollection passes a function, so we pass a function to state to wire everything.
const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

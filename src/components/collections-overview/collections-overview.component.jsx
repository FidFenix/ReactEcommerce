import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionShop } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.style.scss';

const CollectionsOverview = ({collections}) => (
    <div className = 'collection-overview'>
        {
            collections.map(({id, ...others}) => (
                <CollectionPreview key = { id } { ...others }/>
            ))
        }
    </div>
);

const mapToStateProps = createStructuredSelector({
    collections: selectCollectionShop
});

export default connect(mapToStateProps)(CollectionsOverview);
import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionShop } from '../../redux/shop/shop.selectors';

const ShopPage = ({collections}) => (
    <div className='shop-page'>
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

export default connect(mapToStateProps)(ShopPage);
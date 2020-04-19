import React from 'react';

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component';

import { Route } from 'react-router-dom';

//we know match is in the route cause App is routed
const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
);

export default ShopPage;
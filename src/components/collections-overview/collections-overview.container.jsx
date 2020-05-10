/*
    This is a double wrapping for isFetching and isLoaded
    For doing that we need compose from redux

    instead of doing  connect(mapStateToProps)(WithSpinner(CollectionsOverview))
*/
// does not even use redux
import { connect }  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-snipper.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching, // were are goint to send just isLoading
});

//but this is hard to read, if we had more HOC wrapping is just tedious
//export CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));
//even worse
//export CollectionsOverviewContainer = withRouter(connect(mapStateToProps)(WithSpinner(CollectionOverview))); 
// So we can leverage a library called { compose }


//redom library from compose too another library

const  CollectionsOverviewContainer = compose(  //compose evaluates from right to left
    connect(mapStateToProps),
    WithSpinner  //read first WithSpinner first passing collectionOverview
)(CollectionOverview);

export default CollectionsOverviewContainer;
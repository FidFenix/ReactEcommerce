import CollectionPage from './collection.component';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../../components/with-spinner/with-snipper.component';

//import CollectionPage from '../../pages/collection/collection.component';

//isLoading
const mapStateToProps =  createStructuredSelector({ // we cannot call a function directly?/ so we use another function to extract the value
    isLoading: (state) => !selectIsCollectionLoaded(state), // when writting !selectIsCollectionLoaded just breaks, instead we pass a function to memorize the state
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    withSpinner
)( CollectionPage );

export default CollectionContainer;
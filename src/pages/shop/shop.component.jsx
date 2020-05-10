import React, {Component} from 'react';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';
//import CollectionPage from '../../pages/collection/collection.component';

import { Route } from 'react-router-dom';

//import {convertColletionsSnapshotToMap} from '../../firebase/firebase-util'

//we know match is in the route cause App is routed
/*const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
);*/

//import { firestore, convertColletionsSnapshotToMap } from  '../../firebase/firebase-util';
//import { setCollections } from '../../redux/shop/shop.actions';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
//import { createStructuredSelector } from 'reselect';
//import {  selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

//const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview); //using HoC

//const CollectionPageWithSpinner = WithSpinner(CollectionPage); //using HoC it is like this , but this is a shit, better create a container

class ShopPage extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            loading: true //now loading comes from the state of fetchingData
        }
    }*/
    /*
    state = {
        loading: true
        equal to top, react call this state and set constructor under the hood
    }
    */

    //unsubscribeFromSnapshot : null
    
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync();

    }

    /*render() {
        const { match } = this.props;

        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
            </div>
        );
    }
    We will use a render method where the parameters are what we were receiver, then we can pass match
    */

    //WITH SPINNER is for loading asyncronos data
    // render={(otherProps)=> <CollectionOverviewWithSpinner isLoading = {isCollectionFetching} {...otherProps}></CollectionOverviewWithSpinner>}></Route>

    render() {
        const { match } = this.props;

        return(
            <div className='shop-page'>
                <Route //this Route works 1 level with isFetchingCollection, but for going to collectionID we need to make sure the data has arrived
                    exact path={`${match.path}`} //now switch from render to component(before there was 'container' uhmmm) using Container Pattern
                    component = { CollectionsOverviewContainer }></Route>
                <Route 
                   // path={`${match.path}/:collectionId`} 
                    //render={(otherProps)=> <CollectionPageWithSpinner isLoading = {!isCollectionLoaded} {...otherProps}></CollectionPageWithSpinner>}
                    path =  {`${match.path}/:collectionId`}
                    component = { CollectionContainer }
                    >
                </Route>
            </div>
        );
    }
}


/* Code used when we were pulling data from Firestore and storing in redux
(const mapDispatchToProps = (dispatch) => ({
    setCollections: collectionsMap => dispatch(setCollections(collectionsMap))

});*/

//when we are using redux-thunk, these two methods are going to be changed into a container pattern
//const mapStateToProps = createStructuredSelector({
    //isCollectionFetching: selectIsCollectionFetching, // Now it is in the Container Pattern
  //  isCollectionLoaded: selectIsCollectionLoaded
//});

//when we dispatch, we pass a function, not an object
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
import React, {Component} from 'react';

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component';

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

import WithSpinner from '../../components/with-spinner/with-snipper.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview); //using HoC

const CollectionPageWithSpinner = WithSpinner(CollectionPage); //using HoC

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
        const { fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync();
        //const collectionRef = firestore.collection('collections');

        //Fidel: maybe we can modify  this to wait data without spinner with callbacks
        /*this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertColletionsSnapshotToMap(snapshot);
            setCollections(collectionMap); //update reducer
            this.setState({loading : false});
        });*/

        //we are changing to another way of getting data from Firebase
        //get() is an API call, promise style
        //OJO: the only time we get items from Firebase is when we remount the shop,
        //this is beacuse we are not using stream style as in the TOP
        /*collectionRef.get().then(async snapshot => {
            const collectionMap = convertColletionsSnapshotToMap(snapshot);
            setCollections(collectionMap); //update reducer
            this.setState({loading : false});
            console.log("paso!!!")
        }); 
        WE DONT NEED THIS SINCE IT IS IN REDUX-THUN;
        */


        //https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA
        //but the out might change, we are not dealing with snapshot
        //we can use cconsole.log to see thee ultra nested object to get the data, LOL
        /*fetch('https://firestore.googleapis.com/v1/projects/ecommerce-4c056/databases/(default)/documents/collections')
            .then(response => response.json())
            .then(json => setCollections(json))
            .then(this.setState({loading: false}))*/
        //Another way is using FETCH

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
    render() {
        const { match, isCollectionFetching } = this.props;

        return(
            <div className='shop-page'>
                <Route 
                    exact path={`${match.path}`} 
                    render={(otherProps)=> <CollectionOverviewWithSpinner isLoading = {isCollectionFetching} {...otherProps}></CollectionOverviewWithSpinner>}></Route>
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(otherProps)=> <CollectionPageWithSpinner isLoading = {isCollectionFetching} {...otherProps}></CollectionPageWithSpinner>}></Route>
            </div>
        );
    }
}


/* Code used when we were pulling data from Firestore and storing in redux
(const mapDispatchToProps = (dispatch) => ({
    setCollections: collectionsMap => dispatch(setCollections(collectionsMap))

});*/

//when we are using redux-thunk
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

//when we dispatch, we pass a function, not an object
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
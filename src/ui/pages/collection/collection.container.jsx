import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../../redux/shop/shop.selectors';
import WithSpinner from '../../ui-components/withSpinner/withSpinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) =>  !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

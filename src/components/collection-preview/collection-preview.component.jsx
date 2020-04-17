import React from 'react';
import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component';
// if the array gets longer, it runs evrytime the component gets render
const CollectionPreview = ({title, items}) => (
    <div className = 'collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...itemsProps}) => (
                    <CollectionItem key={id} {...itemsProps}>
                    </CollectionItem>  
                ))
            }
        </div>
    </div>
);
export default CollectionPreview;
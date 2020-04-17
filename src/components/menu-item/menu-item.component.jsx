import React from 'react';

import './menu-item.style.scss';

import {withRouter} from 'react-router-dom';

//to not make prop tunelling we will use withRouter (HoC)

const MenuItem= ({title, imageUrl, size, history, linkUrl, match}) => (

            <div className= {`${size}  menu-item`}
                 onClick = {()=> history.push( `${match.url}${linkUrl}`)} // someurl/linkurl
                >
                <div className = 'background-image' 
                     style={{
                        background:`url(${imageUrl})`
                        }}
                    >
                    <div className='content'>
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <span className='subtitle'>SUB TITLR</span>
                    </div>
                </div>
            </div>

)

//HOC takes any component and modifies somehow and gives a powered up component
export default withRouter(MenuItem);  //it will return router, params now
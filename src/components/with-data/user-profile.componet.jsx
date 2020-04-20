import React from 'react';

import WithData from './with-data.hoc.component';


const UserProfile = ({data, name, email}) => {
    <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
    </div>
    <div>
        {
            data.map((post) => (
                <ul>
                    <li key = {post.id}>
                        {post.message}
                    </li>
                </ul>
            ))
        }
    </div>
};

//we can send the url as props too
export default WithData(
    UserProfile,
     'https://www.user.com/lists'
)
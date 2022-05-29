import React from 'react';

import './page-header.scss';
import bg from '../../assets/footer-bg.jpg';

const PageHeader = props => {
    return (
        // page header for detail and catlog section.
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
        </div>
    );
}

export default PageHeader;
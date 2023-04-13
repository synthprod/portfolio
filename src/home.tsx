import React from 'react';

import Header from './header';
import Main from './main';

class Home extends React.Component {
    render(): React.ReactNode {
        return(
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default Home;
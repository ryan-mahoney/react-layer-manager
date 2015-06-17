import React from 'react';
import RouterLayerHandler from '../../lib/components/RouterLayerHandler';
import Info from './Info.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <RouterLayerHandler {...this.props} />
                <Info />
            </div>
        );
    }
}

export default App;
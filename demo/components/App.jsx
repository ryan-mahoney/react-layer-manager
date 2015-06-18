import React from 'react';
import Layers from '../../lib/components/Layers';
import Info from './Info.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Layers {...this.props} />
                <Info />
            </div>
        );
    }
}

export default App;
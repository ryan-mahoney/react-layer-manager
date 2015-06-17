import React from 'react';
import LayerLink from '../../lib/components/LayerLink';
import Modal from '../../lib/components/layers/Modal';
import Test from './Test.jsx';

class Info extends React.Component {

    render() {
        return (
            <div>
                <h1>React Layer Router</h1>
                <p>This is a demo</p>

                <br />
                <br />

                <LayerLink component={Test} layer="new" wrapper={Modal}>Open a Layer</LayerLink>
            </div>
        );
    }
}

export default Info;
import React, { Component } from 'react';
import { View } from './components/View';
import { Input, Form } from './components/Form';

class App extends Component {
  render() {
    return (
        <View>
            <Form>
                <Input ph='Email ' />
                <Input ph='Password ' />
            </Form>
        </View>
    );
  }
}

export default App;

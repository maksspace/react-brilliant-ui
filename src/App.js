import React, { Component } from 'react';
import { View } from './components/View';
import { Input, Form, Field } from './components/Form';
import { Icon } from './components/Icon';

class App extends Component {
  render() {
    return (
        <View>
            <Form>
                <Field>
                    <Input ph='Email ' />
                </Field>
                <Field>
                    <Input ph='Password ' />
                    <Icon name='sign_in'/>
                </Field>
            </Form>
        </View>
    );
  }
}

export default App;

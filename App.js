import React, {Component} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      x1: 0,
      x2: 0,
    };
  }

  quadForm = () => {
    let {num1, num2, num3} = this.state;
    // Evitar a=0, si divide entre 0 crashea el programa
    if (num1 == 0 || !num1) {
      this.setState({...this.state, x1: 0, x2: 0})
      return;
    }
    console.log(this.state);

    // Parte de la raiz cuadrada
    let radicalFactor = Math.sqrt(num2 * num2 - 4 * num1 * num3);
    // Resto de la fórmula
    let x1 = (-num2 + radicalFactor) / (2 * num1);
    let x2 = (-num2 - radicalFactor) / (2 * num1);

    // Enviar al state los resultados
    this.setState({...this.state, x1, x2});
  };

  // Estética en la ecuación mostrada decidir si colocar + o - en la expresion
  signedValue = (num) => {
    if (num < 0) {
      return `- ${-num}`;
    } else {
      return `+ ${num}`;
    }
  };

  render() {
    return (
      <View
        style={{
          alignContent: 'center',
          justifyItems: 'center',
          marginVertical: 5,
          marginHorizontal: 20,
        }}>
          {/* Primer Input */}
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <Text style={{fontSize: 25, textAlignVertical: 'center'}}>a = </Text>
          <TextInput
            style={{borderBottomWidth: 1, margin: 0, fontSize: 25, flex: 1}}
            placeholder="0"
            keyboardType="decimal-pad"
            onChangeText={(num1) => {
              num1 = num1 ? +num1 : 0;
              this.setState({...this.state, num1});
            }}></TextInput>
        </View>
        {/* Segundo Input */}
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <Text style={{fontSize: 25, textAlignVertical: 'center'}}>b = </Text>
          <TextInput
            style={{borderBottomWidth: 1, margin: 0, fontSize: 25, flex: 1}}
            keyboardType="decimal-pad"
            placeholder="0"
            onChangeText={(num2) => {
              num2 = num2 ? +num2 : 0;
              this.setState({...this.state, num2});
            }}></TextInput>
        </View>
        {/* Tercer Input */}
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <Text style={{fontSize: 25, textAlignVertical: 'center'}}>c = </Text>
          <TextInput
            style={{borderBottomWidth: 1, margin: 0, fontSize: 25, flex: 1}}
            keyboardType="decimal-pad"
            placeholder="0"
            onChangeText={(num3) => {
              num3 = num3 ? +num3 : 0;
              this.setState({...this.state, num3});
            }}></TextInput>
        </View>
        {/* Boton */}
        <View style={{marginVertical: 20}}>
          <Button title="Calcular" color="#6b1631" onPress={this.quadForm} />
        </View>
        {/* Resultados */}
        <View
          style={{
            alignItems: 'center',
          }}>
          {/* VISUALIZADOR DE LA ECUACION */}
          <Text style={{fontSize: 40}}>
            {this.state.num1}x
            <View style={{transform: [{translateY: -15}]}}>
              <Text style={{fontSize: 18}}>2</Text>
            </View>{' '}
            {this.signedValue(this.state.num2)}x{' '}
            {this.signedValue(this.state.num3)}
          </Text>
          {/* VISUALIZADOR DEL RESULTADO */}
          <Text style={{fontSize: 30}}>
            x
            <View style={{transform: [{translateY: 10}]}}>
              <Text style={{fontSize: 15}}>1</Text>
            </View>{' '}
            = {this.state.x1}, x
            <View style={{transform: [{translateY: 10}]}}>
              <Text style={{fontSize: 15}}>2</Text>
            </View>{' '}
            = {this.state.x2}
          </Text>
        </View>
      </View>
    );
  }
}
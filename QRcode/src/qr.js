import React, {useState} from 'react';
import {StyleSheet, View, TextInput,Dimensions,Button} from 'react-native';
import QRCode from 'react-native-qrcode';

const {height,width} = Dimensions.get('screen')

const QR = () => {
  const [state, setState] = useState({
      textIn:'',
      textOu:''
  });

  const _onChange = (event) => {
    const { value } = event.target;
    console.log("VALUEEE",value)
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const submit=()=>
  {
      setState({TextOu:state.textIn})

  }


  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChange={(event)=>setState({textIn:event})}
          placeholder="Enter"
        />
      </View>
      <View>
       <Button title="HELLO" onPress={submit}/>
      </View>
      <View>
        <QRCode value={state.textOu} size={250} bgColor="black" fgColor="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height:height,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:"center"
  },

  input: {
    height: 40,
    width: width-90,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
});

export default QR;

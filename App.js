import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import './server'
import { Formik } from 'formik'
import GlobalStyle from './GlobalStyle'

export default function App() {
  
  const [fans, setFans] = useState([]);
  const [msg, setMsg] = useState('')

  console.log(fans);

useEffect(() => {
    fetch('/api/waiting-list')
      .then(res => res.json())
      .then(json => setFans(json.fans));
  }, []);

  const handleSubmit = (values) => {
    let emailAddress = values.email
    let mobileNumber = values.phone

  if (emailAddress && mobileNumber) {

 fetch('/api/waiting-list',{
      method: 'POST', 
      body: JSON.stringify({emailAddress,mobileNumber})
    })
    .then(data=>data.json())
    .then(res=>{
      setFans(res.fans)
    })

    setMsg("Thank you! Your details is saved")

  } else {
    setMsg("Please check and enter correct details")
  }

  }

  return (
    <View style={GlobalStyle.container}>

      <View>
            <Text style={GlobalStyle.title}>Join the waiting list</Text>
            <Formik
            initialValues = {{email:'', phone:''}}
            
            onSubmit={(values, actions) => {
                actions.resetForm()
                
                handleSubmit(values)
                
            }}
            >
                {
                    (props)=>(
                        <View>
                            <TextInput
                            style={GlobalStyle.input}
                            placeholder="email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            keyboardType='default'
                            
                            />
                            <TextInput
                            style={GlobalStyle.input}
                            placeholder="mobile"
                            onChangeText={props.handleChange('phone')}
                            value={props.values.phone}
                            keyboardType='numeric'
                            />

                          <TouchableOpacity
                          onPress={props.handleSubmit}
                           style={[GlobalStyle.button, {backgroundColor:'#046CDE'}]}
                          >
                            <Text style={GlobalStyle.buttonText}>Submit</Text>
                          </TouchableOpacity>

                        </View>
                    )
                }
            </Formik>
        </View>
      <Text
       style={GlobalStyle.msg}
      >{msg}</Text>
      </View>

  );
}

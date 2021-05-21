import React from 'react';
import {Text, View} from 'react-native';
import {createServer} from 'miragejs';

if (window.server) {
  server.shutdown();
}

let fans = [
    // {id: 1, emailAddress: 'a@a.com', mobileNumber: '07970676426'},
    // {id: 2, emailAddress: 'b@b.com', mobileNumber: '07734563976'},
    // {id: 3, emailAddress: 'c@c.com', mobileNumber: '07481904041'},
  ]

window.server = createServer({
  routes() {

    this.get('/api/waiting-list', () => {
      return {
        fans
      };
    });
    let id = 1
    this.post('/api/waiting-list', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = id++
      console.log(attrs);
      fans.push(attrs)

      return {fans}
    });
  },
});

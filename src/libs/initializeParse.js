import Parse from 'parse/react-native';

const initializeParse = function() {
  Parse.initialize("XIyEFQPNeMbHmNmGJff2aRQl3VZ2bJzvJykTlTh7", "mMR3Yoj6luvnCxgxpiKLxpSuhVvTTOE4CCiWDjMU");

  /*var TestObject = Parse.Object.extend("TestObject");*/
  /*var testObject = new TestObject();*/
  /*testObject.save({foo: "bar"}, {*/
  /*success : (savedObject) => {},*/
  /*error : () => {}*/
  /*});*/
}

export default initializeParse;

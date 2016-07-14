import Parse from 'parse/react-native';

const initializeParse = function() {
  console.log("Initializing Parse...");
  Parse.initialize("XIyEFQPNeMbHmNmGJff2aRQl3VZ2bJzvJykTlTh7", "mMR3Yoj6luvnCxgxpiKLxpSuhVvTTOE4CCiWDjMU");

  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
    console("yay! it worked");
  });
}

export default initializeParse;

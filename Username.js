import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from "react-redux";

import { setUserName } from "./actions";

class Username extends Component {
  state = { name: "" };
  render = () => {
    const { name, setUserName } = this.props;
    const { name: namel } = this.state;
    return (
      <View style={styles.container}>
        <Text>Enter Name Below</Text>
        <TextInput
          value={namel}
          onChangeText={text => this.setState({ name: text })}
          style={styles.textInput}
        />
        <Button title="Submit" onPress={() => setUserName(namel)} />
        <Text>Submitted Name {name}</Text>
      </View>
    );
  };
}

const mapStateToProps = ({ name }) => ({ name });

export default connect(
  mapStateToProps,
  { setUserName }
)(Username);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    margin: 16
  }
});

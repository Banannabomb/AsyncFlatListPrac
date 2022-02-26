import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const FlatListComponent = ({ allItems }) => {
	return allItems.map((element) => {
		return (
			<View style={styles.text}>
				<Text style={{ fontSize: 20 }}>{element}</Text>
			</View>
		);
	});
};

export default FlatListComponent;

const styles = StyleSheet.create({
	text: {
		backgroundColor: "blue",
		borderRadius: 10,
		padding: 20,
		marginVertical: 10,
		width: "80%",
	},
});

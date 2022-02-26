import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const storeData = async (value) => {
	try {
		await AsyncStorage.setItem(uuid.v4(), value);
	} catch (err) {
		console.log(err);
	}
};

const getData = async () => {
	try {
		const keys = await AsyncStorage.getAllKeys();
		const result = await AsyncStorage.multiGet(keys);
		console.log(result);
		return result;
	} catch (err) {
		console.log(err);
	}
};

const clearData = async () => {
	try {
		AsyncStorage.clear();
	} catch (err) {
		console.log(err);
	}
};

export { storeData, getData, clearData };

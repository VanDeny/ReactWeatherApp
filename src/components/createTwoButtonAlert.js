export const createTwoButtonAlert = () =>
    Alert.alert(
        "Alert",
        "Provided city doesn't exist",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Well fine"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );

import { Stack } from "expo-router";

export default function PlaceLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: "Place Details",
        }}
      />
    </Stack>
  );
}
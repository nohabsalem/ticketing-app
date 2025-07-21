import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: "#fe00000",
          padding: 20,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "La Plateforme",
        }}
      />
    </Stack>
  );
}

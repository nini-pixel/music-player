import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                headerRight: () => (
                    <Link href="/profile" asChild>
                    <Pressable>
                        {({ pressed }) => (
                        <FontAwesome
                            name="user"
                            size={25}
                            color={'black'}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                        )}
                    </Pressable>
                    </Link>
                ),
                }}
            />
            <Tabs.Screen
                name="artists"
                options={{
                title: 'Artists',
                tabBarIcon: ({ color }) => <TabBarIcon name="th" color={color} />,
                }}
            />
            <Tabs.Screen
                name="playlists"
                options={{
                title: 'Playlists',
                tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favourites"
                options={{
                title: 'Favourites',
                tabBarIcon: ({ color }) => <TabBarIcon name="th-list" color={color} />,
                }}
            />
        </Tabs>
    )
}
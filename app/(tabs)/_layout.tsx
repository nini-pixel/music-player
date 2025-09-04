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
        <Tabs 
         screenOptions= {{
            tabBarStyle: {
                position:'absolute',
                bottom: 10,
                left: 20,
                right: 20,
                
                height: 60,
                backgroundColor: 'white',
                
                borderRadius: 20,
                borderWidth: 1,
                borderBottomWidth: 2,
                borderRightWidth: 1.6,
             },
            tabBarItemStyle: {
                marginHorizontal: 6,
                borderRadius: 10,
            },
            headerShadowVisible: false,
          }}
        >
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
                headerStyle: {
                    backgroundColor: '#bfdbfe'
                },
                headerShadowVisible: false,
                }}
                
            />
            <Tabs.Screen
                name="podcast"
                options={{
                title: 'Podcast',
                tabBarIcon: ({ color }) => <TabBarIcon name="music" color={color} />,
                tabBarLabel: 'Podcast',
                headerStyle: {
                    backgroundColor: 'rgba(55,55,255,0)',
                    borderWidth: 0,
                },
                headerShown: false,
                }}
            />
            <Tabs.Screen
                name="playlists"
                options={{
                title: 'Playlists',
                tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
                tabBarLabel: 'Playlists',
                }}
            />
            <Tabs.Screen
                name="favourites"
                options={{
                headerTitle: 'Favourites',
                tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
                tabBarLabel: 'Favourites',
                }}
            />
        </Tabs>
    )
}
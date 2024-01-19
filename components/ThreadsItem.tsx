import * as React from "react";
import { Thread } from "../types/threads";
import { View, useColorScheme, StyleSheet } from "react-native";
import { Text } from "./Themed";
import { Ionicons, Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

import { timeAgo } from "@/utils/time-ago";

const blurhash = "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

export default function ThreadsItem(thread: Thread):JSX.Element {
    return (
    <View>
        <Text>{thread.author.username} hey</Text>
        <View>
            <PostHeading 
                name={thread.author.name} 
                createdAt={thread.createdAt} 
                verified={thread.author.verified}
            />
            <Text>{thread.content}</Text>
            {thread.image && (
                <Image
                    source={thread.image}
                    style={{width: '100%', minHeight: 300, borderRadius: 10}}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={200}
                />
            )}
            <BottomIcons/>
            <PostFooter
                replies={thread.repliesCount}
                likes={thread.likesCount}
            />
        </View>
    </View>
    )
}

function PostHeading({name, createdAt, verified}: {
    name: string;
    createdAt: string;
    verified: boolean;
}){

    return (
        <View
        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1}}
        >
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Text style={{fontWeight: "500"}}>{name}</Text>
                {verified && (
                    <MaterialIcons name="verified" size={14} color="#60a5fa"/>
                )}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Text style={{color: 'gray'}}>{timeAgo(createdAt)}</Text>
                <Feather name="more-horizontal" size={14} color="gray"/>
            </View>
        </View>
    )
}

function PostFooter({replies, likes}:{replies: number, likes: number}) {
    return(
        <Text style={{color: 'gray'}}>
            {replies} replies · {likes} likes
        </Text>
    )
}

function BottomIcons() {
    const iconSize = 20;
    const currentTheme = useColorScheme();
    const iconColor = currentTheme === "dark" ? "white" : "black";

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap:10}}>
            <FontAwesome name="heart-o" size={iconSize} color={iconColor}/>
            <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor}/>
            <AntDesign name="retweet" size={iconSize} color={iconColor}/>
            <Feather name="send" size={iconSize} color={iconColor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 6,
        paddingBottom: 30
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }
})
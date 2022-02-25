import React, { useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform
}
import { VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';
import { COLORS, FONTS, SIZES, icons, images } '../constants';


const Home = () => {
    // dummy data
    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id:   1,
            name: "Education",
            icon : icons.education
            color : COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition Fee",
                    location: "Hurlingham Center",
                    total: 100.00,
                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "Savanis Book store",
                    total: 20.00
                    status: confirmStatus

                },
                {
                    id: 3,
                    title: "Arduino",
                    description:"Hardware, programmable microcontrollers",
                    location: "Tech-point",
                    total: 20.00,
                    status: confirmStatus

                },
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "ByProgrammers Book Store",
                    total: 20.00,
                    status: confirmStatus
                 }
            ],

        },
        {
            id: 2,
            name: "Nutrition",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "vitamins",
                    description: "Vitamin",
                    location: "All-Night pharmacy",
                    total: 25.00,
                    status: pendingStatus,
                },
                {
                    id: 6,
                    title: "Proten powder",
                    description: "Protein",
                    location: "All-Night pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 3,
            name: "Child",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses : [
              {
                id: 7,
                title: "Toys",
                description: "toys",
                location: "luthuli Toy Store",
                total: 25.00,
                status: confirmStatus,
              },
              {
                 id: 8,
                 title: "Baby Car Seat",
                 description: "Baby Car Seat",
                 location: "Luthuli Avenue Baby Care Store",
                 total : 100.00,
                 status: pendingStatus,
              },
              {
                 id: 9,
                 title: "pampers",
                 description: "Pampers",
                 location: "Naivas Bebabeba supermarket",
                 total: 100.00,
                 status: pendingStatus,
              },
              {
                 id: 10,
                 title: "Baby T-shirt",
                 description: "T-shirt",
                 location: "Afya Centers' Fashion Store",
                 total: 20.00
                 status: pendingStatus,

              },
            ],
        },
        {
            id: 4,
            name: "Beauty & Care",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "BeutyCare Pharmacy",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: "BeautyCare pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "BeautyCare pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "BeautyCare pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Sports",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: "ByProgrammers' Gym",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "ByProgrammers' Gym",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Clothing",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]
    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
    const [categories, setCategories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle , setShowMoreToggle] = React.useState(false)
    
    function renderNavBar(){
        return (
            <View></View>
        
        
        )
    
    
    
    
    
    
    
    
    }   
    
    


}

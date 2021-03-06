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
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 50, }}
                    onPress={() => console.log('Go Back')}
                >
                    <Image
                        source={icons.back_arrow}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => console.log('More')}
                >
                    <Image
                        source={icons.more}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Expenses</Text>
                    <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>Summary (private)</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                    <View style={{
                        backgroundColor: COLORS.lightGray,
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>

                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>11 Nov, 2020</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% more than last month</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategoryHeaderSection() {
        return (
            <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{categories.length} Total</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("chart")}
                    >
                        <Image
                            source={icons.chart}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "list" ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            marginLeft: SIZES.base
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderCategoryList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 5,
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <Image
                    source={item.icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.color
                    }}
                />
                <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.base,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 115,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 172.5,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        }

                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image
                        source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        style={{ marginLeft: 5, width: 15, height: 15, alignSelf: 'center' }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderIncomingExpensesTitle() {
        return (
            <View style={{ height: 80, backgroundColor: COLORS.lightGray2, padding: SIZES.padding }}>
                {/* Title */}
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>INCOMING EXPENSES</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
            </View>
        )
    }

    function renderIncomingExpenses() {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpenses = allExpenses.filter(a => a.status == "P")

        const renderItem = ({ item, index }) => (
            <View style={{
                width: 300,
                marginRight: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...styles.shadow
            }}>
                {/* Title */}
                <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
                    <View 
                        style = {{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: SIZES.base
                        }}
                    >     
                        <Image 
                            source = {selectedCategory.icon}
                            style = {{
                                width: 30,
                                height: 30,
                                tintColor: selectedCategory.color
                            }}
                        />   
                        </View>
                        <Text style = {{ ...FONTS.h3, color: selectCategory.color, }}>{selectedCategory.name}</Text>
                </View>        
                {/* Expense Desccription */}
                <View style={{ PaddingHorizontal: SIZES.padding }}>
                    {/* Title and description */}
                    <Text style={{ ...FONTS.h2, }}> {item.title} </Text>
                    <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}> {item.description} </Text>
                    {/* Location */}
                    <Text style={{ marginTop: SIZES.padding , ...FONTS.h4, }}>Location</Text>
                    <View style ={{ flexDirection: 'row' }}>
                        <Image 
                            source = {icons.pin}
                            style = {{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray,
                                marginRight: 5
                            }}
                        />
                        <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray , ...FONTS.body4}}>{item.location}</Text>
                    </View>
                </View>
                {/* Price */}
                <View
                    style = {{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomStartRadius: SIZES.radius,
                        borderBottomEndRadius: SIZES.radius,
                        backgroundColor: selectedCategory.color,
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}> CONFIRM {item.total.toFixed(2)} USD </Text>
        </View>
    </View>    
)

return (
    <View>
        {renderIncomingExpensesTitle()}
        {
            incomingExpenses.length > 0 &&
            <FlatList
                data = {incomingExpenses}
                renderItem = {renderItem}
                keyExtractor = {item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator = {false}
             />
        }
        {
            incomingExpenses.length == 0 &&
            <View style ={{ alignItems: 'center', justifyContent: 'center', height: 300}}>
                <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>      
            </View>
        }
    </View>
)
    
    
    
    
    
    
    
    
    }   
    
    


}

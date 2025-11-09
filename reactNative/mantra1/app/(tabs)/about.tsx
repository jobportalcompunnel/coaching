import React, { useState } from 'react';
// NOTE: In a real React Native project, these imports are standard:
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const SCREENS = {
  AboutIndex: { title: 'About Us (Overview)', component: 'AboutScreenContent' },
  WhatWeDo: { title: 'What We Do', component: 'WhatWeDoScreen' },
  OurPartners: { title: 'Our Partners', component: 'OurPartnersScreen' },
};

const DrawerContent = ({ currentScreen, setScreen, toggleDrawer }: any) => (
  <View style={styles.drawerContainer}>
    <Text style={styles.menuHeader}>Menu</Text>
    {Object.entries(SCREENS).map(([key, value]) => (
      <TouchableOpacity
        key={key}
        style={[
          styles.menuItem,
          currentScreen === key ? styles.menuItemActive : styles.menuItemInactive
        ]}
        onPress={() => {
          setScreen(key);
          toggleDrawer(false);
        }}
      >
        <Text style={currentScreen === key ? styles.menuTextActive : styles.menuTextInactive}>
          {value.title}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

// 1. Define the Content Screens using React Native components

const WhatWeDoScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.screenTitleBlue}>What We Do</Text>
    <Text style={styles.screenBody}>
      We specialize in innovative digital solutions, focusing on sustainable technology development and ethical AI integration to drive global impact.
    </Text>
  </View>
);

const OurPartnersScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.screenTitleGreen}>Our Partners</Text>
    <Text style={styles.screenBody}>
      We proudly collaborate with leading industry experts, academic institutions, and non-profit organizations globally to maximize our reach and innovation.
    </Text>
  </View>
);

const AboutScreenContent = ({ toggleDrawer }: any) => (
  <View style={styles.screen}>
    <Text style={styles.screenTitle}>Welcome to the About Tab</Text>
    <Text style={styles.screenSubtitle}>
      Click the menu button to navigate our sections: What We Do and Our Partners.
    </Text>
    <TouchableOpacity
      style={styles.openMenuButton}
      onPress={() => toggleDrawer(true)}
    >
      <Text style={styles.openMenuButtonText}>Open Sidebar Menu</Text>
    </TouchableOpacity>
  </View>
);


// 2. Define the Nested Drawer Navigator (React Native Structure)

const AboutDrawerNavigator = () => {
  const [currentScreen, setCurrentScreen] = useState('AboutIndex');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'WhatWeDo':
        return <WhatWeDoScreen />;
      case 'OurPartners':
        return <OurPartnersScreen />;
      case 'AboutIndex':
      default:
        return <AboutScreenContent toggleDrawer={setIsDrawerOpen} />;
    }
  };

  return (
    <View style={styles.navigatorContainer}>
      {/* Header/Title Bar (Simulated) */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => setIsDrawerOpen(true)}
          accessibilityLabel="Open menu"
        >
          {/* Mock Hamburger Icon */}
          <Text style={{ fontSize: 24, fontWeight: '900', color: '#4b5563' }}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {SCREENS[currentScreen]?.title || 'About Us'}
        </Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* Main Content Area */}
      <View style={styles.mainContent}>
        {renderCurrentScreen()}
      </View>

      {/* Drawer Overlay (Simulated) */}
      {isDrawerOpen && (
        <TouchableOpacity
          style={styles.drawerOverlay}
          onPress={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Sidebar Drawer (Simulated) */}
      <View
        style={[
          styles.drawerSidebar,
          { transform: [{ translateX: isDrawerOpen ? 0 : -300 }] } // 300 is max-w-xs equivalent
        ]}
      >
        <DrawerContent
          currentScreen={currentScreen}
          setScreen={setCurrentScreen}
          toggleDrawer={setIsDrawerOpen}
        />
      </View>
    </View>
  );
};


// 3. Main App Component (Wraps the drawer for layout)
const AppList = () => {
  // In a real React Native app, this component would be registered as a screen.
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <NavigationContainer> -- Would wrap the navigator in a real app */}
        <AboutDrawerNavigator />
      {/* </NavigationContainer> */}
    </SafeAreaView>
  );
};

export default AppList;

// 4. React Native StyleSheet for visual design
const styles = StyleSheet.create({
  // General Containers
  appContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
    width: '100%',
    height: '100%',
  },
  navigatorContainer: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  hamburger: {
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  headerPlaceholder: {
    width: 32, // To balance the hamburger
  },

  // Main Content
  mainContent: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  screenTitleBlue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2563eb',
    marginBottom: 8,
    textAlign: 'center',
  },
  screenTitleGreen: {
    fontSize: 28,
    fontWeight: '700',
    color: '#059669',
    marginBottom: 8,
    textAlign: 'center',
  },
  screenSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 30,
    textAlign: 'center',
  },
  screenBody: {
    fontSize: 18,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: 300,
  },
  openMenuButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  openMenuButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Drawer
  drawerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 40,
  },
  drawerSidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '75%', // Typical drawer width
    maxWidth: 300,
    backgroundColor: '#ffffff',
    zIndex: 50,
    // Note: 'transform' is used for animation simulation, in RN you'd use Animated API
    // transform is handled inline for this simulation
  },
  drawerContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  menuHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  menuItemActive: {
    backgroundColor: '#bfdbfe', // blue-200
  },
  menuItemInactive: {
    backgroundColor: '#ffffff',
  },
  menuTextActive: {
    color: '#1e40af', // blue-800
    fontWeight: '600',
    fontSize: 16,
  },
  menuTextInactive: {
    color: '#4b5563', // gray-700
    fontSize: 16,
  }
});

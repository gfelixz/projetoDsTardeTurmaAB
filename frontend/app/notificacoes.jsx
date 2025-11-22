import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useRef } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Notificacoes = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
  const rf = (size) => Math.round(clamp(size * (width / 390), 12, 30));

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const notificacoes = [
    {
      nome: "Fulano",
      texto: "Seguiu você",
      img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
      nome: "Nirvana",
      texto: "Lançou uma música",
      img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    {
      nome: "Soundgarden da Silva",
      texto: "Mandou uma mensagem",
      img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
  ];

  return (
    <LinearGradient colors={["#8000d5", "#f910a3", "#fddf00"]} style={styles.gradient}>
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TouchableOpacity style={styles.backCircle} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={22} color="#fff" />
          </TouchableOpacity>

          <Animated.View style={{ opacity: fadeAnim, width: "100%", alignItems: "center" }}>
            <Text style={[styles.titulo, { fontSize: rf(26) }]}>Notificações</Text>

            {notificacoes.map((item, i) => (
              <View key={i} style={[styles.card, { padding: rf(16), borderRadius: rf(25) }]}>
                <View style={styles.row}>
                  <Image source={{ uri: item.img }} style={[styles.avatar, { width: rf(60), height: rf(60) }]} />
                  <View>
                    <Text style={[styles.nome, { fontSize: rf(18) }]}>{item.nome}</Text>
                    <Text style={[styles.desc, { fontSize: rf(15) }]}>{item.texto}</Text>
                  </View>
                </View>
              </View>
            ))}
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1 },
  scroll: { flexGrow: 1, paddingTop: 20, alignItems: "center" },

  backCircle: {
    backgroundColor: "#1D143642",
    padding: 10,
    borderRadius: 30,
    position: "absolute",
    top: 10,
    left: 12,
    zIndex: 10,
  },

  titulo: {
    color: "#FFF",
    fontFamily: "negrito",
    marginBottom: 20,
  },

  card: {
    width: "90%",
    backgroundColor: "#1D143642",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#FFF3",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    borderRadius: 100,
    marginRight: 14,
    backgroundColor: "#ffffff33",
  },

  nome: {
    color: "#FFF",
    fontFamily: "negrito",
  },

  desc: {
    color: "#FFF",
    opacity: 0.8,
    fontFamily: "normal",
  },
});

export default Notificacoes;

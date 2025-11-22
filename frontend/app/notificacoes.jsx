import React, { useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

export default function Notificacoes({ navigation }) {
  const { width } = useWindowDimensions();
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
  const rf = useCallback(size => Math.round(clamp(size * (width / 390), 12, 32)), [width]);

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
      <SafeAreaView style={{ flex: 1 }}>

        {/* Botão de voltar */}
        <TouchableOpacity style={styles.backCircle} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={22} color="#fff" />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.container}>

          {/* LOGO */}
          <Image
            source={require("../assets/images/Logofundo.png")}
            style={[styles.logo, { width: rf(180), height: rf(100) }]}
          />

          {/* TÍTULO */}
          <Text style={[styles.title, { fontSize: rf(31) }]}>
            Notificações
          </Text>

          {/* CAIXA DE NOTIFICAÇÕES */}
          <View style={[styles.box, { padding: rf(18), borderRadius: rf(22) }]}>

            {notificacoes.map((item) => (
              <View key={item.id} style={styles.notifItem}>
                <Text style={[styles.notifText, { fontSize: rf(16) }]}>
                  • {item.texto}
                </Text>
              </View>
            ))}

          </View>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },

  backCircle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#ffffff30",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 8,
  },

  container: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 50,
  },

  logo: {
    resizeMode: "contain",
    marginBottom: 12,
	height: 40,
  },

  title: {
    color: "#fff",
    fontFamily: "negrito",
    marginBottom: 18,
  },

  box: {
    width: "90%",
    backgroundColor: "#1D143642",
    borderWidth: 2,
    borderColor: "#FFF",
  },

  notifItem: {
    paddingVertical: 10,
    borderBottomColor: "#ffffff30",
    borderBottomWidth: 1,
  },

  notifText: {
    color: "#fff",
    fontFamily: "normal",
  },
});

export const catalogoTecnico = {
  VENTILACAO: {
    EQUIPAMENTOS: [
      {
        id: "tipo-exaustor",
        nome: "Exaustores",
      },
      {
        id: "tipo-ventilador",
        nome: "Ventiladores",
      },
      {
        id: "tipo-exaustor-inline",
        nome: "Exaustores Inline",
      },
      {
        id: "tipo-ventilador-inline",
        nome: "Ventiladores Inline",
      },
      {
        id: "tipo-tomada-ar",
        nome: "Tomada de Ar",
      },
    ],

    MATERIAIS: [],

    GRAUS_FILTRAGEM: [
      {
        id: "sem-filtragem",
        nome: "Sem filtragem",
      },
      {
        id: "g4",
        nome: "G4",
      },
      {
        id: "g4-m5",
        nome: "G4 + M5",
      },
      {
        id: "g4-f7",
        nome: "G4 + F7",
      },
      {
        id: "g4-f8",
        nome: "G4 + F8",
      },
      {
        id: "g4-f9",
        nome: "G4 + F9",
      },
      {
        id: "g4-f8-h13",
        nome: "G4 + F8 + H13",
      },
      {
        id: "g4-f9-h13",
        nome: "G4 + F9 + H13",
      },
    ],
  },

  CLIMATIZACAO: {
    EQUIPAMENTOS: [
      {
        id: "tipo-fancoil",
        nome: "Fancoils",
      },
      {
        id: "tipo-vrf",
        nome: "VRF",
      },
    ],

    MATERIAIS: [],
  },

  TENSOES: [
    "127V/1F/60Hz",
    "220V/3F/60Hz",
    "220V/1F/60Hz",
    "380V/3F/60Hz",
    "440V/3F/60Hz",
  ],
};